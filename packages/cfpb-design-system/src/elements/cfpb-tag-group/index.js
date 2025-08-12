import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-tag-group.component.scss';

/**
 *
 * @element cfpb-tag-group.
 * @slot - The main content for the upload button.
 */
export class CfpbTagGroup extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static get properties() {
    return {
      stacked: { type: Boolean, reflect: true },
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.stacked = false;
    this.items = [];
  }

  render() {
    return html`
      <ul class=${this.stacked ? 'stacked' : ''}>
        ${this.items.length
          ? this.items?.map((item) => html`<li>${item}</li>`)
          : html`<slot @slotchange=${this.#handleSlotChange}></slot>`}
      </ul>
    `;
  }

  #handleSlotChange(evt) {
    const slot = evt.target;
    Promise.resolve().then(() => {
      const assigned = slot.assignedElements({ flatten: true });
      let lastItemIsLink = false;
      if (assigned.length && !this.#arraysEqual(assigned, this.items)) {
        this.items = assigned;
        let item;
        for (var i = 0, len = this.items.length; i < len; i++) {
          item = this.items[i];
          if (lastItemIsLink) {
            item.siblingOfJumpLink = true;
            lastItemIsLink = false;
          }
          if (item.href !== '') {
            lastItemIsLink = true;
          }
        }
        this.requestUpdate();
      }
    });
  }

  #arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    return a.every((elm, index) => elm === b[index]);
  }

  static init() {
    // Initialize parent file upload.
    window.customElements.get('cfpb-tag-group') ||
      window.customElements.define('cfpb-tag-group', CfpbTagGroup);
  }
}
