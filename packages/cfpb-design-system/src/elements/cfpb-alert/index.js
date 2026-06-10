import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import styles from './styles.component.scss?inline';
import { CfpbIcon } from '../cfpb-icon';
import { CfpbList } from '../cfpb-list';

/**
 * @element cfpb-alert
 * @slot - The main content for the tagline.
 */
export class CfpbAlert extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {string} status - The alert status: error, success, warning, info, loading.
   * @property {string} message - The message heading on an alert.
   * @returns {object} The map of properties.
   */
  static properties = {
    status: { type: String },
    message: { type: String },
  };

  constructor() {
    super();
    this.status = 'info';
    this.message = 'Alert';
  }

  get icon() {
    // Default icon.
    let icon = {
      name: 'warning-round',
      colorVar: 'alert-icon-color',
    };

    if (this.status === 'warning') {
      icon = {
        name: 'warning-round',
        colorVar: 'alert-icon-color-warning',
      };
    } else if (this.status === 'success') {
      icon = {
        name: 'approved-round',
        colorVar: 'alert-icon-color-success',
      };
    } else if (this.status === 'error') {
      icon = {
        name: 'error-round',
        colorVar: 'alert-icon-color-error',
      };
    } else if (this.status === 'loading') {
      icon = {
        name: 'update',
        colorVar: 'alert-icon-color-loading',
      };
    }

    return icon;
  }

  render() {
    return html`
      <div class="m-notification m-notification--${this.status}" role="alert">
        <cfpb-icon
          name=${this.icon.name}
          color="${this.icon.colorVar}"
          ?spin=${this.status === 'loading'}
        ></cfpb-icon>
        <div class="m-notification__content">
          <div class="m-notification__message">${this.message}</div>

          <div class="m-notification__explanation">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  static init() {
    CfpbIcon.init();
    CfpbList.init();

    defineComponent('cfpb-alert', CfpbAlert);
  }
}
