import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineComponent } from '../utilities/shared-config';
import styles from './styles.component.scss?inline';

/**
 *
 * @element cfpb-list-item.
 * @slot - The content for the topic tag.
 */
export class CfpbListItem extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`<slot></slot>`;
  }

  static init() {
    defineComponent('cfpb-list-item', CfpbListItem);
  }
}
