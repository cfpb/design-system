import { html, LitElement, css, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './cfpb-form-search-input.component.scss';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import searchIcon from '../../components/cfpb-icons/icons/search.svg';
import clearIcon from '../../components/cfpb-icons/icons/error.svg';

/**
 * @element cfpb-form-search-input
 */
export class CfpbFormSearchInput extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} disabled - Whether the input is disabled or not.
   * @property {string} validation - Validation style: error, warning, success.
   * @property {string} label - The aria-label for the input.
   * @property {string} name - The name within a form.
   * @property {string} value - The value within the input.
   * @property {number} maxlength - The maximum characters allowed in the input.
   * @property {string} placeholder - The placeholder value.
   * @property {string} ariaLabelInput - aria-label for input.
   * @property {string} ariaLabelButton - aria-label for button.
   * @property {boolean} borderless - Whether the input has a border or not.
   * @returns {object} The map of properties.
   */
  static properties = {
    disabled: { type: Boolean, reflect: true },
    validation: { type: String, reflect: true },
    label: { type: String },
    name: { type: String },
    title: { type: String, attribute: true },
    value: { type: String },
    maxlength: { type: Number, reflect: true },
    placeholder: { type: String },
    ariaLabelInput: { type: String, attribute: 'aria-label-input' },
    ariaLabelButton: { type: String, attribute: 'aria-label-button' },
    borderless: { type: Boolean, reflect: true },
  };

  #searchInput;

  constructor() {
    super();

    this.label = 'Search';
    this.name = '';
    this.title = 'Search';
    this.value = '';
    this.maxlength = 75;
    this.placeholder = '';
    this.ariaLabelInput = 'Search input';
    this.ariaLabelButton = 'Clear search';
    this.disabled = false;
    this.#searchInput = createRef();

    // Borderless is only used for CSS.
    this.borderless = false;
  }

  #onInput(evt) {
    this.value = evt.target.value;
  }

  #onBlur() {
    this.dispatchEvent(
      new Event('blur', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  #onClickClear(evt) {
    evt.preventDefault();
    if (this.disabled) return;
    this.value = '';
    this.#searchInput.value?.focus();
    this.dispatchEvent(
      new CustomEvent('clear', { detail: '', bubbles: true, composed: true }),
    );
  }

  render() {
    return html`
      <div
        class="o-search-input ${this.validation
          ? `o-search-input--${this.validation}`
          : ''}"
      >
        <label
          for="search-text"
          class="o-search-input__input-label"
          aria-label=${this.label}
        >
          ${unsafeSVG(searchIcon)}
        </label>
        <input
          id="search-text"
          type="search"
          name=${this.name}
          .value=${this.value}
          ?disabled=${this.disabled}
          class="a-text-input a-text-input__full"
          placeholder=${this.placeholder}
          title=${this.title}
          autocomplete="off"
          maxlength=${this.maxlength}
          aria-label=${this.ariaLabelInput}
          ${ref(this.#searchInput)}
          @input=${this.#onInput}
          @blur=${this.#onBlur}
        />
        <button
          type="reset"
          aria-label=${this.ariaLabelButton}
          title=${this.ariaLabelButton}
          @click=${this.#onClickClear}
        >
          ${unsafeSVG(clearIcon)}
        </button>
      </div>
    `;
  }

  static init() {
    window.customElements.get('cfpb-form-search-input') ||
      window.customElements.define(
        'cfpb-form-search-input',
        CfpbFormSearchInput,
      );
  }
}
