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
 *
 * @attribute {string} lang - The element's language.
 *
 * @slot default - A list of tags.
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
  #ulDom;

  constructor() {
    super();
    this.stacked = false;
    this.tagList = [];
    this.#observer = new MutationObserver(this.#handleMutation.bind(this));
  }

  connectedCallback() {
    super.connectedCallback();
    this.#observer.observe(this, { childList: true, subtree: false });
  }

  disconnectedCallback() {
    this.#observer.disconnect();
    super.disconnectedCallback();
  }

  firstUpdated() {
    this.#ulDom = this.renderRoot.querySelector('ul');

    // Wait for the browser to complete its render cycle.
    requestAnimationFrame(() => {
      // Add the tags from the lightDOM.
      SUPPORTED_TAG_LIST.forEach((tagName) => {
        const tags = this.querySelectorAll(`${tagName.toLowerCase()}`);
        tags.forEach((tag) => this.addTag(tag));
      });

      this.#initialized = true;
    });
  }

  /**
   * Whether a particular node tagName is supported as a tag of this tag group.
   * @param {String} tagName - The name of a supported custom element tag.
   * @returns {Boolean} true if the tagName is supported, false otherwise.
   */
  #supportedTag(tagName) {
    return SUPPORTED_TAG_LIST.includes(tagName);
  }

  /**
   * Handle the change of the DOM.
   * @param {MutationRecord} mutationList
   */
  #handleMutation(mutationList) {
    for (const mutation of mutationList) {
      // Ignore mutations that occur within the shadow DOM.
      if (mutation.type === 'childList') {
        // Only trigger re-update when new tag elements are added.
        const addedNodes = mutation.addedNodes;
        const removedNodes = mutation.removedNodes;

        if (this.#initialized) {
          if (addedNodes.length) {
            addedNodes.forEach((node) => {
              if (this.#supportedTag(node.tagName)) {
                this.addTag(node);
              }
            });
          }

          if (removedNodes.length) {
            removedNodes.forEach((node) => {
              if (this.#supportedTag(node.tagName)) {
                this.#removeTag(node);
              }
            });
          }
        }
      }
    }
  }

  /**
   * Refresh the tagList property from the DOM list.
   */
  #refreshTagList() {
    const ul = this.renderRoot.querySelector('ul');
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
   */
  addTag(tag) {
    // Temporarily stop observing while we move the node.
    this.#observer.disconnect();

    // Add the tag to the light DOM, if it isn't alread appended.
    if (this.contains(tag) === false) {
      this.appendChild(tag);
    }

    // Deep clone from the light DOM.
    const clone = tag.cloneNode(true);
    const li = document.createElement('li');
    const pos = Array.prototype.indexOf.call(this.children, tag);
    li.appendChild(clone);
    this.#ulDom.insertBefore(li, this.#ulDom.children[pos]);

    clone.addEventListener('click', (evt) => {
      tag.remove();
    });

    this.#refreshTagList();

    this.dispatchEvent(
      new CustomEvent('tagadded', {
        detail: { tag: clone },
        bubbles: true,
        composed: true,
      }),
    );

    // Reconnect after internal DOM move.
    this.#observer.observe(this, {
      childList: true,
      subtree: false,
    });
  }

  /**
   * Remove a filter tag from the light DOM.
   * @param {*} tag - The tag to Remove.
   */
  removeTag(tag) {
    tag.remove();
  }

  /**
   * Remove a filter tag from the light and dark DOM.
   * This is private because it's called by the mutation observer.
   * @param {*} tag - The tag to Remove.
   */
  #removeTag(tag) {
    // Remove from the light DOM.
    if (this.contains(tag)) {
      tag.remove();
    }

    // Remove from the shadow DOM.
    const matchingLi = [...this.#ulDom.children].find((li) => {
      const child = li.firstElementChild;
      return (
        child &&
        this.#supportedTag(child.tagName) &&
        child.textContent === tag.textContent
      );
    });

    if (matchingLi) {
      matchingLi.remove();
    }

    this.#refreshTagList();

    this.dispatchEvent(
      new CustomEvent('tagremoved', {
        detail: { tag: matchingLi.firstElementChild },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`<ul ?stacked=${this.stacked}></ul>`;
  }

  static init() {
    window.customElements.get('cfpb-tag-group') ||
      window.customElements.define('cfpb-tag-group', CfpbTagGroup);
  }
}
