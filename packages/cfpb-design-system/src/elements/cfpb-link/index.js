import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import styles from './styles.component.scss?inline';
import { MixinLink } from './mixin-link';

/**
 * @element cfpb-link.
 * @slot - Slot for the link text.
 */
export class CfpbLink extends MixinLink(LitElement) {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return this.renderLink(html`<slot></slot>`);
  }

  static init() {
    defineComponent('cfpb-link', CfpbLink);
  }
}
