import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './checkbox-icon.component.scss';

// The validation states are error, warning, or success.
const VALID_VALIDATION = ['error', 'warning', 'success'];

/**
 * @element checkbox-icon
 */
export class CheckboxIcon extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} checked - Whether the choice is checked or not.
   * @property {boolean} disabled - Whether the choice is disabled or not.
   * @property {string} validation - Validation style: error, warning, success.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      checked: { type: Boolean, reflect: true },
      disabled: { type: Boolean },
      validation: { type: String },
    };
  }

  constructor() {
    super();
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
        validation=${this.#validValidation}
        ?disabled=${this.disabled}
        .checked=${this.checked}
      ></div>
    `;
  }

  static init() {
    window.customElements.get('checkbox-icon') ||
      window.customElements.define('checkbox-icon', CheckboxIcon);
  }
}
