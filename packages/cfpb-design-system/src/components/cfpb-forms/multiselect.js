import {
  EventObserver,
  checkDom,
  setInitFlag,
  isMobileUserAgent,
  instantiateAll,
} from '../../utilities';
import MultiselectModel, { MAX_SELECTIONS } from './multiselect-model.js';
import { create } from './multiselect-utils.js';

import * as MultiselectStyles from './multiselect.scss';

import * as closeIconSrc from '../cfpb-icons/icons/error.svg';
const closeIcon = closeIconSrc.default;

const BASE_CLASS = 'o-multiselect';
const CHECKBOX_INPUT_CLASS = 'a-checkbox';
const TEXT_INPUT_CLASS = 'a-text-input';

// Constants for direction.
const DIR_PREV = 'prev';
const DIR_NEXT = 'next';

// Constants for key binding.
const KEY_RETURN = 'Enter';
const KEY_SPACE = ' ';
const KEY_ESCAPE = 'Escape';
const KEY_UP = 'ArrowUp';
const KEY_DOWN = 'ArrowDown';
const KEY_TAB = 'Tab';

// Configuration default
const DEFAULT_CONFIG = {
  // TODO: renderTags was added as a workaround for DS icons not rendering correctly when integrating with a React implementation.
  renderTags: true, // Allow the Multiselect to generate the Tag elements in the DOM
  maxSelections: MAX_SELECTIONS, // Maximum number of options a user can select
};

/**
 * Multiselect
 * @class
 * @classdesc Initializes a new Multiselect molecule.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the molecule.
 * @returns {Multiselect} An instance.
 */
