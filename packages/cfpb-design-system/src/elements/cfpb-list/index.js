import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './cfpb-list.component.scss';
import { CfpbListItem } from '../cfpb-list-item';

export class CfpbList extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  #items = [];
  #checkedItems = [];
  #visibleItems = [];
  #focusedIndex = 0;
  #clickListeners = new WeakMap(); // WeakMap to store per-item click listeners

  static properties = {
    multiple: { type: Boolean, reflect: true },
    itemsData: { type: String, attribute: 'itemsdata' },
  };

  constructor() {
    super();
    this.multiple = false;
    this.itemsData = '';
  }

  firstUpdated() {
    this.#syncItems();
  }

  updated(changedProps) {
    if (changedProps.has('itemsData')) {
      this.#parseItemsData();
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
        itemsArray = this.itemsData; // direct JS array
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
    // Remove all children except <template>
    [...this.children].forEach((child) => {
      if (child.tagName !== 'TEMPLATE' || child.tagName !== 'NOSCRIPT')
        child.remove();
    });

    itemsArray.forEach((data) => {
      const item = document.createElement('cfpb-list-item');
      item.textContent = data.value ?? '';
      if ('checked' in data) item.checked = data.checked;
      if ('disabled' in data) item.disabled = data.disabled;
      if ('hidden' in data) item.hidden = data.hidden;
      if ('type' in data) item.type = data.type;
      if ('href' in data) item.href = data.href;

      this.appendChild(item);
    });

    this.#syncItems();
  }

  // -------------------------
  // SYNC ITEMS & LISTENERS
  // -------------------------
  #syncItems() {
    this.#items = [...this.querySelectorAll('cfpb-list-item')];
    this.#visibleItems = this.#items.filter((i) => !i.hidden);

    // Populate #checkedItems based on pre-checked items.
    if (this.multiple) {
      this.#checkedItems = this.#items.filter((item) => item.checked);
    } else {
      const firstChecked = this.#items.find((item) => item.checked);
      this.#checkedItems = firstChecked ? [firstChecked] : [];

      // Uncheck any other items.
      this.#items.forEach((item) => {
        if (item !== firstChecked) item.checked = false;
      });
    }

    this.#items.forEach((item, index) => {
      item.setAttribute('tabindex', index === 0 ? '0' : '-1');
      item.setAttribute('role', 'option');

      // Remove previous listener if exists
      const prevListener = this.#clickListeners.get(item);
      if (prevListener) {
        item.removeEventListener('click', prevListener);
      }

      const listener = () => this.#fireItemClick(index, item);
      item.addEventListener('click', listener);
      this.#clickListeners.set(item, listener);

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

  #fireItemClick(index, element) {
    if (this.multiple) {
      if (element.checked) this.#checkedItems.push(element);
      else this.#checkedItems = this.#checkedItems.filter((i) => i !== element);
    } else {
      this.#checkedItems.forEach((i) => {
        if (i !== element) i.checked = false;
      });
      this.#checkedItems = [element];
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
  }

  showAllItems() {
    this.items.forEach((i) => (i.hidden = false));
    this.#focusedIndex = 0;
    this.#visibleItems = this.#items;
  }

  focusItemAt(index) {
    const visibleItems = this.items.filter((i) => !i.hidden);
    if (!visibleItems.length) return;

    const item = visibleItems[index % visibleItems.length];
    item.focus();
    this.#focusedIndex = index % visibleItems.length;
  }

  // -------------------------
  // KEYBOARD NAVIGATION
  // -------------------------
  #onKeyDown(evt) {
    const visibleItems = this.items.filter((i) => !i.hidden);
    if (!visibleItems.length) return;
    const last = visibleItems.length - 1;

    switch (evt.key) {
      case 'ArrowDown':
        evt.preventDefault();
        this.focusItemAt((this.#focusedIndex + 1) % visibleItems.length);
        break;
      case 'ArrowUp':
        evt.preventDefault();
        this.focusItemAt(
          (this.#focusedIndex - 1 + visibleItems.length) % visibleItems.length,
        );
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
      <div role="listbox" tabindex="0" @keydown=${this.#onKeyDown}>
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
