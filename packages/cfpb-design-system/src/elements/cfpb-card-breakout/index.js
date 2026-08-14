import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import styles from './styles.component.scss?inline';

/**
 * @element cfpb-card-breakout
 * @slot - The main content for the card.
 */
export class CfpbCardBreakout extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {string} imgSrc - The image URL.
   * @property {string} linkAnchor - The link anchor.
   */
  static properties = {
    imgSrc: { type: String, attribute: 'img-src' },
    linkAnchor: { type: String, attribute: 'link-anchor' },
  };

  constructor() {
    super();

    this.linkAnchor = '#';
    this.imgSrc = 'https://dummyimage.com/210x120/';
  }

  render() {
    return html`
      <article class="m-card m-card--breakout">
        <a href="${this.linkAnchor}">
          <img class="m-card__img" src="${this.imgSrc}" alt="" />
          <div class="m-card__inner-wrapper">
            <div class="m-card__footer">
              <span>
                <slot></slot>
              </span>
            </div>
          </div>
        </a>
      </article>
    `;
  }

  static init() {
    defineComponent('cfpb-card-breakout', CfpbCardBreakout);
  }
}
