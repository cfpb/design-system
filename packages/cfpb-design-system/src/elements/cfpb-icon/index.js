import { html, LitElement, css, unsafeCSS } from 'lit';
import { defineComponent, getSharedConfig } from '../utilities/shared-config';
import styles from './styles.component.css?inline';

/**
 * @element cfpb-icon
 * @property {string} name - The name of the icon, based off the SVG filename.
 * @property {boolean} spin - Whether the icon spins, for loading and in progress states.
 */
export class CfpbIcon extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static properties = {
    name: { type: String },
    spin: { type: Boolean, attribute: true },
  };

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