function Multiselect(element) {
  /* TODO: As the multiselect is developed further
     explore whether it should use an updated
     class name or data-* attribute in the
     markup so that it doesn't apply globally by default. */
  element.classList.add(BASE_CLASS);

  // Internal vars.
  let _dom = checkDom(element, BASE_CLASS);
  let _isBlurSkipped = false;
  let _name;
  let _placeholder;
  let _model;
  let _options;
  let _config; // Multiselect configuration object

  // Markup elems, convert this to templating engine in the future.
  let _containerDom;
  let _selectionsDom;
  let _headerDom;
  let _searchDom;
  let _fieldsetDom;
  let _optionsDom;
  const _optionItemDoms = [];
  let _instance;

  /**
   * Set the filtered matched state.
   */
  function _filterMatches() {
    _optionsDom.classList.remove('u-no-results');
    _optionsDom.classList.add('u-filtered');

    let filteredIndices = _model.getLastFilterIndices();
    for (let i = 0, len = filteredIndices.length; i < len; i++) {
      _optionItemDoms[filteredIndices[i]].classList.remove('u-filter-match');
    }

    filteredIndices = _model.getFilterIndices();
    for (let j = 0, len = filteredIndices.length; j < len; j++) {
      _optionItemDoms[filteredIndices[j]].classList.add('u-filter-match');
    }
  }

  /**
   * Resets the filtered option list.
   */
  function _resetFilter() {
    _optionsDom.classList.remove('u-filtered', 'u-no-results');

    for (let i = 0, len = _optionsDom.children.length; i < len; i++) {
      _optionsDom.children[i].classList.remove('u-filter-match');
    }

    _model.clearFilter();
  }

  /**
   * Updates the list of options to show the user there
   * are no matching results.
   */
  function _filterNoMatches() {
    _optionsDom.classList.add('u-no-results');
    _optionsDom.classList.remove('u-filtered');
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
  function _filterList(filterIndices) {
    if (filterIndices.length > 0) {
      _filterMatches();
      return true;
    }

    _filterNoMatches();
    return false;
  }

  /**
   * Evaluates the list of options based on the user's query in the
   * search input.
   * @param {string} value - Text the user has entered in the search query.
   */
  function _evaluate(value) {
    _resetFilter();
    _model.resetIndex();
    const matchedIndices = _model.filterIndices(value);
    _filterList(matchedIndices);
  }

  /**
   * Expand the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  function expand() {
    _containerDom.classList.add('u-active');
    _fieldsetDom.classList.remove('u-invisible');
    _fieldsetDom.setAttribute('aria-hidden', false);
    _instance.dispatchEvent('expandbegin', { target: _instance });

    return _instance;
  }

  /**
   * Collapse the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  function collapse() {
    _containerDom.classList.remove('u-active');
    _fieldsetDom.classList.add('u-invisible');
    _fieldsetDom.setAttribute('aria-hidden', true);
    _model.resetIndex();
    _instance.dispatchEvent('collapsebegin', { target: _instance });

    return _instance;
  }

  /**
   * Highlights an option in the list.
   * @param {string} direction -
   *   Direction to highlight compared to the current focus.
   */
  function _highlight(direction) {
    if (direction === DIR_NEXT) {
      _model.setIndex(_model.getIndex() + 1);
    } else if (direction === DIR_PREV) {
      _model.setIndex(_model.getIndex() - 1);
    }

    const index = _model.getIndex();
    if (index > -1) {
      let filteredIndex = index;
      const filterIndices = _model.getFilterIndices();
      if (filterIndices.length > 0) {
        filteredIndex = filterIndices[index];
      }
      const option = _model.getOption(filteredIndex);
      const value = option.value;
      const item = _optionsDom.querySelector('[data-option="' + value + '"]');
      const input = item.querySelector('input');

      _isBlurSkipped = true;
      input.focus();
    } else {
      _isBlurSkipped = false;
      _searchDom.focus();
    }
  }

  /**
   * Resets the search input and filtering.
   */
  function _resetSearch() {
    _searchDom.value = '';
    _resetFilter();
  }

  /**
   * This passes the click of the selected item button down to the label it
   * contains. This is only required for browsers (IE11) that prevent the
   * click of a selected item from cascading from the button down to the label
   * it contains.
   * @param {MouseEvent} event - The mouse click event object.
   */
  function _selectionClickHandler(event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      event.preventDefault();
      target.removeEventListener('click', _selectionClickHandler);
      target.querySelector('label').click();
    }
  }

  /**
   * @param {KeyboardEvent} event - The key down event object.
   */
  function _selectionKeyDownHandler(event) {
    if (event.key === KEY_SPACE || event.key === KEY_RETURN) {
      const label = event.target.querySelector('label');
      const checkbox = _optionsDom.querySelector(
        '#' + label.getAttribute('for'),
      );
      checkbox.click();
    }
  }

  /**
   * Create a unique ID based on a select's option HTML element.
   * @param {HTMLElement} option - A option HTML element.
   * @returns {string} A hopefully unique ID.
   */
  function _getOptionId(option) {
    /* Replace any character that is not a word character with a dash.
       https://regex101.com/r/ShHmRw/1
    */
    return (
      _name + '-' + option.value.trim().replace(/[^\w]/g, '-').toLowerCase()
    );
  }

  /**
   * @param {HTMLElement} selectionsDom - The UL item to inject list item into.
   * @param {HTMLElement} option - The OPTION item to extract content from.
   */
  function _createSelectedItem(selectionsDom, option) {
    const optionId = _getOptionId(option);
    const selectionsItemDom = create('li', null, {
      'data-option': option.value,
    });

    const selectionsItemLabelDom = create('button', selectionsItemDom, {
      type: 'button',
      class: 'a-tag-filter',
      innerHTML:
        '<label for=' + optionId + '>' + option.text + closeIcon + '</label>',
    });

    selectionsDom.appendChild(selectionsItemDom);

    selectionsItemLabelDom.addEventListener('click', _selectionClickHandler);
    selectionsItemLabelDom.addEventListener(
      'keydown',
      _selectionKeyDownHandler,
    );
  }

  /**
   * Tracks a user's selections and updates the list in the dom.
   * @param {number} optionIndex - The index position of the chosen option.
   */
  function _updateSelections(optionIndex) {
    const option =
      _model.getOption(optionIndex) || _model.getOption(_model.getIndex());

    if (option) {
      if (option.checked) {
        if (_optionsDom.classList.contains('u-max-selections')) {
          _optionsDom.classList.remove('u-max-selections');
        }

        const dataOptionSel = '[data-option="' + option.value + '"]';
        const _selectionsItemDom = _selectionsDom.querySelector(dataOptionSel);

        // If the <Tag> exists
        if (typeof _selectionsItemDom !== 'undefined' && _selectionsItemDom) {
          _selectionsDom?.removeChild(_selectionsItemDom);
        }
      }
      // Else, if we are configured to display <Tag>s then render them
      else if (_config?.renderTags && _selectionsDom) {
        _createSelectedItem(_selectionsDom, option);
      }
      _model.toggleOption(optionIndex);

      if (_model.isAtMaxSelections()) {
        _optionsDom.classList.add('u-max-selections');
      }

      _instance.dispatchEvent('selectionsupdated', { target: _instance });
    }

    _model.resetIndex();
    _isBlurSkipped = false;

    if (_fieldsetDom.getAttribute('aria-hidden') === 'false') {
      _searchDom.focus();
    }
  }

  /**
   * Handles the functions to trigger on the checkbox change.
   * @param {Event} event - The checkbox change event.
   */
  function _changeHandler(event) {
    _updateSelections(Number(event.target.getAttribute('data-index')));
    _resetSearch();
  }

  /**
   * Binds events to the search input, option list, and checkboxes.
   */
  function _bindEvents() {
    _headerDom.addEventListener('mousemove', function (event) {
      const target = event.target;
      // Check if we're over the down-arrow on the right side of the input.
      if (event.offsetX > target.offsetWidth - 35) {
        target.style.cursor = 'pointer';
      } else {
        target.style.cursor = 'auto';
      }
    });

    _headerDom.addEventListener('mouseup', function (event) {
      const target = event.target;

      /* Check if we're over the down-arrow on the right side of the input.
         Also check if the fieldset is open.
         35 = width of the arrow on the right of the search input.
         140 = the max-height value set in multiselect.src for the fieldset.
      */
      if (
        event.offsetX > target.offsetWidth - 35 &&
        _fieldsetDom.offsetHeight === 140
      ) {
        _searchDom.blur();
      }
    });

    _searchDom.addEventListener('input', function () {
      _evaluate(this.value);
    });

    _searchDom.addEventListener('focus', function () {
      if (_fieldsetDom.getAttribute('aria-hidden') === 'true') {
        expand();
      }
    });

    _searchDom.addEventListener('blur', function () {
      if (
        !_isBlurSkipped &&
        _fieldsetDom.getAttribute('aria-hidden') === 'false'
      ) {
        collapse();
      }
    });

    _searchDom.addEventListener('keydown', function (event) {
      const key = event.key;

      if (
        _fieldsetDom.getAttribute('aria-hidden') === 'true' &&
        key !== KEY_TAB
      ) {
        expand();
      }

      if (key === KEY_RETURN) {
        event.preventDefault();
        _highlight(DIR_NEXT);
      } else if (key === KEY_ESCAPE) {
        _resetSearch();
        collapse();
      } else if (key === KEY_DOWN) {
        _highlight(DIR_NEXT);
      } else if (
        key === KEY_TAB &&
        !event.shiftKey &&
        _fieldsetDom.getAttribute('aria-hidden') === 'false'
      ) {
        collapse();
      }
    });

    _optionsDom.addEventListener('mousedown', function () {
      _isBlurSkipped = true;
    });

    _optionsDom.addEventListener('keydown', function (event) {
      const key = event.key;
      const target = event.target;
      const checked = target.checked;

      if (key === KEY_RETURN) {
        event.preventDefault();

        /* Programmatically checking a checkbox does not fire a change event
        so we need to manually create an event and dispatch it from the input.
        */
        target.checked = !checked;
        const evt = new Event('change', { bubbles: false, cancelable: true });
        target.dispatchEvent(evt);
      } else if (key === KEY_ESCAPE) {
        _searchDom.focus();
        collapse();
      } else if (key === KEY_UP) {
        _highlight(DIR_PREV);
      } else if (key === KEY_DOWN) {
        _highlight(DIR_NEXT);
      }
    });

    _fieldsetDom.addEventListener('mousedown', function (event) {
      if (event.target.tagName === 'LABEL') {
        _isBlurSkipped = true;
      }
    });

    const inputs = _optionsDom.querySelectorAll('input');
    for (let i = 0, len = inputs.length; i < len; i++) {
      inputs[i].addEventListener('change', _changeHandler);
    }

    // Add event listeners to any selections that are present at page load.
    const labelButtons = _selectionsDom.querySelectorAll('button');
    for (let j = 0, len = labelButtons.length; j < len; j++) {
      labelButtons[j].addEventListener('click', _selectionClickHandler);
      labelButtons[j].addEventListener('keydown', _selectionKeyDownHandler);
    }
  }

  /**
   * Populates and injects the markup for the custom multiselect.
   * @returns {HTMLElement} Newly created <div> element to hold the multiselect.
   */
  function _populateMarkup() {
    // Add a container for our markup
    _containerDom = document.createElement('div');
    _containerDom.className = BASE_CLASS;

    // Create all our markup but wait to manipulate the DOM just once
    _selectionsDom = create('ul', null, {
      className: 'm-tag-group',
    });

    _headerDom = create('header', _containerDom, {
      className: BASE_CLASS + '__header',
    });

    _searchDom = create('input', _headerDom, {
      className: BASE_CLASS + '__search ' + TEXT_INPUT_CLASS,
      type: 'text',
      placeholder: _placeholder || 'Select up to five',
      id: _dom.id,
      autocomplete: 'off',
    });

    _fieldsetDom = create('fieldset', _containerDom, {
      className: BASE_CLASS + '__fieldset u-invisible',
      'aria-hidden': 'true',
    });

    let optionsClasses = BASE_CLASS + '__options';
    if (_model.isAtMaxSelections()) {
      optionsClasses += ' u-max-selections';
    }

    _optionsDom = create('ul', _fieldsetDom, {
      className: optionsClasses,
    });

    let option;
    let optionId;
    let isChecked;
    for (let i = 0, len = _options.length; i < len; i++) {
      option = _options[i];
      optionId = _getOptionId(option);
      isChecked = _model.getOption(i).checked;
      const optionsItemDom = create('li', _optionsDom, {
        'data-option': option.value,
        'data-cy': 'multiselect-option',
        class: 'm-form-field m-form-field--checkbox',
      });

      create('input', optionsItemDom, {
        id: optionId,
        // Type must come before value or IE fails
        type: 'checkbox',
        value: option.value,
        name: _name,
        class: CHECKBOX_INPUT_CLASS + ' ' + BASE_CLASS + '__checkbox',
        checked: isChecked,
        'data-index': i,
      });

      create('label', optionsItemDom, {
        for: optionId,
        textContent: option.text,
        className: BASE_CLASS + '__label a-label',
      });

      _optionItemDoms.push(optionsItemDom);

      // Create <Tag> if enabled
      if (isChecked && _config?.renderTags) {
        _createSelectedItem(_selectionsDom, option);
      }
    }

    // Write our new markup to the DOM.
    _containerDom.insertBefore(_selectionsDom, _headerDom);
    _dom.parentNode.insertBefore(_containerDom, _dom);
    _containerDom.appendChild(_dom);

    return _containerDom;
  }

  /**
   * Set up and create the multiselect.
   * @param {object} multiselectConfig - Multiselect configuration options
   * @returns {Multiselect} An instance.
   */
  function init(multiselectConfig = DEFAULT_CONFIG) {
    if (!setInitFlag(_dom)) {
      return this;
    }

    if (isMobileUserAgent()) {
      return this;
    }

    _instance = this;
    _name = _dom.name || _dom.id;
    _placeholder = _dom.getAttribute('placeholder');
    _options = _dom.options || [];

    // Allow devs to pass the config settings they want and not worry about the rest
    _config = { ...DEFAULT_CONFIG, ...multiselectConfig };

    if (_options.length > 0) {
      // Store underlying model so we can expose it externally
      _model = new MultiselectModel(_options, _name, _config).init();
      const newDom = _populateMarkup();

      /* Removes <select> element,
         and re-assign DOM reference. */
      _dom.parentNode.removeChild(_dom);
      _dom = newDom;

      /* We need to set init flag again since we've created a new <div>
         to replace the <select> element. */
      setInitFlag(_dom);

      _bindEvents();
    }

    return this;
  }

  /**
   * Allow external access to the underlying model for integration/customization when used in other applications.
   * @returns {object} Model
   */
  function getModel() {
    return _model;
  }

  // Attach public events.
  this.init = init;
  this.expand = expand;
  this.collapse = collapse;

  const eventObserver = new EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;
  this.getModel = getModel;
  this.updateSelections = _updateSelections;
  this.selectionClickHandler = _selectionClickHandler;
  this.selectionKeyDownHandler = _selectionKeyDownHandler;

  return this;
}

Multiselect.BASE_CLASS = BASE_CLASS;
Multiselect.init = (config) =>
  instantiateAll(`.${BASE_CLASS}`, Multiselect, undefined, config);

export { Multiselect, MultiselectStyles };
