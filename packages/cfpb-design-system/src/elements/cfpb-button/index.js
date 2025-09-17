import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-button.component.scss';

/**
 *
 * @element cfpb-button
 * @slot - The main content for the button.
 */
export class CfpbButton extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {string} href - The URL to link to (makes the button a link).
   * @property {boolean} disabled - Whether to stack the tags vertically.
   * @property {string} type - The button type: secondary, warning, disabled.
   */
  static get properties() {
    return {
      href: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      variant: { type: String, reflect: true },
      'full-on-mobile': { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.href = '';
    this.disabled = false;
    this.variant = '';
    this['full-on-mobile'] = false;
  }

  hideIcon() {
    const icon = this.#findIconInSlot();
    if (icon) icon.style.display = 'none';
  }

  showIcon() {
    const icon = this.#findIconInSlot();
    if (icon) icon.style.display = '';
  }

  #findIconInSlot() {
    const slot = this.shadowRoot.querySelector('slot');
    const nodes = slot.assignedNodes({ flatten: true });

    for (const node of nodes) {
      if (node.tagName.toLowerCase() === 'svg') {
        return node;
      }
    }
  }

  get #btnClass() {
    let btnClass = 'a-btn';
    switch (this.variant) {
      case 'secondary':
        btnClass += ' a-btn--secondary';
        break;
      case 'warning':
        btnClass += ' a-btn--warning';
        break;
    }

    if (this['full-on-mobile']) {
      btnClass += ' a-btn--full-on-xs';
    }

    return btnClass;
  }

  render() {
    const slot =
      this.href === ''
        ? html`<button
            class="${this.#btnClass}"
            ?variant=${this.variant}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </button>`
        : html`<a
            class="${this.#btnClass}"
            ?href="${this.href}"
            ?variant=${this.variant}
            ?disabled=${this.disabled}
          >
            <slot></slot>
          </a>`;

    return html`${slot}`;
  }

  static init() {
    window.customElements.get('cfpb-button') ||
      window.customElements.define('cfpb-button', CfpbButton);
  }
}
