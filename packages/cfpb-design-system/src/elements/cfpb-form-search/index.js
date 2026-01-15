import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-form-search.component.scss';
import { ref, createRef } from 'lit/directives/ref.js';
import { CfpbFormSearchInput } from '../cfpb-form-search-input';
import { SearchService } from '../cfpb-utilities/search-service.js';
import { CfpbList } from '../cfpb-list';
import { CfpbFormAlert } from '../cfpb-form-alert';

/**
 * @element cfpb-form-search
 */
export class CfpbFormSearch extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static formAssociated = true;

  /**
   * @property {boolean} disabled - Whether the choice is disabled or not.
   * @property {string} validation - Validation style: error, warning, success.
   * @property {string} label - The aria-label for the input.
   * @property {string} name - The name within a form.
   * @property {string} value - The value within the input.
   * @property {string} placeholder - The placeholder value.
   * @property {string} maxlength - The maximum characters allowed in the input.
   * @property {string} ariaLabelInput - aria-label for input.
   * @property {string} ariaLabelButton - aria-label for button.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      disabled: { type: Boolean },
      validation: { type: String },
      label: { type: String },
      name: { type: String },
      title: { type: Boolean, attribute: true },
      value: { type: String },
      maxlength: { type: Number },
      placeholder: { type: String },
      ariaLabelInput: { type: String, attribute: 'aria-label-input' },
      ariaLabelButton: { type: String, attribute: 'aria-label-button' },
      searchList: { type: Array },
    };
  }

  #list = createRef();
  #popup = createRef();

  #internals;
  #search;

  constructor() {
    super();

    this.value = '';
    this.#internals = this.attachInternals();
    this.searchList = [];
  }

  #onSlotChange(evt) {
    const slot = evt.target;

    const list = slot
      .assignedNodes({ flatten: true })
      .filter(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE &&
          (node.tagName === 'UL' || node.tagName === 'OL'),
      );

    if (!list || !list[0]) {
      return;
    }

    // Extract list items (with their text or link info)
    const items = [...list[0].querySelectorAll('li')].map((li) => {
      const link = li.querySelector('a');
      if (link) {
        return {
          value: link.textContent.trim(),
          href: link.getAttribute('href'),
        };
      }
      return { value: li.textContent.trim() };
    });

    this.searchList = items;

    this.#search = new SearchService(
      items.map((item) => {
        return item.value;
      }),
    );
  }

  #onClear() {
    this.#popup.value.classList.remove('show');
    this.#list.value.showAllItems();
  }

  #onInput(evt) {
    if (evt.target.value.length > 1) {
      this.#popup.value.classList.add('show');
      if (this.#search) {
        this.#list.value.filterItems(this.#search.search(evt.target.value));
      }
    } else {
      this.#popup.value.classList.remove('show');
    }

    this.value = evt.target.value;
  }

  #onBlur() {
    this.#popup.value.classList.remove('show');
  }

  get isSearchDisabled() {
    return this.disabled || this.isOverMaxLength;
  }

  get isOverMaxLength() {
    const isOverMax = this.value.length > this.maxlength;
    if (isOverMax) this.validation = 'error';
    else this.validation = '';
    return isOverMax;
  }

  #onClickSearch(evt) {
    evt.preventDefault();
    if (this.disabled) return;

    if (this.value !== '') {
      this.#internals.setFormValue(this.value);
      this.#internals.form?.requestSubmit();
    }
  }

  render() {
    return html` <!--Light DOM content-->
      <slot @slotchange=${this.#onSlotChange}></slot>

      <!--Shadow DOM content-->
      <div class="o-form-search">
        <div class="container">
          <cfpb-form-search-input
            ?name=${this.name}
            .value=${this.value}
            ?placeholder=${this.placeholder}
            title=${this.title}
            ?maxlength=${this.maxlength}
            aria-label=${this.ariaLabelInput}
            ?validation=${this.validation}
            @clear=${this.#onClear}
            @input=${this.#onInput}
            @blur=${this.#onBlur}
          ></cfpb-form-search-input>

          <div class="popup" ${ref(this.#popup)}>
            <cfpb-list .childData=${this.searchList} ${ref(this.#list)}>
            </cfpb-list>
          </div>
        </div>

        <button
          class="a-btn"
          type="submit"
          aria-label="Search for term(s)"
          ?disabled=${this.isSearchDisabled}
          @click=${this.#onClickSearch}
        >
          Search
        </button>
      </div>

      ${this.isOverMaxLength
        ? html`<cfpb-form-alert validation="error">
            Searches are limited to ${this.maxlength} characters.
          </cfpb-form-alert>`
        : null}`;
  }

  static init() {
    CfpbFormSearchInput.init();
    CfpbList.init();
    CfpbFormAlert.init();

    window.customElements.get('cfpb-form-search') ||
      window.customElements.define('cfpb-form-search', CfpbFormSearch);
  }
}
