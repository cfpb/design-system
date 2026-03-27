import { LitElement } from 'lit';
import styles from './cfpb-flag-usa.component.scss?inline';

/**
 * @element cfpb-flag-usa
 */
export class CfpbFlagUsa extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static init() {
    globalThis.customElements.get('cfpb-flag-usa') ??
      globalThis.customElements.define('cfpb-flag-usa', CfpbFlagUsa);
  }
}
