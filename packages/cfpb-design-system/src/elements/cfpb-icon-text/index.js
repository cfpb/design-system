import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
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

  /**
   * @property {boolean} disabled - Apply disabled styles or not.
   * @property {boolean} divColor - The color of the divider between the icon/text.
   * @property {string} iconLeft - The name of the icon on the left.
   * @property {string} iconRight - The name of the icon on the right.
   * @property {string} isIconLeftSpin - Whether the left icon spins or not.
   * @property {string} isIconRightSpin - Whether the right icon spins or not.
   * @property {boolean} hasDiv - If true, render a divider.
   * @property {boolean} hasUnderline - If true, render an underline below the text (like a link).
   * @property {boolean} mobileUnderline - If true render an underline at mobile.
   * @returns {object} The map of properties.
   */
  static properties = {
    disabled: { type: Boolean, reflect: true },
    divColor: { type: String, attribute: 'div-color', reflect: true },
    iconLeft: { type: String },
    iconRight: { type: String },
    isIconLeftSpin: { type: Boolean, attribute: 'iconleftspin' },
    isIconRightSpin: { type: Boolean, attribute: 'iconrightspin' },
    hasDiv: { type: Boolean, attribute: 'has-div', reflect: true },
    hasUnderline: { type: Boolean, attribute: 'has-underline', reflect: true },
    hasUnderlineDesktop: {
      type: Boolean,
      attribute: 'has-underline-desktop',
      reflect: true,
    },
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
    if (changed.has('divColor')) {
      if (this.divColor) {
        this.style.setProperty(
          '--icon-text-div-color',
          `var(--${this.divColor})`,
        );
      } else {
        this.style.removeProperty('--icon-text-div-color');
      }
    }
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
