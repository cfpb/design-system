import { html, LitElement } from 'lit';
import { CfpbFlagUsa } from '../cfpb-flag-usa';
import styles from './cfpb-tagline.component.scss';

/**
 * @element cfpb-icon-text
 * @slot - The main content for the text and icon.
 */
export class CfpbTagline extends LitElement {
  static styles = styles;

  /**
   * @property {boolean} disabled - Apply disabled styles or not.
   * @returns {object} The map of properties.
   */
  static properties = {
    isLarge: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.isLarge = false;
  }

  render() {
    const baseClasses = ['a-tagline'];
    if (this.isLarge) baseClasses.push('a-tagline--large');

    return html`
      <div
        class="${baseClasses.join(' ')}"
        aria-label="Official website of the United States government"
      >
        <cfpb-flag-usa></cfpb-flag-usa>
        <div class="a-tagline__text">
          <slot>
            An official website of the
            <span class="u-nowrap">United States government</span>
          </slot>
        </div>
      </div>
    `;
  }

  static init() {
    CfpbFlagUsa.init();

    globalThis.customElements.get('cfpb-tagline') ??
      globalThis.customElements.define('cfpb-tagline', CfpbTagline);
  }
}
