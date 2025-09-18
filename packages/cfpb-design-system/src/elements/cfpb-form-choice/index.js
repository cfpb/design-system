import { html, LitElement, css, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import styles from './cfpb-form-choice.component.scss';

// The validation states are error, warning, or success.
const VALID_VALIDATION = ['error', 'warning', 'success'];

// The types are a checkbox or radio button.
const VALID_TYPES = ['checkbox', 'radio'];

/**
 * @element cfpb-form-choice
 * @slot - The label for the form input.
 */
export class CfpbFormChoice extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} checked - Whether the choice is checked or not.
   * @property {boolean} disabled - Whether the choice is disabled or not.
   * @property {boolean} large - Whether the choice has a large target area.
   * @property {string} validation - Validation style: error, warning, success.
   * @property {string} type - Choice type: checkbox or radio.
   * @property {string} inlist - Whether the choice appears in a <li> list.
   * @property {string} name - The name within a form.
   * @property {string} value - The value to submit within a form.
   */
  static get properties() {
    return {
      checked: { type: Boolean, reflect: true },
      disabled: { type: Boolean },
      large: { type: Boolean },
      validation: { type: String },
      type: { type: String },
      inlist: { type: Boolean, attribute: true },
      name: { type: String },
      value: { type: String },
    };
  }

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.large = false;
    this.validation = '';
    this.type = 'checkbox';
    this.inlist = false;
    this.name = '';
    this.value = '';
  }

  #onChange(evt) {
    this.dispatchEvent(
      new Event('change', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  #onInput() {
    this.dispatchEvent(
      new Event('input', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  focus() {
    this.shadowRoot.querySelector('input').focus();
  }

  /**
   * Ensure the variant value is valid, and fall back to a default if not.
   */
  get #validValidation() {
    return VALID_VALIDATION.includes(this.validation)
      ? this.validation
      : undefined;
  }

  /**
   * Ensure the type value is valid, and fall back to a default if not.
   */
  get #validType() {
    return VALID_TYPES.includes(this.type) ? this.type : 'checkbox';
  }

  get #baseClass() {
    const classes = {
      'm-form-field': true,
      [`m-form-field--${this.type}`]: true,
      'm-form-field--lg-target': this.large,
      'm-form-field--in-list': this.inlist,
    };

    if (this.#validValidation)
      classes[[`m-form-field--${this.type}-${this.validation}`]] =
        this.validation;
    return classes;
  }

  render() {
    const classes = classMap(this.#baseClass);

    return html`
      <div class="${classes}" ?large=${this.large}>
        <input
          class="a-${this.type}"
          type="${this.#validType}"
          id="choice-input"
          ?disabled=${this.disabled}
          .checked=${this.checked}
          @change=${this.#onChange}
          @input=${this.#onInput}
          aria-invalid=${this.#validValidation === 'error' ? 'true' : 'false'}
        />
        <label class="a-label" for="choice-input">
          <slot></slot>
        </label>
      </div>
    `;
  }

  static init() {
    window.customElements.get('cfpb-form-choice') ||
      window.customElements.define('cfpb-form-choice', CfpbFormChoice);
  }
}
