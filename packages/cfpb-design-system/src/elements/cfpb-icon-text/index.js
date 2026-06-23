import { LitElement, html, css, unsafeCSS } from 'lit';
import {
  applyThemeProperties,
  defineComponent,
} from '../utilities/shared-config';
import styles from './styles.component.scss?inline';
import { CfpbIcon } from '../cfpb-icon';

/**
 * This component represents a piece of text accompanied by an icon,
 * which may or may not have a divider.
 * @element cfpb-icon-text
 * @slot - The main content for the text and icon.
 */
export class CfpbIconText extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static themeProperties = ['divColor'];

  /**
   * @property {boolean} divColor - The color of the divider between the icon/text.
   * @property {boolean} disabled - Apply disabled styles or not.
   * @property {string} iconLeft - The name of the icon on the left.
   * @property {string} iconRight - The name of the icon on the right.
   * @property {string} isIconLeftSpin - Whether the left icon spins or not.
   * @property {string} isIconRightSpin - Whether the right icon spins or not.
   * @property {boolean} hasDiv - If true, render a divider.
   * @property {boolean} underline -
   *   "all" for all screen sizes, "tablet-up", for tablet and above, "none", for only on hover on tablet and above.
   * @property {boolean} mobileUnderline - If true render an underline at mobile.
   * @returns {object} The map of properties.
   */
  static properties = {
    divColor: { type: String, attribute: 'div-color', reflect: true },
    disabled: { type: Boolean, reflect: true },
    iconLeft: { type: String, attribute: 'icon-left' },
    iconRight: { type: String, attribute: 'icon-right' },
    isIconLeftSpin: { type: Boolean, attribute: 'icon-left-spin' },
    isIconRightSpin: { type: Boolean, attribute: 'icon-right-spin' },
    hasDiv: { type: Boolean, attribute: 'has-div', reflect: true },
    underline: { type: String, attribute: 'underline', reflect: true },
    mobileIconAlignEnd: {
      type: Boolean,
      attribute: 'mobile-icon-align-end',
      reflect: true,
    },
    inline: {
      type: Boolean,
      reflect: true,
    },
  };

  constructor() {
    super();
    this.disabled = false;
    this.isIconLeftSpin = false;
    this.isIconRightSpin = false;
  }

  updated(changed) {
    applyThemeProperties(this, changed);
  }

  render() {
    return html`<span class="wrap">
      ${this.iconLeft
        ? html`<cfpb-icon
              name="${this.iconLeft}"
              ?spin=${this.isIconLeftSpin}
            ></cfpb-icon
            ><span class="div"></span>`
        : ''}
      <span class="text"><slot></slot></span>${this.iconRight
        ? html` <span class="div"></span
            ><cfpb-icon
              name="${this.iconRight}"
              ?spin=${this.isIconRightSpin}
            ></cfpb-icon>`
        : ''}
    </span>`;
  }

  static init() {
    CfpbIcon.init();
    defineComponent('cfpb-icon-text', CfpbIconText);
  }
}
