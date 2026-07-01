import { LitElement, html, css, unsafeCSS } from 'lit';
import {
  applyThemeProperties,
  defineComponent,
} from '../utilities/shared-config';
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

  static themeProperties = ['iconColor', 'border', 'bg'];

  /**
   * @property {string} bg - The background color.
   * @property {string} border - The border color.
   * @property {string} iconColor - The icon color.
   * @property {string} status - The alert status: error, success, warning, info, loading.
   * @property {string} message - The message heading on an alert.
   * @returns {object} The map of properties.
   */
  static properties = {
    bg: { type: String },
    border: { type: String },
    iconColor: { type: String, attribute: 'icon-color' },
    status: { type: String },
    message: { type: String },
  };

  constructor() {
    super();
    this.status = 'info';
    this.message = 'Alert';
  }

  updated(changed) {
    applyThemeProperties(this, changed);
  }

  get icon() {
    const map = {
      info: 'warning-round',
      warning: 'warning-round',
      success: 'approved-round',
      error: 'error-round',
      loading: 'update',
    };

    return map[this.status] || map.info;
  }

  render() {
    return html`
      <div class="container" role="alert">
        <cfpb-icon
          name=${this.icon}
          ?spin=${this.status === 'loading'}
        ></cfpb-icon>
        <div class="content">
          <div class="message">${this.message}</div>

          <div class="explanation">
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
