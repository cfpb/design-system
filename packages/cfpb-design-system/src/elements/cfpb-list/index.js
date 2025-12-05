import { LitElement, html, css, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './cfpb-list.component.scss';
import { CfpbListItem } from '../cfpb-list-item';

export class CfpbList extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  #container = createRef();
  #items = [];
  #checkedItems = [];
  #visibleItems = [];
  #focusedIndex = 0;

  // WeakMap to store per-item click listeners.
  #clickListeners = new WeakMap();

  /**
   * @property {boolean} multiple - Whether the select supports multiple or not.
   * @returns {object} The map of properties.
   */
  static properties = {
    multiple: { type: Boolean, reflect: true },
    itemsData: { type: String, attribute: 'itemsdata' },
    type: { type: String, reflect: true },
    ariaLabel: { type: String, attribute: 'aria-label' },
  };

  constructor() {
    super();
    this.multiple = false;
    this.itemsData = '';
    this.type = 'plain';
    this.ariaLabel = '';
  }

  firstUpdated() {
    this.#syncItems();
  }

  updated(changedProps) {
    if (changedProps.has('itemsData')) {
      this.#parseItemsData();
    }

    if (changedProps.has('type')) {
      this.#applyTypeToItems();
    }
  }

  // -------------------------
  // ITEMS ACCESS
  // -------------------------
  get items() {
    return this.#items;
  }

  get checkedItems() {
    return this.#checkedItems;
  }

  get visibleItems() {
    return this.#visibleItems;
  }

  // -------------------------
  // PARSE ATTRIBUTE OR JS ARRAY
  // -------------------------
  #parseItemsData() {
    if (!this.itemsData) return;

    let itemsArray;
    try {
      if (Array.isArray(this.itemsData)) {
        // Direct JS array.
        itemsArray = this.itemsData;
      } else {
        // HTML-safe JSON: replace single quotes with double quotes
        itemsArray = JSON.parse(this.itemsData.replace(/'/g, '"'));
      }
    } catch (err) {
      console.error('Invalid JSON for <cfpb-list itemsData>', err);
      return;
    }

    if (!Array.isArray(itemsArray)) {
      console.error('<cfpb-list itemsData> must be a JSON array');
      return;
    }

    this.#renderItemsFromData(itemsArray);
  }

  // -------------------------
  // RENDER ITEMS
  // -------------------------
  #renderItemsFromData(itemsArray) {
    // Remove all children except <template> and <noscript>.
    [...this.children].forEach((child) => {
      if (child.tagName !== 'TEMPLATE' && child.tagName !== 'NOSCRIPT')
        child.remove();
    });

    let firstChecked;
    itemsArray.forEach((data) => {
      const item = document.createElement('cfpb-list-item');
      item.textContent = data.value ?? '';
      if ('disabled' in data) item.disabled = data.disabled;
      if ('hidden' in data) item.hidden = data.hidden;
      if ('href' in data) item.href = data.href;
      item.type = data.type ?? this.type;
      if (this.multiple) {
        if ('checked' in data) item.checked = data.checked;
      } else if (!firstChecked && data.checked) {
        firstChecked = true;
        if ('checked' in data) item.checked = true;
      }

      this.appendChild(item);
    });

    this.#syncItems();
  }

  // -------------------------
  // SYNC ITEMS & LISTENERS
  // -------------------------
  #syncItems() {
    // Collect items.
    this.#items = [...this.querySelectorAll('cfpb-list-item')];

    // Ensure each item has a type.
    this.#items.forEach((item) => {
      if (!item.type) item.type = this.type;
    });

    // Visible items.
    this.#visibleItems = this.#items.filter((item) => !item.hidden);

    // Populate initial checked states.
    if (this.multiple) {
      this.#checkedItems = this.#items.filter((item) => item.checked);
    } else {
      const firstChecked = this.#items.find((item) => item.checked);
      this.#checkedItems = firstChecked ? [firstChecked] : [];

      // Uncheck all others.
      this.#items.forEach((item) => {
        if (item !== firstChecked) item.checked = false;
      });
    }

    // Assign tabindex, role, listeners.
    this.#items.forEach((item, index) => {
      item.setAttribute('tabindex', index === 0 ? '0' : '-1');
      item.setAttribute('role', 'option');

      // Remove prior listener if present.
      const prev = this.#clickListeners.get(item);
      if (prev) item.removeEventListener('click-item', prev);

      // Listener that toggles the item before handling.
      const listener = (evt) => {
        // Prevent actual click bubbling to list container.
        evt.stopPropagation();

        this.#handleToggle(item, item.checked, index);
      };

      item.addEventListener('click-item', listener);
      this.#clickListeners.set(item, listener);

      // Track focus index.
      item.addEventListener('focus', () => {
        this.#focusedIndex = index;
      });
    });

    this.dispatchEvent(
      new CustomEvent('items-ready', {
        detail: {
          items: this.#items,
          checkedItems: this.#checkedItems,
          visibleItems: this.#visibleItems,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  #applyTypeToItems() {
    if (!['plain', 'check', 'checkbox'].includes(this.type)) {
      console.warn(`<cfpb-list>: invalid type "${this.type}".`);
      return;
    }
    this.#items.forEach((item) => (item.type = this.type));
  }

  #handleToggle(element, isChecked, index) {
    if (this.multiple) {
      if (isChecked) {
        // Add if not already present.
        if (!this.#checkedItems.includes(element)) {
          this.#checkedItems.push(element);
        }
      } else {
        // Remove cleanly.
        this.#checkedItems = this.#checkedItems.filter(
          (item) => item !== element,
        );
      }
    } else {
      if (isChecked) {
        // Select this item, uncheck all others.
        this.#items.forEach((item) => {
          if (item !== element) item.checked = false;
        });
        this.#checkedItems = [element];
      } else {
        // Item is unchecked -> clear selection.
        this.#checkedItems.forEach((item) => (item.checked = false));
        this.#checkedItems = [];
      }
    }

    this.dispatchEvent(
      new CustomEvent('item-click', {
        detail: { index, value: element.value, element },
        bubbles: true,
        composed: true,
      }),
    );
  }

  // -------------------------
  // FILTER & FOCUS
  // -------------------------
  filterItems(queryList) {
    let firstIndex = 0;
    this.#visibleItems = [];

    this.items.forEach((item) => {
      const valueLower = item.value.toLowerCase();
      const matches = queryList.some((q) =>
        valueLower.includes(q.toLowerCase()),
      );
      if (!matches) firstIndex++;
      else this.#visibleItems.push(item);
      item.hidden = !matches;
    });

    this.#focusedIndex = firstIndex;

    return this.#visibleItems;
  }

  showAllItems() {
    this.items.forEach((item) => (item.hidden = false));
    this.#focusedIndex = 0;
    this.#visibleItems = this.#items;
  }

  focusItemAt(index) {
    const visibleItems = this.items.filter((item) => !item.hidden);
    if (!visibleItems.length) return;

    const normalizedIndex =
      ((index % visibleItems.length) + visibleItems.length) %
      visibleItems.length;
    const item = visibleItems[normalizedIndex];
    item.focus();
    this.#focusedIndex = normalizedIndex;
  }

  #onFocus(evt) {
    // If the focus is on the container itself (not an item), set index to -1.
    if (evt.target === this.#container.value) {
      this.#focusedIndex = -1;
    }
  }

  // -------------------------
  // KEYBOARD NAVIGATION
  // -------------------------
  #onKeyDown(evt) {
    const visibleItems = this.items.filter((item) => !item.hidden);
    if (!visibleItems.length) return;
    const last = visibleItems.length - 1;

    switch (evt.key) {
      case 'ArrowDown':
        evt.preventDefault();
        this.focusItemAt(this.#focusedIndex + 1);
        break;
      case 'ArrowUp':
        evt.preventDefault();
        this.focusItemAt(this.#focusedIndex - 1);
        break;
      case 'Home':
        evt.preventDefault();
        this.focusItemAt(0);
        break;
      case 'End':
        evt.preventDefault();
        this.focusItemAt(last);
        break;
    }
  }

  render() {
    return html`
      <div
        role="listbox"
        tabindex="0"
        @keydown=${this.#onKeyDown}
        @focus=${this.#onFocus}
        aria-label=${this.ariaLabel}
        ?aria-multiselectable=${this.multiple}
        ${ref(this.#container)}
      >
        <slot></slot>
      </div>
    `;
  }

  static init() {
    CfpbListItem.init();
    if (!window.customElements.get('cfpb-list')) {
      window.customElements.define('cfpb-list', CfpbList);
    }
  }
}
