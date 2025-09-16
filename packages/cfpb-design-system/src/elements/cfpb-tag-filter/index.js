import { html, LitElement, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import styles from './cfpb-tag-filter.component.scss';
import icon from '../../components/cfpb-icons/icons/error.svg';

/**
 *
 * @element cfpb-tag-filter.
 * @slot - The content for the filter tag.
 */
export class CfpbTagFilter extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {string} for - Associate the label with an ID elsewhere.
   */
  static get properties() {
    return {
      for: { type: String },
    };
  }

  constructor() {
    super();
    this.for = '';
  }

  #onClick() {
    this.dispatchEvent(
      new CustomEvent('tag-click', {
        detail: { target: this },
        bubbles: false,
        composed: false,
      }),
    );
  }

  render() {
    const slot =
      this.for === ''
        ? html`<slot></slot>`
        : html`<label for="${this.for}"><slot></slot></label>`;
    return html`<button @click=${this.#onClick}>
      ${slot} ${unsafeHTML(icon)}
    </button>`;
  }

  static init() {
    // Initialize parent file upload.
    window.customElements.get('cfpb-tag-filter') ||
      window.customElements.define('cfpb-tag-filter', CfpbTagFilter);
  }
}
