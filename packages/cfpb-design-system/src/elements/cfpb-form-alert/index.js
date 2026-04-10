import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import styles from './styles.component.scss?inline';
import {
  errorRoundIcon as errorIcon,
  warningRoundIcon as warningIcon,
  approvedRoundIcon as successIcon,
} from '../../components/cfpb-icons/icons-lib.js';

/**
 * @element cfpb-form-search
 * @slot - The label for the form input.
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
    let icon = errorIcon;
    if (this.validation === 'warning') {
      icon = warningIcon;
    } else if (this.validation === 'success') {
      icon = successIcon;
    }

    return icon;
  }

  render() {
    return html`<div
      class="a-form-alert a-form-alert--${this.validation}"
      role="alert"
    >
      ${unsafeSVG(this.icon)}
      <div class="a-form-alert__text"><slot></slot></div>
    </div>`;
  }

  static init() {
    window.customElements.get('cfpb-form-alert') ||
      window.customElements.define('cfpb-form-alert', CfpbFormAlert);
  }
}
