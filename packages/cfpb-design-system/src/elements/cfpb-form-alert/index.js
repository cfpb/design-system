import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import styles from './styles.component.scss?inline';
import { CfpbIcon } from '../cfpb-icon';

/**
 * @element cfpb-form-alert
 * @slot - The text for the form alert.
 */
export class CfpbFormAlert extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {string} validation - Validation style: error, warning, success.
   * @returns {object} The map of properties.
   */
  static properties = {
    validation: { type: String },
  };

  constructor() {
    super();
    this.validation = 'error';
  }

  get icon() {
    let icon = {
      name: 'error',
      colorVar: 'form-alert-icon-color-error',
    };

    if (this.validation === 'warning') {
      icon = {
        name: 'warning',
        colorVar: 'form-alert-icon-color-warning',
      };
    } else if (this.validation === 'success') {
      icon = {
        name: 'approved',
        colorVar: 'form-alert-icon-color-success',
      };
    }

    return icon;
  }

  render() {
    return html`<div
      class="a-form-alert a-form-alert--${this.validation}"
      role="alert"
    >
      <cfpb-icon
        name="${this.icon.name}-round"
        color="${this.icon.colorVar}"
      ></cfpb-icon>
      <div class="a-form-alert__text"><slot></slot></div>
    </div>`;
  }

  static init() {
    CfpbIcon.init();
    defineComponent('cfpb-form-alert', CfpbFormAlert);
  }
}
