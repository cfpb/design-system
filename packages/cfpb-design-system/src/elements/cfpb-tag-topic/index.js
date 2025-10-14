import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-tag-topic.component.scss';

/**
 *
 * @element cfpb-tag-topic.
 * @slot - The content for the topic tag.
 */
export class CfpbTagTopic extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {string} href - href attribute, if this is a topic link.
   * @property {boolean} siblingOfJumpLink
   *   Whether the preceding sibling is a jump link or not.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      href: { type: String, reflect: true },
      siblingOfJumpLink: { type: Boolean },
    };
  }

  /*
   * @property {string} href - The URL to link to (makes the tag a link).
   * @property {boolean} siblingOfJumpLink
   *   Whether the preceding sibling is a link or not. This is used to stack the
   *   divider lines between the links at mobile.
   */
  constructor() {
    super();
    this.href = '';
    this.siblingOfJumpLink = false;
  }

  get #tagClass() {
    let tagClass = 'a-tag-topic';

    if (this.siblingOfJumpLink) {
      tagClass += ' a-tag-topic--no-top-border';
    }

    return tagClass;
  }

  render() {
    const bullet = html`<span class="a-tag-topic__bullet" aria-hidden="true"
      >•</span
    >`;
    const slot =
      this.href === ''
        ? html`<span class="a-tag-topic"
            >${bullet}<span class="a-tag-topic__text"><slot></slot></span
          ></span>`
        : html`<a class="${this.#tagClass}" href="${this.href}"
            >${bullet}<span class="a-tag-topic__text"><slot></slot></span
          ></a>`;
    return html`${slot}`;
  }

  static init() {
    // Initialize parent file upload.
    window.customElements.get('cfpb-tag-topic') ||
      window.customElements.define('cfpb-tag-topic', CfpbTagTopic);
  }
}
