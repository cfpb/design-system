import { html, LitElement, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import styles from './cfpb-tag-filter.component.scss';
import icon from '../../components/cfpb-icons/icons/error.svg';

/**
 *
 * @element cfpb-tag-filter.
 * @slot - The main content for the upload button.
 */
export class CfpbTagFilter extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

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
      new CustomEvent('click-tag', {
        detail: { target: this },
        bubbles: true,
        composed: true,
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
