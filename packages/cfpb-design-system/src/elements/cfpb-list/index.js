import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import styles from './styles.component.scss?inline';
import { parseChildData } from '../utilities/parse-child-data';

const SUPPORTED_TAG_LIST = new Set([
  'CFPB-TAG-FILTER',
  'CFPB-TAG-TOPIC',
  'CFPB-LIST-ITEM',
  'CFPB-LINK',
]);

/**
 * @element cfpb-list.
 * @description A list of items (filter or topic tags, list-items, or links),
 *   which can be added and removed.
 *
 *   The list of items in the lightDOM gets re-written
 *   inside an unordered list in the shadowDOM,
 *   so that it is read out as a list of items in VoiceOver.
 * @slot - Slot for the list of items in the list.
 * @fires item-added - An item was added to the group.
 * @fires item-click - An item was clicked.
 * @fires item-removed - An item was removed to the group.
 */
export class CfpbList extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  #items = [];

  /**
   * @property {string} childData - Structure data to create child components.
   * @property {string} colorTheme - The color theme of the link. Takes 'dark'.
   * @returns {object} The map of properties.
   */
  static properties = {
    childData: { type: String, attribute: 'childdata' },
    colorTheme: { type: String, reflect: true, attribute: 'color-theme' },
  };

  get items() {
    return [...this.renderRoot.querySelectorAll('ul li > *')];
  }

  // Private properties.
  #observer;
  #initialized = false;
  #itemMap;

  // When we insert items from the lightDOM to the shadowDOM,
  // we clone the node, so this is to keep track of the source node,
  // which is useful if it is removed.
  #cloneToSource = new WeakMap();

  constructor() {
    super();
    this.childData = '';
    this.#observer = new MutationObserver(this.#onMutation.bind(this));
    this.#itemMap = new Map();
  }

  connectedCallback() {
    super.connectedCallback();
    this.#observeLightDom();
  }

  disconnectedCallback() {
    this.#observer.disconnect();
    super.disconnectedCallback();
  }

  firstUpdated() {
    // Wait for the browser to complete its render cycle.
    requestAnimationFrame(() => {
      // Add the items from the light DOM.
      SUPPORTED_TAG_LIST.forEach((tagName) => {
        const items = this.querySelectorAll(`${tagName.toLowerCase()}`);
        items.forEach((item) => this.addItem(item));
      });

      this.#initialized = true;
    });
  }

  updated(changedProps) {
    if (changedProps.has('childData')) {
      const parsed = parseChildData(this.childData);
      if (parsed) {
        this.#renderTagsFromData(parsed);
      }
    }
  }

  async focus() {
    // Wait for items to update.
    await this.updateComplete;

    const firstChild = this.#items[0];
    if (firstChild) firstChild.focus();
  }

  #renderTagsFromData(arr) {
    if (!Array.isArray(arr)) return;

    this.#clearAllTags();

    arr.forEach((data, index) => {
      const item = document.createElement(data.tagName);
      // e.g. 'cfpb-tag-filter' or 'cfpb-tag-topic'
      if (data.text) item.textContent = data.text;
      if (data.href) item.setAttribute('href', data.href);
      // any other props from `data`
      this.addItem(item, index);
    });
  }

  /**
   * Remove all previous items from shadow DOM and light DOM.
   */
  #clearAllTags() {
    // Remove shadow DOM wrappers.
    if (this.#itemMap) {
      this.#itemMap.forEach((wrapped) => {
        if (wrapped.parentElement) wrapped.remove();
      });
      this.#itemMap.clear();
    }

    // Remove light DOM items.
    [...this.children].forEach((child) => {
      if (SUPPORTED_TAG_LIST.has(child.tagName)) child.remove();
    });

    // Reset items
    this.#items = [];
  }

  /**
   * Set up a MutationObserver to watch changes in the light DOM.
   */
  #observeLightDom() {
    this.#observer.observe(this, {
      childList: true,
      subtree: false,
    });
  }

  /**
   * Whether a particular node tagName is supported as a item of this item group.
   * @param {string} tagName - The name of a supported custom element item.
   * @returns {boolean} true if the tagName is supported, false otherwise.
   */
  #supportedTag(tagName) {
    return SUPPORTED_TAG_LIST.has(tagName);
  }

  /**
   * Handle a change of the light DOM.
   * @param {MutationRecord} mutationList - The record of observed DOM changes.
   */
  #onMutation(mutationList) {
    if (!this.#initialized) return;
    for (const mutation of mutationList) {
      // Ignore mutations that occur within the shadow DOM.
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => this.#handleNodeAdded(node));
        mutation.removedNodes.forEach((node) => this.#handleNodeRemoved(node));
      }
    }
  }

  /**
   * @param {Node} node - The node that was added to the light DOM.
   */
  #handleNodeAdded(node) {
    if (this.#supportedTag(node.tagName)) {
      const index = Array.from(this.children).indexOf(node);
      this.addItem(node, index);
    }
  }

  /**
   * @param {Node} node - The node that was removed from the light DOM.
   */
  #handleNodeRemoved(node) {
    if (this.#supportedTag(node.tagName)) {
      this.#removeItemNode(node);
    }
  }

  /**
   * Refresh the items property from the DOM list.
   */
  #refreshTagList() {
    this.#items = this.items;

    // Iterate over the list, and if there are topic item links adjacent to each
    // other, then we set the siblingOfJumpLink property, which adjusts the
    // styles for adjacent jumplinks so that the borders aren't doubled up.
    if (this.#items.length > 0) {
      let lastItemIsLink = false;
      this.#items.forEach((item) => {
        if (lastItemIsLink) {
          item.siblingOfJumpLink = true;
          lastItemIsLink = false;
        }
        if (item.href !== '') {
          lastItemIsLink = true;
        }
      });
    }
  }

  /**
   * Add a item to the light and dark DOM.
   * @param {HTMLElement} item - The item to add.
   * @param {number} index - The position at which to add the item.
   * @returns {boolean} false if the item is already in the light DOM.
   */
  addItem(item, index = -1) {
    const alreadyInDom = Array.from(this.children).includes(item);

    if (!alreadyInDom) {
      this.#insertIntoLightDom(item, index);
      return false;
    }

    this.#insertIntoShadowDom(item, index);

    this.#refreshTagList();

    return true;
  }

  /**
   * Add a item to the light DOM.
   * @param {HTMLElement} item - The item to add.
   * @param {number} index - The position at which to add the item.
   */
  #insertIntoLightDom(item, index) {
    if (index === -1 || index >= this.children.length) {
      this.appendChild(item);
    } else {
      this.insertBefore(item, this.children[index]);
    }
  }

  /**
   * Add a item to the shadow DOM.
   * @param {HTMLElement} item - The item to add.
   * @param {number} index - The position at which to add the item.
   */
  #insertIntoShadowDom(item, index) {
    const cloned = item.cloneNode(true);
    this.#cloneToSource.set(cloned, item);

    const wrapped = document.createElement('li');
    wrapped.appendChild(cloned);

    const ul = this.shadowRoot.querySelector('ul');

    let actualIndex = index;
    if (index === -1 || index >= ul.children.length) {
      ul.appendChild(wrapped);
      actualIndex = ul.children.length - 1;
    } else {
      ul.insertBefore(wrapped, ul.children[index]);
    }

    // If we're inserting links, pass through any color-theme attribute.
    if (this.colorTheme && cloned.tagName === 'CFPB-LINK') {
      cloned.colorTheme = this.colorTheme;
    }

    cloned.addEventListener('item-click', () => {
      this.dispatchEvent(
        new CustomEvent('item-click', {
          detail: { target: cloned, index: actualIndex },
          bubbles: true,
          composed: true,
        }),
      );
      this.#removeItemNode(cloned);
    });

    this.#itemMap.set(item, wrapped);

    this.dispatchEvent(
      new CustomEvent('item-added', {
        detail: { target: item, index: actualIndex },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Remove an item from the light DOM.
   * This is private because it's called by the mutation observer.
   * @param {HTMLElement} node - The node to remove.
   * @returns {boolean} false if the wrapped item was not found.
   */
  #removeItemNode(node) {
    const source = this.#cloneToSource.get(node) || node;
    const wrapped = this.#itemMap.get(source);

    if (!wrapped) return false;

    // Try getting the index from the light DOM.
    let index = Array.from(this.children).indexOf(node);

    // If not found (e.g. manually removed via DevTools), fallback to shadow DOM.
    if (index === -1 && wrapped.parentElement) {
      const shadowChildren = Array.from(wrapped.parentElement.children);
      index = shadowChildren.indexOf(wrapped);
    }

    // Remove from light DOM and shadow DOM.
    if (node.parentElement === this) {
      node.remove();
    }

    if (wrapped.parentElement) {
      wrapped.remove();
    }

    this.#itemMap.delete(source);

    this.dispatchEvent(
      new CustomEvent('item-removed', {
        detail: { target: node, index: index },
        bubbles: true,
        composed: true,
      }),
    );

    this.#refreshTagList();
    this.focus();
    return true;
  }

  /**
   * Remove a filter item from the light and dark DOM.
   * @param {HTMLElement} item - The item to remove.
   */
  removeItem(item) {
    // Support passing in either light DOM <item> or shadow DOM <li> if needed
    // Normalize to the light DOM item element:

    const lightDomTag = this.#getLightDomTag(item);

    this.#removeItemNode(lightDomTag);
  }

  /**
   * Get light and dark DOM.
   * @param {HTMLElement} item - The item to remove.
   * @returns {HTMLElement|null} The item node.
   */
  #getLightDomTag(item) {
    // If node is a wrapped shadow DOM <li>, get the orignal item inside it.
    if (item.tagName === 'LI' && item.shadowRoot) {
      // unlikely scenario if you don't expose shadow nodes externally.
      return item.querySelector('cfpb-tag-filter');
    }

    // If node is already a light DOM item or child <cfpb-list>, return it.
    if (this.contains(item)) return item;

    return null;
  }

  render() {
    return html`<ul></ul>`;
  }

  static init() {
    defineComponent('cfpb-list', CfpbList);
  }
}
