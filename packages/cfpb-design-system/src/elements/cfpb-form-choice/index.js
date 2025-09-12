import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-form-choice.component.scss';

/**
 *
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
   */
  static get properties() {
    return {
      checked: { type: Boolean, reflect: true },
      disabled: { type: Boolean },
      large: { type: Boolean },
      validation: { type: String },
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.disabled = false;
    this.large = false;
    this.validation = '';
    this.type = 'checkbox';
  }

  get #baseClass() {
    let baseClass = `m-form-field m-form-field--${this.type}`;

    switch (this.validation) {
      case 'success':
        baseClass += ` m-form-field--${this.type}-success`;
        break;
      case 'warning':
        baseClass += ` m-form-field--${this.type}-warning`;
        break;
      case 'error':
        baseClass += ` m-form-field--${this.type}-error`;
        break;
    }

    if (this.large) {
      baseClass += ' m-form-field--lg-target';
    }

    return baseClass;
  }

  #onChange(evt) {
    evt.target.checked = this.checked;
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

  render() {
    return html`
      <div class="${this.#baseClass}" ?large=${this.large}>
        <input
          class="a-${this.type}"
          type="${this.type}"
          id="${this.type}"
          ?disabled=${this.disabled}
          .checked=${this.checked}
          @change=${this.#onChange}
          @input=${this.#onInput}
        />
        <label class="a-label" for="${this.type}">
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
