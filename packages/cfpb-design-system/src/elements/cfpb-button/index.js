import { html, LitElement, css, unsafeCSS } from 'lit';
import { defineComponent } from '../cfpb-utilities/shared-config';
import { classMap } from 'lit/directives/class-map.js';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './styles.component.scss?inline';
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
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {string} type - The button type: button, submit, or reset.
   * @property {string} href - The URL to link to (makes the button a link).
   * @property {boolean} disabled - Whether the button is disabled or not.
   * @property {string} variant
   *   The button variant: primary, secondary, or warning.
   * @property {string} iconLeft - The name of the icon on the left.
   * @property {string} iconRight - The name of the icon on the right.
   * @property {string} isIconLeftSpin - Whether the left icon spins or not.
   * @property {string} isIconRightSpin - Whether the right icon spins or not.
   * @property {boolean} fullOnMobile - Whether to be width 100% on mobile.
   * @property {boolean} flushLeft - Whether button is not rounded on left.
   * @property {boolean} flushRight - Whether button is not rounded on right.
   * @property {boolean} styleAsLink - Style the button as a link.
   * @returns {object} The map of properties.
   */
  static properties = {
    type: { type: String },
    href: { type: String },
    disabled: { type: Boolean, reflect: true },
    variant: { type: String },
    iconLeft: { type: String },
    iconRight: { type: String },
    isIconLeftSpin: { type: Boolean, attribute: 'iconleftspin' },
    isIconRightSpin: { type: Boolean, attribute: 'iconrightspin' },
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

  // DOM references.
  #iconTextDom = createRef();

  constructor() {
    super();
    this.type = 'button';
    this.variant = 'primary';
    this.disabled = false;
    this.fullOnMobile = false;
    this.styleAsLink = false;
    this.iconLeftSpin = false;
    this.iconRightSpin = false;
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

  get dividerColorVar() {
    switch (this.variant) {
      case 'warning':
        return '--btn-warning-divider';
      case 'secondary':
        return '--btn-secondary-divider';
      default:
        return '--btn-divider';
    }
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
      <cfpb-icon-text
        ${ref(this.#iconTextDom)}
        ?disabled=${this.disabled}
        style="--icon-text-divider: var(${this.dividerColorVar})"
        iconleft=${this.iconLeft}
        iconright=${this.iconRight}
        ?iconleftspin=${this.isIconLeftSpin}
        ?iconrightspin=${this.isIconRightSpin}
      >
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
    defineComponent('cfpb-button', CfpbButton);
  }
}
