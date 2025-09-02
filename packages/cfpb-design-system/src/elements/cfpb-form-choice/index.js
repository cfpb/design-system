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

  static get properties() {
    return {
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

  render() {
    return html`
      <div class="${this.#baseClass}" ?large=${this.large}>
        <input
          class="a-${this.type}"
          type="${this.type}"
          id="${this.type}"
          ?disabled=${this.disabled}
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
