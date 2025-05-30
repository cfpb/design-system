import { html, LitElement, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './cfpb-button.component.scss';

/**
 *
 * @tag cfpb-button
 *
 * @slot - The main content for the button.
 *
 */
export class CfpbButton extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  @property()
  accessor disabled = false;

  @property()
  accessor type;

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
      <button class="${this._btnClass}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}

window.customElements.define('cfpb-button', CfpbButton);
