import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-label.component.scss';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 *
 * @element cfpb-multiselect.
 * @slot - The main content for the upload button.
 */
export class CfpbLabel extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {string} for - Associate the label with an ID elsewhere.
   * @property {string} type - Associate the label with an ID elsewhere.
   */
  static get properties() {
    return {
      // Other properties.
      block: { type: Boolean, reflect: true },
      for: { type: String },
    };
  }

  constructor() {
    super();
    this.block = false;
    this.for = '';
  }

  get #helperClass() {
    let helperClass = 'a-label__helper';
    if (this.block) {
      helperClass += ' a-label__helper--block';
    }

    return helperClass;
  }

  render() {
    return html`
      <label
        class="a-label a-label--heading"
        for=${ifDefined(this.for && this.for.trim() ? this.for : undefined)}
      >
        <slot name="label"></slot>
        <small class="${this.#helperClass}">
          <slot name="helper"></slot>
        </small>
      </label>
    `;
  }

  static init() {
    window.customElements.get('cfpb-label') ||
      window.customElements.define('cfpb-label', CfpbLabel);
  }
}
