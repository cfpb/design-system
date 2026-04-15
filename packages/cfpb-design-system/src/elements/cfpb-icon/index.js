import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './styles.component.css?inline';
import { getSharedConfig } from '../cfpb-utilities/shared-config';

/**
 * @element cfpb-icon
 */
export class CfpbIcon extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} name - The name of the icon.
   * @property {boolean} color - The color of the icon.
   * @returns {object} The map of properties.
   */
  static properties = {
    name: { type: String },
    color: { type: String },
    spin: { type: Boolean, attribute: true },
  };

  render() {
    if (!this.name) return null;
    const iconPath = `${getSharedConfig().iconPath + this.name}.svg`;

    if (this.color) {
      this.style.setProperty('--icon-color-default', `var(--${this.color})`);
    } else {
      this.style.removeProperty('--icon-color-default');
    }

    return html`<span style="--icon-mask-image-url:url('${iconPath}')">
      <img src="${iconPath}" loading="lazy" decoding="async" />
    </span>`;
  }

  static init() {
    globalThis.customElements.get('cfpb-icon') ??
      globalThis.customElements.define('cfpb-icon', CfpbIcon);
  }
}
