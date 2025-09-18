import { html, LitElement, css, unsafeCSS } from 'lit';
import styles from './cfpb-multiselect.component.scss';
import { MultiselectModel } from './multiselect-model.js';
import { CfpbFormChoice } from '../cfpb-form-choice';
import { CfpbLabel } from '../cfpb-label';

// Constants for direction.
const DIR_PREV = 'prev';
const DIR_NEXT = 'next';

// Constants for key binding.
const KEY_RETURN = 'Enter';
const KEY_ESCAPE = 'Escape';
const KEY_UP = 'ArrowUp';
const KEY_DOWN = 'ArrowDown';
const KEY_TAB = 'Tab';

/**
 *
 * @element cfpb-multiselect.
 * @slot - The main content for the upload button.
 */
export class CfpbMultiselect extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static get properties() {
    return {
      // Other properties.
      name: { type: String },
      options: { type: Array, state: true },
      selectedLabel: { type: String, state: true },
      label: { type: String, attribute: true },
    };
  }

  // DOM references.
  #containerDom;
  #fieldsetDom;
  #searchDom;
  #optionsDom;
  #optionItemDoms;

  #model;
  #isBlurSkipped;

  constructor() {
    super();
    this.options = [];
    this.selectedLabel = '';
    this.#isBlurSkipped = false;
  }

  firstUpdated() {
    // Set DOM references.
    const root = this.renderRoot;
    this.#containerDom = root.querySelector('.o-multiselect');
    this.#fieldsetDom = root.querySelector('fieldset');
    this.#searchDom = root.querySelector('input');
    this.#optionsDom = root.querySelector('ul');
  }

  #slotChanged() {
    this.#initializeFromLightDom();

    this.#model = new MultiselectModel(this.options, this.name, {}).init();

    // Wait for lit to finish its render cycle so we can query the list items.
    this.updateComplete.then(() => {
      this.#optionItemDoms = Array.from(this.renderRoot.querySelectorAll('li'));
    });
  }

  #initializeFromLightDom() {
    const fallbackSelect = this.querySelector('select');
    if (fallbackSelect) {
      this.name = fallbackSelect.name;

      // Read options.
      let index = 0;
      this.options = Array.from(fallbackSelect.options).map((opt) => ({
        value: opt.value,
        label: opt.label,
        text: opt.text,
        checked: opt.selected,
        index: index++,
      }));

      this.selectedLabel = fallbackSelect.selectedOptions[0]?.label || '';

      // Remove or hide the fallback <select>
      fallbackSelect.style.display = 'none';
    }
  }

  /**
   * Set the filtered matched state.
   */
  #filterMatches() {
    this.#optionsDom.classList.remove('u-no-results');
    this.#optionsDom.classList.add('u-filtered');

    let filteredIndices = this.#model.lastFilterIndicesList;
    for (let i = 0, len = filteredIndices.length; i < len; i++) {
      this.#optionItemDoms[filteredIndices[i]].classList.remove(
        'u-filter-match',
      );
    }

    filteredIndices = this.#model.filterIndicesList;
    for (let j = 0, len = filteredIndices.length; j < len; j++) {
      this.#optionItemDoms[filteredIndices[j]].classList.add('u-filter-match');
    }
  }

  /**
   * Resets the filtered option list.
   */
  #resetFilter() {
    this.#optionsDom.classList.remove('u-filtered', 'u-no-results');

    for (let i = 0, len = this.#optionsDom.children.length; i < len; i++) {
      this.#optionsDom.children[i].classList.remove('u-filter-match');
    }

    this.#model.clearFilter();
  }

  /**
   * Updates the list of options to show the user there
   * are no matching results.
   */
  #filterNoMatches() {
    this.#optionsDom.classList.add('u-no-results');
    this.#optionsDom.classList.remove('u-filtered');
  }

  /**
   * Filter the options list.
   * Every time we filter we have two lists of indices:
   * - The matching options (filterIndices).
   * - The matching options of the last filter (_lastFilterIndices).
   * We need to turn off the filter for any of the last filter matches
   * that are not in the new set, and turn on the filter for the matches
   * that are not in the last set.
   * @param {Array} filterIndices - List of indices to filter from the options.
   * @returns {boolean} True if options are filtered, false otherwise.
   */
  #filterList(filterIndices) {
    if (filterIndices.length > 0) {
      this.#filterMatches();
      return true;
    }

    this.#filterNoMatches();
    return false;
  }

  /**
   * Evaluates the list of options based on the user's query in the
   * search input.
   * @param {string} value - Text the user has entered in the search query.
   */
  #evaluate(value) {
    this.#resetFilter();
    this.#model.resetIndex();
    const matchedIndices = this.#model.filterIndices(value);
    this.#filterList(matchedIndices);
  }

  /**
   * Expand the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  expand() {
    this.#containerDom.classList.add('u-active');
    this.#fieldsetDom.classList.remove('u-invisible');
    this.#fieldsetDom.setAttribute('aria-hidden', false);

    const event = new Event('expandbegin', { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  /**
   * Collapse the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  collapse() {
    this.#containerDom.classList.remove('u-active');
    this.#fieldsetDom.classList.add('u-invisible');
    this.#fieldsetDom.setAttribute('aria-hidden', true);
    this.#model.resetIndex();

    const event = new Event('collapsebegin', { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  /**
   * Highlights an option in the list.
   * @param {string} direction
   *   Direction to highlight compared to the current focus.
   */
  #highlight(direction) {
    console.log('highlight', direction);
    if (direction === DIR_NEXT) {
      this.#model.index = this.#model.index + 1;
    } else if (direction === DIR_PREV) {
      this.#model.index = this.#model.index - 1;
    }

    const index = this.#model.index;
    if (index > -1) {
      let filteredIndex = index;
      const filterIndices = this.#model.filterIndicesList;
      if (filterIndices.length > 0) {
        filteredIndex = filterIndices[index];
      }
      const option = this.#model.getOption(filteredIndex);
      const value = option.value;
      const item = this.#optionsDom.querySelector(
        '[data-option="' + value + '"]',
      );
      this.#isBlurSkipped = true;
      item.focus();
    } else {
      this.#isBlurSkipped = false;
      this.#searchDom.focus();
    }
  }

  /**
   * Resets the search input and filtering.
   */
  #resetSearch() {
    this.#searchDom.value = '';
    this.#resetFilter();
  }

  /**
   * Tracks a user's selections and updates the list in the dom.
   * @param {number} optionIndex - The index position of the chosen option.
   */
  #updateSelections(optionIndex) {
    const option =
      this.#model.getOption(optionIndex) ||
      this.#model.getOption(this.#model.index);

    if (option) {
      if (option.checked) {
        if (this.#optionsDom.classList.contains('u-max-selections')) {
          this.#optionsDom.classList.remove('u-max-selections');
        }
      }
    }

    if (this.#model.isAtMaxSelections() && !option.checked) return;

    if (this.#optionsDom.classList.contains('u-max-selections')) {
      this.#optionsDom.classList.remove('u-max-selections');
    }

    this.#model.toggleOption(optionIndex);

    this.#model.resetIndex();
    this.#isBlurSkipped = false;

    if (this.#fieldsetDom.getAttribute('aria-hidden') === 'false') {
      this.#searchDom.focus();
    }

    // Spread is used to create a new array reference,
    // which triggers a lit lifecycle update.
    this.options = [...this.#model.options];

    if (this.#model.isAtMaxSelections()) {
      this.#optionsDom.classList.add('u-max-selections');
    }
  }

  #searchInputFocus() {
    if (this.#fieldsetDom.getAttribute('aria-hidden') === 'true') {
      this.expand();
    }
  }

  #searchInputBlur() {
    if (
      !this.#isBlurSkipped &&
      this.#fieldsetDom.getAttribute('aria-hidden') === 'false'
    ) {
      this.collapse();
    }
  }

  #searchInputKeyDown(event) {
    const key = event.key;
    if (
      this.#fieldsetDom.getAttribute('aria-hidden') === 'true' &&
      key !== KEY_TAB
    ) {
      this.expand();
    }

    if (key === KEY_RETURN) {
      event.preventDefault();
      this.#highlight(DIR_NEXT);
    } else if (key === KEY_ESCAPE) {
      this.#resetSearch();
      this.collapse();
    } else if (key === KEY_DOWN) {
      this.#highlight(DIR_NEXT);
    } else if (
      key === KEY_TAB &&
      !event.shiftKey &&
      this.#fieldsetDom.getAttribute('aria-hidden') === 'false'
    ) {
      this.collapse();
    }
  }

  /**
   * Handles the functions to trigger on the checkbox change.
   * @param {Event} event - The checkbox change event.
   * @param index
   */
  #onChangeCheckbox(index) {
    //opt.checked = !opt.checked;
    this.#resetSearch();
    this.#updateSelections(index);
  }

  #onKeyDownList(event) {
    const key = event.key;
    const target = event.target;
    const checked = target.checked;

    if (key === KEY_RETURN) {
      event.preventDefault();

      /* Programmatically checking a checkbox does not fire a change event
        so we need to manually create an event and dispatch it from the input.
        */
      target.checked = !checked;
      //const evt = new Event('change', { bubbles: false, cancelable: true });
      //target.dispatchEvent(evt);
    } else if (key === KEY_ESCAPE) {
      this.#searchDom.focus();
      this.collapse();
    } else if (key === KEY_UP) {
      this.#highlight(DIR_PREV);
    } else if (key === KEY_DOWN) {
      this.#highlight(DIR_NEXT);
    }
  }

  render() {
    // Track the index position of the option in the list.
    let index = 0;

    const renderTags = [];
    const renderChoices = [];

    this.options.map((item) => {
      renderTags.push(html`${this.#renderTag(item)}`);
      renderChoices.push(html`${this.#renderChoice(item, index++)}`);
    });

    const label = this.label || 'Select options';

    return html`
      <!-- Fallback content like <select> and <options>s -->
      <slot @slotchange=${this.#slotChanged}></slot>

      <cfpb-label for="search-input">
        <div slot="label">${label}</div>
      </cfpb-label>
      <div class="o-multiselect">
        <cfpb-tag-group
          @tag-click=${(evt) => {
            this.#updateSelections(
              Number(evt.detail.target.getAttribute('data-index')),
            );
          }}
        >
          ${renderTags}
        </cfpb-tag-group>
        <header>
          <input
            id="search-input"
            type="text"
            autocomplete="off"
            aria-label="${label}"
            value=${this.selectedLabel || ''}
            @input=${(event) => this.#evaluate(event.target.value)}
            @focus=${this.#searchInputFocus}
            @blur=${this.#searchInputBlur}
            @keydown=${this.#searchInputKeyDown}
          />
        </header>

        <fieldset class="u-invisible" aria-hidden="true">
          <ul role="listbox" @keydown=${this.#onKeyDownList}>
            ${renderChoices}
          </ul>
        </fieldset>

        ${this.options.map((item) => this.#updateHiddenFields(item))}
      </div>
    `;
  }

  #renderTag(item) {
    let htmlSnippet = html``;
    if (item.checked === true) {
      htmlSnippet = html`<cfpb-tag-filter data-index="${item.index}"
        >${item.value}</cfpb-tag-filter
      >`;
    }

    return htmlSnippet;
  }

  #renderChoice(opt, index) {
    return html`
      <li role="option">
        <cfpb-form-choice
          data-option="${opt.label}"
          inlist="true"
          .checked="${opt.checked}"
          @change=${() => this.#onChangeCheckbox(index)}
          @mousedown=${() => (this.#isBlurSkipped = true)}
        >
          ${opt.label}
        </cfpb-form-choice>
      </li>
    `;
  }

  #updateHiddenFields(item) {
    let htmlSnippet = '';
    if (item.checked === true) {
      htmlSnippet = html`<input
        type="hidden"
        name=${this.name}
        value=${item.value}
      />`;
    }

    return htmlSnippet;
  }

  static init() {
    CfpbFormChoice.init();
    CfpbLabel.init();

    window.customElements.get('cfpb-multiselect') ||
      window.customElements.define('cfpb-multiselect', CfpbMultiselect);
  }
}
