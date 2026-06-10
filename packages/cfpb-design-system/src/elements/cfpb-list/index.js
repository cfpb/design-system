import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import styles from './styles.component.scss?inline';
import { parseChildData } from '../utilities/parse-child-data';

const SUPPORTED_TAG_LIST = [
  'CFPB-TAG-FILTER',
  'CFPB-TAG-TOPIC',
  'CFPB-LIST-ITEM',
  'CFPB-LINK',
];

/**
 * @element cfpb-list.
 * @description A list of items (filter or topic tags, or list-items),
 *   which can be added and removed.
 *
 *   The list of items in the lightDOM gets re-written
 *   inside an unordered list in the shadowDOM so that it is read out
 *   as a list of items in VoiceOver.
 * @slot - Slot for the list of items in the list.
 * @fires CfpbList#event:"item-added" - A tag was added to the group.
 * @fires CfpbList#event:"item-click" - A tag was clicked.
 * @fires CfpbList#event:"item-removed" - A tag was removed to the group.
 */
export class CfpbList extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  #items = [];

  /**
   * @property {string} childData - Structure data to create child components.
   * @property {Array} items - List of the tags in the tag group.
   * @returns {object} The map of properties.
   */
  static properties = {
    childData: { type: String, attribute: 'childdata' },
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
      // Add the tags from the light DOM.
      SUPPORTED_TAG_LIST.forEach((tagName) => {
        const tags = this.querySelectorAll(`${tagName.toLowerCase()}`);
        tags.forEach((tag) => this.addTag(tag));
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
      const tag = document.createElement(data.tagName);
      // e.g. 'cfpb-tag-filter' or 'cfpb-tag-topic'
      if (data.text) tag.textContent = data.text;
      if (data.href) tag.setAttribute('href', data.href);
      // any other props from `data`
      this.addTag(tag, index);
    });
  }

  /**
   * Remove all previous tags from shadow DOM and light DOM.
   */
  #clearAllTags() {
    // Remove shadow DOM wrappers.
    if (this.#itemMap) {
      this.#itemMap.forEach((wrapped) => {
        if (wrapped.parentElement) wrapped.remove();
      });
      this.#itemMap.clear();
    }

    // Remove light DOM tags.
    [...this.children].forEach((child) => {
      if (SUPPORTED_TAG_LIST.includes(child.tagName)) child.remove();
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
   * Whether a particular node tagName is supported as a tag of this tag group.
   * @param {string} tagName - The name of a supported custom element tag.
   * @returns {boolean} true if the tagName is supported, false otherwise.
   */
  #supportedTag(tagName) {
    return SUPPORTED_TAG_LIST.includes(tagName);
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
      this.addTag(node, index);
    }
  }

  /**
   * @param {Node} node - The node that was removed from the light DOM.
   */
  #handleNodeRemoved(node) {
    if (this.#supportedTag(node.tagName)) {
      this.#removeTagNode(node);
    }
  }

  /**
   * Refresh the items property from the DOM list.
   */
  #refreshTagList() {
    this.#items = this.items;

    // Iterate over the list, and if there are topic tag links adjacent to each
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
   * Add a tag to the light and dark DOM.
   * @param {HTMLElement} tag - The tag to add.
   * @param {number} index - The position at which to add the tag.
   * @returns {boolean} false if the tag is already in the light DOM.
   */
  addTag(tag, index = -1) {
    const alreadyInDom = Array.from(this.children).includes(tag);

    if (!alreadyInDom) {
      this.#insertIntoLightDom(tag, index);
      return false;
    }

    this.#insertIntoShadowDom(tag, index);

    this.#refreshTagList();

    return true;
  }

  /**
   * Add a tag to the light DOM.
   * @param {HTMLElement} tag - The tag to add.
   * @param {number} index - The position at which to add the tag.
   */
  #insertIntoLightDom(tag, index) {
    if (index === -1 || index >= this.children.length) {
      this.appendChild(tag);
    } else {
      this.insertBefore(tag, this.children[index]);
    }
  }

  /**
   * Add a tag to the shadow DOM.
   * @param {HTMLElement} tag - The tag to add.
   * @param {number} index - The position at which to add the tag.
   */
  #insertIntoShadowDom(tag, index) {
    const cloned = tag.cloneNode(true);
    this.#cloneToSource.set(cloned, tag);

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

    cloned.addEventListener('item-click', () => {
      this.dispatchEvent(
        new CustomEvent('item-click', {
          detail: { target: cloned, index: actualIndex },
          bubbles: true,
          composed: true,
        }),
      );
      this.#removeTagNode(cloned);
    });

    this.#itemMap.set(tag, wrapped);

    this.dispatchEvent(
      new CustomEvent('item-added', {
        detail: { target: tag, index: actualIndex },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Remove an item from the light DOM.
   * This is private because it's called by the mutation observer.
   * @param {HTMLElement} node - The node to remove.
   * @returns {boolean} false if the wrapped tag was not found.
   */
  #removeTagNode(node) {
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
   * Remove a filter tag from the light and dark DOM.
   * @param {HTMLElement} tag - The tag to remove.
   */
  removeTag(tag) {
    // Support passing in either light DOM <tag> or shadow DOM <li> if needed
    // Normalize to the light DOM tag element:

    const lightDomTag = this.#getLightDomTag(tag);

    this.#removeTagNode(lightDomTag);
  }

  /**
   * Get light and dark DOM.
   * @param {HTMLElement} tag - The tag to remove.
   * @returns {HTMLElement|null} The tag node.
   */
  #getLightDomTag(tag) {
    // If node is a wrapped shadow DOM <li>, get the orignal tag inside it.
    if (tag.tagName === 'LI' && tag.shadowRoot) {
      // unlikely scenario if you don't expose shadow nodes externally.
      return tag.querySelector('cfpb-tag-filter');
    }

    // If node is already a light DOM tag or child <cfpb-list>, return it.
    if (this.contains(tag)) return tag;

    return null;
  }

  render() {
    return html`<ul></ul>`;
  }

  static init() {
    defineComponent('cfpb-list', CfpbList);
  }
}
