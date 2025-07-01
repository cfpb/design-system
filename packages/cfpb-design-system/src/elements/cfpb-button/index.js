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

  static get properties() {
    return {
      isDisabled: { type: Boolean },
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.isDisabled = false;
    this.type = '';
  }

  get _btnClass() {
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
      <button class="${this._btnClass}" ?disabled=${this.isDisabled}>
        <slot></slot>
      </button>
    `;
  }

  static init() {
    window.customElements.get('cfpb-button') ||
      window.customElements.define('cfpb-button', CfpbButton);
  }
}
