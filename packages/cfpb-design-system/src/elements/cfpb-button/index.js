import { html, LitElement, css, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ref, createRef } from 'lit/directives/ref.js';
import cfpbColorTokens from '../abstracts/custom-props.css';
import cfpbButtonTokens from './vars.css';
import cfpbPlainButtonTokens from './cfpb-button.scss';
import cfpbButtonLinksTokens from './cfpb-button-link.scss';
import styles from './cfpb-button.component.scss';
// import styles from './button.scss';

import { CfpbIconText } from '../cfpb-icon-text';

// The variants are different color themes of the button.
const VALID_VARIANTS = ['primary', 'secondary', 'warning'];

// The types are a regular button, or submit/reset that are used in forms.
const VALID_TYPES = ['button', 'submit', 'reset'];

/**
 *
 * @element cfpb-button
 * @slot - The main content for the button.
 */
export class CfpbButton extends LitElement {
  static styles = [
    css`${unsafeCSS(cfpbColorTokens)}`,
    css`${unsafeCSS(cfpbButtonTokens)}`,
    css`${unsafeCSS(cfpbPlainButtonTokens)}`,
    css`${unsafeCSS(cfpbButtonLinksTokens)}`,
    css`${unsafeCSS(styles)}
  `];

  /**
   * @property {string} type - The button type: button, submit, or reset.
   * @property {string} href - The URL to link to (makes the button a link).
   * @property {boolean} disabled - Whether the button is disabled or not.
   * @property {string} variant - The button variant: secondary and warning.
   * @property {boolean} fullOnMobile - Whether to be width 100% on mobile.
   * @property {boolean} flushLeft - Whether button is not rounded on left.
   * @property {boolean} flushRight - Whether button is not rounded on right.
   * @property {boolean} styleAsLink - Style the button as a link.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      type: { type: String },
      href: { type: String },
      disabled: { type: Boolean, reflect: true },
      variant: { type: String },
      fullOnMobile: {
        type: Boolean,
        attribute: 'full-on-mobile',
        reflect: true,
      },
      flushLeft: {
        type: Boolean,
        attribute: 'flush-left',
        reflect: true,
      },
      flushRight: {
        type: Boolean,
        attribute: 'flush-right',
        reflect: true,
      },
      styleAsLink: {
        type: Boolean,
        attribute: 'style-as-link',
        reflect: true,
      },
    };
  }

  // DOM references.
  #iconTextDom = createRef();

  constructor() {
    super();
    this.type = 'button';
    this.variant = 'primary';
    this.disabled = false;
    this.fullOnMobile = false;
    this.styleAsLink = false;
  }

  /**
   * @returns {boolean} True if it has an icon, false otherwise.
   */
  hasIcon() {
    return this.#iconTextDom.value?.hasIcon();
  }

  /**
   * Hide any icon in the slot.
   */
  hideIcon() {
    this.#iconTextDom.value?.hideIcon();
  }

  /**
   * Show any icon in the slot, if it was hidden.
   */
  showIcon() {
    this.#iconTextDom.value?.showIcon();
  }

  /**
   * Ensure the variant value is valid, and fall back to a default if not.
   * @returns {string} A valid variant value string.
   */
  get #validVariant() {
    return VALID_VARIANTS.includes(this.variant) ? this.variant : 'primary';
  }

  /**
   * Ensure the type value is valid, and fall back to a default if not.
   * @returns {string} A valid type value string.
   */
  get #validType() {
    return VALID_TYPES.includes(this.type) ? this.type : 'button';
  }

  /**
   * The classes added to the button.
   * @returns {object} A classmap of CSS class names.
   */
  get #btnClass() {
    return {
      'a-btn': true,
      [`a-btn--${this.#validVariant}`]: this.#validVariant !== 'primary',
      [`a-btn--link`]: this.styleAsLink === true,
    };
  }

  #renderTextAndIcon() {
    return html`
      <cfpb-icon-text ${ref(this.#iconTextDom)} ?disabled=${this.disabled}>
        <slot></slot>
      </cfpb-icon-text>
    `;
  }

  render() {
    const classes = classMap(this.#btnClass);

    // Link button form.
    if (this.href) {
      return html`
        <a
          class=${classes}
          href=${this.disabled ? undefined : this.href}
          role="button"
          aria-disabled=${String(this.disabled)}
          tabindex=${this.disabled ? -1 : 0}
        >
          ${this.#renderTextAndIcon()}
        </a>
      `;
    }

    // Button form.
    return html`
      <button
        class=${classes}
        ?disabled=${this.disabled}
        type=${this.#validType}
      >
        ${this.#renderTextAndIcon()}
      </button>
    `;
  }

  static init() {
    CfpbIconText.init();

    window.customElements.get('cfpb-button') ||
      window.customElements.define('cfpb-button', CfpbButton);
  }
}
