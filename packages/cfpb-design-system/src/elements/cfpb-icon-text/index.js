import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-icon-text.component.scss';

/**
 *
 * @element cfpb-icon-text
 * @slot - The main content for the text and icon.
 */
export class CfpbIconText extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {};
  }

  // DOM references.
  #svgObserver;
  #iconClasses;

  constructor() {
    super();
    this.#iconClasses = '';
  }

  connectedCallback() {
    super.connectedCallback();

    this.#svgObserver = new MutationObserver(() => {
      this.#processLightDom();
    });

    this.#svgObserver.observe(this, {
      childList: true,
      subtree: false,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.#svgObserver) {
      this.#svgObserver.disconnect();
      this.#svgObserver = null;
    }
  }

  #processLightDom() {
    const slot = this.shadowRoot.querySelector('slot');
    const nodes = slot.assignedNodes({ flatten: true });

    let svgEl = null;
    let spanEl = null;

    for (const node of nodes) {
      if (
        node.nodeType === Node.TEXT_NODE &&
        node.textContent.trim().length > 0
      ) {
        const span = document.createElement('span');
        span.textContent = node.textContent;
        node.replaceWith(span);
        if (!spanEl) spanEl = span;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tag = node.tagName.toLowerCase();
        if (tag === 'svg' && !svgEl) {
          svgEl = node;
        } else if (tag === 'span' && !spanEl) {
          spanEl = node;
        }
      }
    }

    if (svgEl && spanEl) {
      this.classList.add('u-has-icon');
      if (
        svgEl.compareDocumentPosition(spanEl) & Node.DOCUMENT_POSITION_FOLLOWING
      ) {
        this.classList.add('u-has-icon--left');
      } else {
        this.classList.add('u-has-icon--right');
      }
    }
  }

  firstUpdated() {
    this.#processLightDom();
  }

  /**
   * Hide any icon in the slot.
   */
  hideIcon() {
    const icon = this.#findIconInSlot();
    if (icon) {
      this.#iconClasses = this.className;
      this.className = '';
    }
  }

  /**
   * Show any icon in the slot, if it was hidden.
   */
  showIcon() {
    const icon = this.#findIconInSlot();
    if (icon) this.className = this.#iconClasses;
  }

  /**
   * @returns {boolean} True if it has an icon, false otherwise.
   */
  hasIcon() {
    const icon = this.#findIconInSlot();
    if (icon) return true;
    return false;
  }

  /**
   * Find the icon SVG in the slot.
   * @returns {Node} The icon SVG node.
   */
  #findIconInSlot() {
    const slot = this.shadowRoot.querySelector('slot');
    const nodes = slot.assignedNodes({ flatten: true });

    for (const node of nodes) {
      if (node.tagName && node.tagName.toLowerCase() === 'svg') {
        return node;
      }
    }
  }

  render() {
    return html`<slot></slot>`;
  }

  static init() {
    window.customElements.get('cfpb-icon-text') ||
      window.customElements.define('cfpb-icon-text', CfpbIconText);
  }
}
