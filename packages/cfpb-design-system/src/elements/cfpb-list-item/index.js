import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-list-item.component.scss';
import { ref, createRef } from 'lit/directives/ref.js';
import { CfpbCheckboxIcon } from '../cfpb-checkbox-icon';

/**
 * @element cfpb-list-item
 * @slot - The text for the list item
 */
export class CfpbListItem extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  #checkboxIcon = createRef();
  #value;
  #inList = false;

  /**
   * @property {string} type - Choice type: plain, check, checkbox.
   * @property {boolean} checked - Whether the list item is checked or not.
   * @property {boolean} disabled - Whether the list item is selectable or not.
   * @property {boolean} hidden - Whether the list item is hidden or not.
   * @returns {object} The map of properties.
   */
  static properties = {
    type: { type: String, reflect: true },
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    hidden: { type: Boolean, reflect: true },
    href: { type: String, refrect: true },
  };

  constructor() {
    super();
    this.type = 'plain';
    this.checked = false;
    this.disabled = false;
    this.hidden = false;
    this.href = '';
  }

  firstUpdated() {
    // Make host focusable only if not disabled
    this.tabIndex = this.disabled ? -1 : 0;

    // Only add keydown if NOT inside a list
    if (!this.#inList) {
      this.addEventListener('keydown', this.#onKeyDown);
    }

    this.addEventListener('click', this.#onClick);
  }

  connectedCallback() {
    super.connectedCallback();

    // Detect if inside a listbox
    this.#inList = this.closest('[role=listbox]') !== null;

    if (this.#inList) {
      this.setAttribute('role', 'option');
      this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
      this.setAttribute('aria-selected', this.checked ? 'true' : 'false');

      // Disable internal keyboard handling if inside list
      this.tabIndex = -1;
    } else {
      // Not inside list, remove list-specific ARIA
      this.removeAttribute('role');
      this.removeAttribute('aria-disabled');
      this.removeAttribute('aria-selected');
    }
  }

  updated(changed) {
    if (changed.has('checked') && this.#inList) {
      this.setAttribute('aria-selected', this.checked ? 'true' : 'false');
    }

    if (changed.has('disabled')) {
      this.tabIndex = this.disabled ? -1 : 0;
      if (this.#inList) {
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
      }
    }

    if (changed.has('hidden')) {
      this.setAttribute('aria-hidden', this.hidden ? 'true' : 'false');
      if (this.hidden) {
        this.tabIndex = -1;
        this.removeAttribute('aria-selected');
        this.checked = false;
      }
    }
  }

  #toggleChecked() {
    // If the item has an href attribute, go to that page.
    if (this.href !== '') {
      window.location.href = this.href;
    }

    // … Otherwise, toggle the checked state.
    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent('click-item', {
        detail: { checked: this.checked, value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  #onClick() {
    if (!this.disabled && !this.hidden) this.#toggleChecked();
  }

  #onKeyDown(evt) {
    if (this.disabled || this.hidden) return;

    if (evt.key === ' ' || evt.key === 'Enter') {
      evt.preventDefault();
      this.#toggleChecked();
    }
  }

  #onMouseOver() {
    this.#checkboxIcon.value?.mouseover();
  }

  #onMouseLeave() {
    this.#checkboxIcon.value?.mouseleave();
  }

  get value() {
    if (this.#value) return this.#value;

    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return '';

    this.#value = slot
      .assignedNodes({ flatten: true })
      .map((node) => node.textContent)
      .join('')
      .trim();

    return this.#value;
  }

  set value(val) {
    this.#value = val;
  }

  render() {
    return html`
      <div
        part="container"
        class="container
        ${this.disabled ? '' : 'selectable'}"
        @mouseover=${this.#onMouseOver}
        @mouseleave=${this.#onMouseLeave}
      >
        ${this.#chooseRender()}
      </div>
    `;
  }

  #chooseRender() {
    switch (this.type) {
      case 'check':
        return this.#renderCheck();
      case 'checkbox':
        return this.#renderCheckbox();
      default:
        return this.#renderPlain();
    }
  }

  #renderPlain() {
    return html`<div><slot></slot></div>`;
  }

  #renderCheck() {
    return html`
      <div class="checkbox">
        <cfpb-checkbox-icon
          borderless
          ?disabled=${this.disabled}
          ?checked=${this.checked}
        ></cfpb-checkbox-icon>
        <slot></slot>
      </div>
    `;
  }

  #renderCheckbox() {
    return html`
      <div class="checkbox">
        <cfpb-checkbox-icon
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ${ref(this.#checkboxIcon)}
        ></cfpb-checkbox-icon>
        <slot></slot>
      </div>
    `;
  }

  static init() {
    CfpbCheckboxIcon.init();

    if (!window.customElements.get('cfpb-list-item')) {
      window.customElements.define('cfpb-list-item', CfpbListItem);
    }
  }
}
