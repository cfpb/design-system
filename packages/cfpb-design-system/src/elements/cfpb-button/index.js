import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-button.component.scss';

/**
 *
 * @element cfpb-button
 * @slot - The main content for the button.
 */
export class CfpbButton extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} disabled - Whether to stack the tags vertically.
   * @property {string} type - The button type: secondary, warning, disabled.
   */
  static get properties() {
    return {
      disabled: { type: Boolean },
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.disabled = false;
    this.type = '';
  }

  get #btnClass() {
    let btnClass = 'a-btn';
    switch (this.type) {
      case 'secondary':
        btnClass += ' a-btn--secondary';
        break;
      case 'warning':
        btnClass += ' a-btn--warning';
        break;
      case 'disabled':
        btnClass += ' a-btn--disabled';
        break;
    }

    return btnClass;
  }

  render() {
    return html`
      <button class="${this.#btnClass}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }

  static init() {
    window.customElements.get('cfpb-button') ||
      window.customElements.define('cfpb-button', CfpbButton);
  }
}
