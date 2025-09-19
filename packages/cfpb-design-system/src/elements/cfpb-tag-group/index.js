import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-tag-group.component.scss';

const SUPPORTED_TAG_LIST = ['CFPB-TAG-FILTER', 'CFPB-TAG-TOPIC'];

/**
 * @element cfpb-tag-group.
 * @description A group of tags (filter or topic tags) that can be added and
 *   removed.
 *
 *   The tag group has a list of tags in the lightDOM that gets re-written
 *   inside an unordered list in the shadowDOM so that it is read out
 *   as a list of items in VoiceOver.
 * @attribute {string} lang - The element's language.
 * @fires addtag - A tag was added to the group.
 * @fires removetag - A tag was removed from the group.
 */
export class CfpbTagGroup extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} stacked - Whether to stack the tags vertically.
   * @property {Array} tagList - List of the tags in the tag group.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      stacked: { type: Boolean, reflect: true },
      tagList: { type: Array },
    };
  }

  // Private properties.
  #observer;
  #initialized = false;
  #tagMap;

  constructor() {
    super();
    this.stacked = false;
    this.tagList = [];
    this.#observer = new MutationObserver(this.#onMutation.bind(this));
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
   * Refresh the tagList property from the DOM list.
   */
  #refreshTagList() {
    this.tagList = [...this.renderRoot.querySelectorAll('ul li > *')];

    // Iterate over the list, and if there are topic tag links adjacent to each
    // other, then we set the siblingOfJumpLink property, which adjusts the
    // styles for adjacent jumplinks so that the borders aren't doubled up.
    if (this.tagList.length > 0) {
      let lastItemIsLink = false;
      this.tagList.forEach((item) => {
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
   * @param {*} tag - The tag to add.
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
  }

  /**
   * Add a tag to the light DOM.
   * @param {*} tag - The tag to add.
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
   * @param {*} tag - The tag to add.
   * @param {number} index - The position at which to add the tag.
   */
  #insertIntoShadowDom(tag, index) {
    const cloned = tag.cloneNode(true);
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

    cloned.addEventListener('tag-click', () => {
      this.dispatchEvent(
        new CustomEvent('tag-click', {
          detail: { target: cloned, index: actualIndex },
          bubbles: true,
          composed: true,
        }),
      );
      this.#removeTagNode(cloned);
    });

    this.#tagMap ??= new Map();
    const id = this.#tagIdentifier(tag);
    this.#tagMap.set(id, wrapped);

    this.dispatchEvent(
      new CustomEvent('tag-added', {
        detail: { target: tag, index: actualIndex },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * @param {*} tag - The tag to add.
   * @returns {string} A unique ID.
   */
  #tagIdentifier(tag) {
    return `${tag.tagName}::${tag.textContent.trim()}`;
  }

  /**
   * Remove a filter tag from the light DOM.
   * This is private because it's called by the mutation observer.
   * @param {*} tag - The tag to remove.
   * @returns {boolean} false if the wrapped tag was not found.
   */
  #removeTagNode(tag) {
    const id = this.#tagIdentifier(tag);
    const wrapped = this.#tagMap.get(id);

    if (!wrapped) return false;

    // Try getting the index from the light DOM.
    let index = Array.from(this.children).indexOf(tag);

    // If not found (e.g. manually removed via DevTools), fallback to shadow DOM.
    if (index === -1 && wrapped.parentElement) {
      const shadowChildren = Array.from(wrapped.parentElement.children);
      index = shadowChildren.indexOf(wrapped);
    }

    // Remove from light DOM and shadow DOM.
    if (tag.parentElement === this) {
      tag.remove();
    }

    if (wrapped.parentElement) {
      wrapped.remove();
    }

    this.#tagMap.delete(id);

    this.dispatchEvent(
      new CustomEvent('tag-removed', {
        detail: { target: tag, index: index },
        bubbles: true,
        composed: true,
      }),
    );

    this.#refreshTagList();
  }

  /**
   * Remove a filter tag from the light and dark DOM.
   * @param {*} tag - The tag to remove.
   */
  removeTag(tag) {
    // Support passing in either light DOM <tag> or shadow DOM <li> if needed
    // Normalize to the light DOM tag element:

    const lightDomTag = this.#getLightDomTag(tag);

    this.#removeTagNode(lightDomTag);
  }

  /**
   * Get light and dark DOM.
   * @param {Node} node - The tag to remove.
   * @returns {Node|null} The tag node.
   */
  #getLightDomTag(node) {
    // If node is a wrapped shadow DOM <li>, get the orignal tag inside it.
    if (node.tagName === 'LI' && node.shadowRoot) {
      // unlikely scenario if you don't expose shadow nodes externally.
      return node.querySelector('cfpb-tag-filter');
    }

    // If node is already a light DOM tag or child <cfpb-tag-group>, return it.
    if (this.contains(node)) return node;

    return null;
  }

  render() {
    return html`<ul ?stacked=${this.stacked}></ul>`;
  }

  static init() {
    window.customElements.get('cfpb-tag-group') ||
      window.customElements.define('cfpb-tag-group', CfpbTagGroup);
  }
}
