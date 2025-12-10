import { html, LitElement, css, unsafeCSS, nothing } from 'lit';
import { ref, createRef } from 'lit/directives/ref.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import styles from './cfpb-select.component.scss';
import expandIcon from '../../components/cfpb-icons/icons/down.svg';
import collapseIcon from '../../components/cfpb-icons/icons/up.svg';
import { CfpbFormSearchInput } from '../cfpb-form-search-input';
import { SearchService } from '../cfpb-utilities/search-service.js';
import { MaxHeightTransition } from '../../utilities/transition/max-height-transition';
import { FlyoutMenu } from '../../utilities/behavior/flyout-menu';
import { CfpbList } from '../cfpb-list';
import { CfpbTagGroup } from '../cfpb-tag-group';

/**
 *
 * @element cfpb-button
 * @slot - The main content for the button.
 */
export class CfpbSelect extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  // Flyout menu options.
  #flyoutMenu;
  #transition;
  #search;
  #tagGroup = createRef();
  #list = createRef();
  #displayLabel = createRef();
  #boundOnOutsideClick;
  #noResults = false;

  /**
   * @property {boolean} multiple - Whether the select supports multiple or not.
   * @property {boolean} isExpanded - Whether the select is expanded or not.
   * @property {Array} selectedTexts - Text of selected options.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      multiple: { type: Boolean, reflect: true },
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

      isExpanded: { type: Boolean, attribute: 'open', reflect: true },
      selectedTexts: { type: Array },
      optionList: { type: Array },
    };
  }

  constructor() {
    super();

    this.options = [];
    this.selectedTexts = [];
    this.optionList = [];

    this.#boundOnOutsideClick = this.#onOutsideClick.bind(this);
  }

  disconnectedCallback() {
    document.removeEventListener('pointerdown', this.#boundOnOutsideClick);
    super.disconnectedCallback();
  }

  #onOutsideClick(evt) {
    const path = evt.composedPath();
    if (!path.includes(this)) {
      this.isExpanded = false;
    }
  }

  firstUpdated() {
    this.#initFlyoutMenu();

    const selectEl = this.querySelector('select');
    if (selectEl && this.selectedTexts.length === 0) {
      this.selectedTexts = Array.from(selectEl.selectedOptions).map(
        (opt) => opt.text,
      );
    }
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
      const checked = li.querySelector('b');
      if (checked) {
        return {
          value: li.textContent.trim(),
          checked: 'true',
        };
      }
      return { value: li.textContent.trim() };
    });

    this.optionList = items;

    this.#search = new SearchService(
      items.map((item) => {
        return item.value;
      }),
    );
  }

  #onInput(evt) {
    this.#flyoutMenu.suspend();
    if (!this.isExpanded) this.isExpanded = true;
    const visibleItems = this.#list.value.filterItems(
      this.#search.search(evt.target.value),
    );

    if (visibleItems.length === 0) {
      this.#noResults = true;
      this.requestUpdate();
    } else {
      this.#noResults = false;
      this.requestUpdate();
      this.#flyoutMenu.resume();
    }
  }

  #onClear() {
    this.#list.value.showAllItems();
  }

  #initFlyoutMenu() {
    const root = this.shadowRoot.querySelector('div');
    const contentDom = root.querySelector('.o-select__content');

    // If it's expanded we don't set an initial height,
    // as it will be calculated internally.
    const initialClass = this.isExpanded
      ? MaxHeightTransition.CLASSES.MH_DEFAULT
      : MaxHeightTransition.CLASSES.MH_ZERO;
    this.#transition = new MaxHeightTransition(contentDom).init(initialClass);

    this.#flyoutMenu = new FlyoutMenu(root);

    this.#flyoutMenu.setTransition(
      this.#transition,
      this.#transition.maxHeightZero,
      this.#transition.maxHeightDynamic,
    );

    this.#flyoutMenu.init(this.isExpanded);

    // Add events.
    this.#flyoutMenu.addEventListener('expandbegin', () => {
      this.isExpanded = true;
      contentDom.classList.remove('u-hidden');
      this.dispatchEvent(
        new CustomEvent('expandbegin', {
          detail: { target: this },
          bubbles: true,
          composed: true,
        }),
      );
    });
    this.#flyoutMenu.addEventListener('collapseend', () => {
      this.isExpanded = false;
      contentDom.classList.add('u-hidden');
    });
  }

  updated(changedProps) {
    if (changedProps.has('isExpanded')) {
      const oldVal = changedProps.get('isExpanded');
      const newVal = this.isExpanded;

      if (newVal !== oldVal) {
        if (newVal) {
          this.#flyoutMenu.expand();
          document.addEventListener('pointerdown', this.#boundOnOutsideClick);
        } else {
          this.#flyoutMenu.collapse();
          document.removeEventListener(
            'pointerdown',
            this.#boundOnOutsideClick,
          );
        }
      }
    }
  }

  #onClick(evt) {
    if (evt.currentTarget.tagName === 'CFPB-FORM-SEARCH-INPUT') {
      if (this.isExpanded) this.#flyoutMenu.suspend();
      else this.#flyoutMenu.resume();
    } else {
      this.#flyoutMenu.resume();
    }
  }

  #onItemClick() {
    if (this.multiple) {
      this.optionList = this.#list.value.childData;
      this.requestUpdate();
    } else {
      const checkedItems = this.#list.value.checkedItems;
      const selectedValue = checkedItems[0]?.value;

      this.#displayLabel.value.innerHTML = selectedValue ? selectedValue : '';

      // Update optionList so the selection persists.
      this.optionList = this.optionList.map((item) => ({
        ...item,
        checked: item.value === selectedValue,
      }));

      this.requestUpdate();

      // Now close the dropdown.
      this.isExpanded = false;
    }
  }

  #onTagClick(evt) {
    const tagList = this.#tagGroup.value.tagList.filter((item) => {
      return item !== evt.detail.target;
    });

    this.optionList = this.optionList.map((item) => ({
      ...item,
      checked: !!tagList.find((tag) => tag.value === item.value),
    }));

    this.requestUpdate();
  }

  render() {
    return html`
      <!--Light DOM content-->
      <slot @slotchange=${this.#onSlotChange}></slot>

      ${this.multiple
        ? html`<cfpb-tag-group
            ${ref(this.#tagGroup)}
            .childData=${this.optionList
              .filter((item) => {
                return item.checked;
              })
              .map((item) => {
                return { text: item.value, tagName: 'cfpb-tag-filter' };
              })}
            @tag-click=${this.#onTagClick}
          >
          </cfpb-tag-group>`
        : nothing}

      <div
        class="o-select o-select--border"
        data-js-hook="behavior_flyout-menu"
      >
        <button
          class="o-select__header"
          title="Expand content"
          data-js-hook="behavior_flyout-menu_trigger"
        >
          ${this.#renderInput()}

          <span class="o-select__cues" @click=${this.#onClick}>
            <span class="o-select__cue-open" role="img" aria-label="Show">
              ${unsafeSVG(expandIcon)}
              <span class="u-visually-hidden">Show</span>
            </span>
            <span class="o-select__cue-close" role="img" aria-label="Hide">
              ${unsafeSVG(collapseIcon)}
              <span class="u-visually-hidden">Hide</span>
            </span>
          </span>
        </button>
        <div
          class="o-select__content"
          data-js-hook="behavior_flyout-menu_content"
        >
          <cfpb-list
            @item-click=${this.#onItemClick}
            ?multiple=${this.multiple}
            .childData=${this.optionList}
            type=${this.multiple ? 'checkbox' : 'check'}
            ${ref(this.#list)}
          >
          </cfpb-list>
          <div class=${this.#noResults ? 'no-results' : 'u-hidden'}>
            No results found
          </div>
        </div>
      </div>
    `;
  }

  #renderInput() {
    return this.multiple
      ? html`
          <cfpb-form-search-input
            borderless
            ?name=${this.name}
            ?value=${this.value}
            ?placeholder=${this.placeholder}
            title=${this.title}
            ?maxlength=${this.maxlength}
            aria-label=${this.ariaLabelInput}
            ?validation=${this.validation}
            @clear=${this.#onClear}
            @input=${this.#onInput}
            @click=${this.#onClick}
          ></cfpb-form-search-input>
        `
      : html`<div class="o-select__label" ${ref(this.#displayLabel)}></div>`;
  }

  static init() {
    CfpbFormSearchInput.init();
    CfpbList.init();
    CfpbTagGroup.init();

    window.customElements.get('cfpb-select') ||
      window.customElements.define('cfpb-select', CfpbSelect);
  }
}
