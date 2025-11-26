import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-icon-text.component.scss';

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
   * @returns {object} The map of properties.
   */
  static properties = {
    disabled: { type: Boolean, reflect: true },
    iconHidden: { type: Boolean, reflect: true, attribute: 'icon-hidden' },
  };

  constructor() {
    super();
    this.disabled = false;
    this.iconHidden = false;
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot');
    this.#updateDividers();

    // Handle dynamically added/removed nodes.
    slot.addEventListener('slotchange', () => this.#updateDividers());
  }

  updated(changedProps) {
    if (changedProps.has('iconHidden')) {
      this.#updateDividers();
    }
  }

  #updateDividers() {
    const wrapper = this.shadowRoot.querySelector('.wrapper');
    const slot = this.shadowRoot.querySelector('slot');
    const nodes = slot.assignedNodes({ flatten: true }).filter((node) => {
      return (
        node.nodeType === Node.ELEMENT_NODE ||
        (node.nodeType === Node.TEXT_NODE && node.textContent.trim())
      );
    });

    const showLeft =
      !this.iconHidden && nodes[0]?.tagName?.toLowerCase() === 'svg';
    const showRight =
      !this.iconHidden &&
      nodes[nodes.length - 1]?.tagName?.toLowerCase() === 'svg';

    wrapper.classList.toggle('left-divider', showLeft);
    wrapper.classList.toggle('right-divider', showRight);
  }

  hideIcon() {
    this.iconHidden = true;
  }

  showIcon() {
    this.iconHidden = false;
  }

  render() {
    return html`<span class="wrapper"><slot></slot></span>`;
  }

  static init() {
    window.customElements.get('cfpb-icon-text') ||
      window.customElements.define('cfpb-icon-text', CfpbIconText);
  }
}
