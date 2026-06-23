import { html, LitElement, css, unsafeCSS } from 'lit';
import {
  applyThemeProperties,
  defineComponent,
  getSharedConfig,
} from '../utilities/shared-config';
import styles from './styles.component.css?inline';

/**
 * @element cfpb-icon
 */
export class CfpbIcon extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static themeProperties = ['color'];

  /**
   * @property {boolean} color - The color of the icon.
   * @property {boolean} name - The name of the icon.
   * @returns {object} The map of properties.
   */
  static properties = {
    color: { type: String },
    name: { type: String },
    spin: { type: Boolean, attribute: true },
  };

  updated(changed) {
    applyThemeProperties(this, changed);
  }

  render() {
    if (!this.name) return null;
    const iconPath = `${getSharedConfig().iconPath + this.name}.svg`;

    return html`<span style="--icon-mask-image-url:url('${iconPath}')">
      <img
        src="${iconPath}"
        loading="lazy"
        decoding="async"
        alt=""
        aria-hidden="true"
      />
    </span>`;
  }

  static init() {
    defineComponent('cfpb-icon', CfpbIcon);
  }
}
