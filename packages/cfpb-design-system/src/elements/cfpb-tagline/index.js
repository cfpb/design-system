import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import { CfpbFlagUsa } from '../cfpb-flag-usa';
import styles from './styles.component.scss?inline';

/**
 * @element cfpb-tagline
 * @slot - The main content for the tagline.
 */
export class CfpbTagline extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} isLarge - Whether to use the larger tagline appearance.
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
    defineComponent('cfpb-tagline', CfpbTagline);
  }
}
