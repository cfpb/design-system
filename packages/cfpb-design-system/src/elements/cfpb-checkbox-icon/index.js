import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-checkbox-icon.component.scss';

// The validation states are error, warning, or success.
const VALID_VALIDATION = ['error', 'warning', 'success'];

/**
 * @element cfpb-checkbox-icon
 */
export class CfpbCheckboxIcon extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} borderless - Whether the checkbox has a border or not.
   * @property {boolean} checked - Whether the checkbox is checked or not.
   * @property {boolean} disabled - Whether the checkbox is disabled or not.
   * @property {string} validation - Validation style: error, warning, success.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      borderless: { type: Boolean, reflect: true },
      checked: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      validation: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.borderless = false;
    this.checked = false;
    this.disabled = false;
    this.validation = '';
  }

  /**
   * Ensure the validation value is valid, and fall back to a default if not.
   * @returns {string|undefined} A valid validation value string, or undefined.
   */
  get #validValidation() {
    return VALID_VALIDATION.includes(this.validation)
      ? this.validation
      : undefined;
  }

  render() {
    return html`
      <div
        borderless=${this.borderless}
        validation=${this.#validValidation}
        ?disabled=${this.disabled}
        .checked=${this.checked}
      ></div>
    `;
  }

  static init() {
    window.customElements.get('cfpb-checkbox-icon') ||
      window.customElements.define('cfpb-checkbox-icon', CfpbCheckboxIcon);
  }
}
