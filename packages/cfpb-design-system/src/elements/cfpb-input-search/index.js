import { html, LitElement, css, unsafeCSS } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import styles from './cfpb-input-search.component.scss';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import searchIcon from '../../components/cfpb-icons/icons/search.svg';
import clearIcon from '../../components/cfpb-icons/icons/error.svg';

/**
 * @element cfpb-input-search
 * @slot - The label for the form input.
 */
export class CfpbInputSearch extends LitElement {
  static formAssociated = true;

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @property {boolean} disabled - Whether the choice is disabled or not.
   * @property {string} validation - Validation style: error, warning, success.
   * @property {string} label - The aria-label for the input.
   * @property {string} name - The name within a form.
   * @property {string} value - The value within the input.
   * @property {string} placeholder - The placeholder value.
   * @property {string} ariaLabelInput - aria-label for input.
   * @property {string} ariaLabelButton - aria-label for button.
   * @returns {object} The map of properties.
   */
  static properties = {
    disabled: { type: Boolean },
    validation: { type: String },
    label: { type: String },
    name: { type: String },
    title: { type: Boolean, attribute: true },
    value: { type: String },
    placeholder: { type: String },
    ariaLabelInput: { type: String, attribute: 'aria-label-input' },
    ariaLabelButton: { type: String, attribute: 'aria-label-button' },
  };

  #internals;
  #searchInput;

  constructor() {
    super();
    this.disabled = false;
    this.validation = '';
    this.label = 'Search';
    this.name = '';
    this.title = 'Search';
    this.value = '';
    this.placeholder = '';
    this.ariaLabelInput = '' | 'Search input';
    this.ariaLabelButton = '' | 'Search';

    this.#internals = this.attachInternals();
    this.#searchInput = createRef();
  }

  #onClickReset() {
    this.#searchInput.value.value = '';
  }

  #onClickSubmit(evt) {
    evt.preventDefault();
    this.#internals.form?.requestSubmit();
  }

  #onInput(evt) {
    this.value = evt.target.value;
    this.#internals.setFormValue(this.value);
  }

  render() {
    return html`
      <div class="o-search-input">
        <div class="o-search-input__input">
          <label
            for="search-text"
            class="o-search-input__input-label"
            aria-label="${this.label}"
          >
            ${unsafeSVG(searchIcon)}
          </label>
          <input
            type="search"
            name="${this.name}"
            value="${this.value}"
            class="a-text-input a-text-input__full"
            placeholder="${this.placeholder}"
            title="${this.title}"
            autocomplete="off"
            maxlength="75"
            aria-label="${this.ariaLabelInput}"
            ${ref(this.#searchInput)}
            @input=${this.#onInput}
          />
          <button
            type="reset"
            aria-label="Clear search"
            title="Clear search"
            @click=${this.#onClickReset}
          >
            ${unsafeSVG(clearIcon)}
          </button>
        </div>
        <button
          class="a-btn"
          type="submit"
          aria-label="Search for term(s)"
          @click=${this.#onClickSubmit}
        >
          Search
        </button>
      </div>
    `;
  }

  static init() {
    window.customElements.get('cfpb-input-search') ||
      window.customElements.define('cfpb-input-search', CfpbInputSearch);
  }
}
