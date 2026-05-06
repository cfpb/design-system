import { LitElement, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import styles from './styles.component.css?inline';

/**
 * @element cfpb-flag-usa
 */
export class CfpbFlagUsa extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static init() {
    defineComponent('cfpb-flag-usa', CfpbFlagUsa);
  }
}
