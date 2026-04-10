import { LitElement, css, unsafeCSS } from 'lit';
import styles from './styles.component.css?inline';

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
