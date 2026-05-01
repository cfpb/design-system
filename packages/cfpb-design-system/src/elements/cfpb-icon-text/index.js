import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../cfpb-utilities/shared-config';
import styles from './styles.component.scss?inline';
import { CfpbIcon } from '../cfpb-icon';

/**
 * @element cfpb-icon-text
 * @slot - The main content for the text and icon.
 */
export class CfpbIconText extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} disabled - Apply disabled styles or not.
   * @property {string} iconLeft - The name of the icon on the left.
   * @property {string} iconRight - The name of the icon on the right.
   * @property {string} isIconLeftSpin - Whether the left icon spins or not.
   * @property {string} isIconRightSpin - Whether the right icon spins or not.
   * @property {boolean} noDivider - If true, don't render a divider.
   * @returns {object} The map of properties.
   */
  static properties = {
    disabled: { type: Boolean, reflect: true },
    iconLeft: { type: String },
    iconRight: { type: String },
    isIconLeftSpin: { type: Boolean, attribute: 'iconleftspin' },
    isIconRightSpin: { type: Boolean, attribute: 'iconrightspin' },
    noDivider: { type: Boolean, attribute: 'no-divider', reflect: true },
  };

  constructor() {
    super();
    this.disabled = false;
    this.isIconLeftSpin = false;
    this.isIconRightSpin = false;
  }

  #computeClassString() {
    return [
      'wrapper',
      this.iconLeft && 'left-divider',
      this.iconRight && 'right-divider',
    ]
      .filter(Boolean)
      .join(' ');
  }

  render() {
    return html`<span class=${this.#computeClassString()}>
      ${this.iconLeft
        ? html`<cfpb-icon
            name="${this.iconLeft}"
            ?spin=${this.isIconLeftSpin}
          ></cfpb-icon>`
        : ''}
      <slot></slot>
      ${this.iconRight
        ? html`<cfpb-icon
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
