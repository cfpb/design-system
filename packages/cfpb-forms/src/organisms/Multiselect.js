// Required modules.
import { checkDom, setInitFlag } from '@cfpb/cfpb-atomic-component/src/utilities/atomic-helpers.js';
import EventObserver from '@cfpb/cfpb-atomic-component/src/mixins/EventObserver.js';
import MultiselectModel from './MultiselectModel.js';
import MultiselectUtils from './MultiselectUtils.js';

import closeIcon from '@cfpb/cfpb-icons/src/icons/close.svg';

const BASE_CLASS = 'o-multiselect';

/**
 * Multiselect
 * @class
 *
 * @classdesc Initializes a new Multiselect molecule.
 *
 * @param {HTMLNode} element
 *   The DOM element within which to search for the molecule.
 * @returns {Multiselect} An instance.
 */
function Multiselect( element ) { // eslint-disable-line max-statements

  const LIST_CLASS = 'm-list';
  const CHECKBOX_INPUT_CLASS = 'a-checkbox';
  const TEXT_INPUT_CLASS = 'a-text-input';

  /* TODO: As the multiselect is developed further
     explore whether it should use an updated
     class name or data-* attribute in the
     markup so that it doesn't apply globally by default. */
  element.classList.add( BASE_CLASS );

  // Constants for direction.
  const DIR_PREV = 'prev';
  const DIR_NEXT = 'next';

  // Constants for key binding.
  const KEY_RETURN = 13;
  const KEY_SPACE = 32;
  const KEY_ESCAPE = 27;
  const KEY_UP = 38;
  const KEY_DOWN = 40;
  const KEY_TAB = 9;

  // Internal vars.
  let _dom = checkDom( element, BASE_CLASS );
  let _isBlurSkipped = false;
  let _name;
  let _placeholder;
  let _model;
  let _options;
  let _optionsData;

  // Markup elems, conver this to templating engine in the future.
  let _containerDom;
  let _selectionsDom;
  let _headerDom;
  let _searchDom;
  let _fieldsetDom;
  let _optionsDom;
  const _optionItemDoms = [];
  let _instance;

  /**
   * Set up and create the multiselect.
   * @returns {Multiselect} An instance.
   */
  function init() {
    if ( !setInitFlag( _dom ) ) {
      return this;
    }

    _instance = this;
    _name = _dom.name || _dom.id;
    _placeholder = _dom.getAttribute( 'placeholder' );
    _options = _dom.options || [];

    if ( _options.length > 0 ) {
      _model = new MultiselectModel( _options ).init();
      _optionsData = _model.getOptions();
      const newDom = _populateMarkup();

      /* Removes <select> element,
         and re-assign DOM reference. */
      _dom.parentNode.removeChild( _dom );
      _dom = newDom;

      /* We need to set init flag again since we've created a new <div>
         to replace the <select> element. */
      setInitFlag( _dom );

      _bindEvents();
    }

    return this;
  }

  /**
   * Expand the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  function expand() {
    _containerDom.classList.add( 'u-active' );
    _fieldsetDom.classList.remove( 'u-invisible' );
    _fieldsetDom.setAttribute( 'aria-hidden', false );
    _instance.dispatchEvent( 'expandBegin', { target: _instance } );

    return _instance;
  }

  /**
   * Collapse the multiselect drop down.
   * @returns {Multiselect} An instance.
   */
  function collapse() {
    _containerDom.classList.remove( 'u-active' );
    _fieldsetDom.classList.add( 'u-invisible' );
    _fieldsetDom.setAttribute( 'aria-hidden', true );
    _model.resetIndex();
    _instance.dispatchEvent( 'expandEnd', { target: _instance } );

    return _instance;
  }

  /**
   * Populates and injects the markup for the custom multiselect.
   * @returns {HTMLNode} Newly created <div> element to hold the multiselect.
   */
  function _populateMarkup() {
    // Add a container for our markup
    _containerDom = MultiselectUtils.create( 'div', {
      className: BASE_CLASS,
      around:    _dom
    } );

    // Create all our markup but wait to manipulate the DOM just once
    _selectionsDom = MultiselectUtils.create( 'ul', {
      className: LIST_CLASS + ' ' +
                 LIST_CLASS + '__unstyled ' +
                 BASE_CLASS + '_choices',
      inside:    _containerDom
    } );

    _headerDom = MultiselectUtils.create( 'header', {
      className: BASE_CLASS + '_header'
    } );

    _searchDom = MultiselectUtils.create( 'input', {
      className:    BASE_CLASS + '_search ' + TEXT_INPUT_CLASS,
      type:         'text',
      placeholder:  _placeholder || 'Choose up to five',
      inside:       _headerDom,
      id:           _name,
      autocomplete: 'off'
    } );

    _fieldsetDom = MultiselectUtils.create( 'fieldset', {
      'className':   BASE_CLASS + '_fieldset u-invisible',
      'aria-hidden': 'true'
    } );

    _optionsDom = MultiselectUtils.create( 'ul', {
      className: LIST_CLASS + ' ' +
                 LIST_CLASS + '__unstyled ' +
                 BASE_CLASS + '_options',
      inside:    _fieldsetDom
    } );

    _optionsData.forEach( function( option ) {
      const _optionsItemDom = MultiselectUtils.create( 'li', {
        'data-option': option.value,
        'class': 'm-form-field m-form-field__checkbox'
      } );

      const _checkboxId = _name + '-' + option.value;

      MultiselectUtils.create( 'input', {
        'id':     _checkboxId,
        // Type must come before value or IE fails
        'type':    'checkbox',
        'value':   option.value,
        'name':    _name,
        'class':   CHECKBOX_INPUT_CLASS + ' ' + BASE_CLASS + '_checkbox',
        'inside':  _optionsItemDom,
        'checked': option.checked
      } );

      MultiselectUtils.create( 'label', {
        'for':         _checkboxId,
        'textContent': option.text,
        'className':   BASE_CLASS + '_label a-label',
        'inside':      _optionsItemDom
      } );

      _optionItemDoms.push( _optionsItemDom );
      _optionsDom.appendChild( _optionsItemDom );

      if ( option.checked ) {
        _createSelectedItem( _selectionsDom, option );
      }
    } );

    // Write our new markup to the DOM.
    _containerDom.appendChild( _headerDom );
    _containerDom.appendChild( _fieldsetDom );

    return _containerDom;
  }

  /**
   * @param {HTMLNode} selectionsDom - The UL item to inject list item into.
   * @param {HTMLNode} option - The OPTION item to extract content from.
   */
  function _createSelectedItem( selectionsDom, option ) {
    const selectionsItemDom = MultiselectUtils.create( 'li', {
      'data-option': option.value
    } );

    const selectionsItemLabelDom = MultiselectUtils.create( 'button', {
      innerHTML: '<label for=' + option.value + '>' + option.text + closeIcon + '</label>',
      inside:    selectionsItemDom
    } );

    selectionsDom.appendChild( selectionsItemDom );
    selectionsItemDom.appendChild( selectionsItemLabelDom );

    selectionsItemLabelDom.addEventListener( 'keydown', _selectionKeyDownHandler );
  }

  /**
   * Highlights an option in the list.
   * @param {string} direction Direction to highlight compared to the
   *                           current focus.
   */
  function _highlight( direction ) {
    if ( direction === DIR_NEXT ) {
      _model.setIndex( _model.getIndex() + 1 );
    } else if ( direction === DIR_PREV ) {
      _model.setIndex( _model.getIndex() - 1 );
    }

    const index = _model.getIndex();
    if ( index > -1 ) {
      let filteredIndex = index;
      const filterIndices = _model.getFilterIndices();
      if ( filterIndices.length > 0 ) {
        filteredIndex = filterIndices[index];
      }
      const option = _model.getOption( filteredIndex );
      const value = option.value;
      const item = _optionsDom.querySelector( '[data-option="' + value + '"]' );
      const input = item.querySelector( 'input' );

      _isBlurSkipped = true;
      input.focus();
    } else {
      _isBlurSkipped = false;
      _searchDom.focus();
    }
  }

  /**
   * Tracks a user's selections and updates the list in the dom.
   * @param {string} value The value of the option the user has chosen.
   */
  function _updateSelections( value ) {
    const optionIndex = MultiselectUtils.indexOfObject(
      _optionsData,
      'value',
      value
    );
    const option = _optionsData[optionIndex] || _optionsData[_model.getIndex()];

    if ( option ) {
      if ( option.checked ) {
        if ( _optionsDom.classList.contains( 'u-max-selections' ) ) {
          _optionsDom.classList.remove( 'u-max-selections' );
        }

        const dataOptionSel = '[data-option="' + option.value + '"]';
        const _selectionsItemDom = _selectionsDom.querySelector( dataOptionSel );

        if ( typeof _selectionsItemDom !== 'undefined' ) {
          _selectionsDom.removeChild( _selectionsItemDom );
        }
      } else {
        _createSelectedItem( _selectionsDom, option );
      }
      _model.toggleOption( optionIndex );

      if ( _model.isAtMaxSelections() ) {
        _optionsDom.classList.add( 'u-max-selections' );
      }

      _instance.dispatchEvent( 'selectionsUpdated', { target: _instance } );
    }

    _model.resetIndex();
    _isBlurSkipped = false;

    if ( _fieldsetDom.getAttribute( 'aria-hidden' ) === 'false' ) {
      _searchDom.focus();
    }
  }

  /**
   * Evaluates the list of options based on the user's query in the
   * search input.
   * @param {string} value Text the user has entered in the search query.
   */
  function _evaluate( value ) {
    _resetFilter();
    _model.resetIndex();
    const matchedIndices = _model.filterIndices( value );
    _filterList( matchedIndices );
  }

  /**
   * Resets the search input and filtering.
   */
  function _resetSearch() {
    _searchDom.value = '';
    _resetFilter();
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
  function _filterList( filterIndices ) {
    if ( filterIndices.length > 0 ) {
      _filterMatches();
      return true;
    }

    _filterNoMatches();
    return false;
  }

  /**
   * Resets the filtered option list.
   */
  function _resetFilter() {
    _optionsDom.classList.remove( 'u-filtered', 'u-no-results' );

    for ( let i = 0, len = _optionsDom.children.length; i < len; i++ ) {
      _optionsDom.children[i].classList.remove( 'u-filter-match' );
    }

    _model.clearFilter();
  }

  /**
   * Set the filtered matched state.
   */
  function _filterMatches() {
    _optionsDom.classList.remove( 'u-no-results' );
    _optionsDom.classList.add( 'u-filtered' );

    let filteredIndices = _model.getLastFilterIndices();
    for ( let i = 0, len = filteredIndices.length; i < len; i++ ) {
      _optionItemDoms[filteredIndices[i]].classList.remove( 'u-filter-match' );
    }

    filteredIndices = _model.getFilterIndices();
    for ( let j = 0, len = filteredIndices.length; j < len; j++ ) {
      _optionItemDoms[filteredIndices[j]].classList.add( 'u-filter-match' );
    }
  }

  /**
   * Updates the list of options to show the user there
   * are no matching results.
   */
  function _filterNoMatches() {
    _optionsDom.classList.add( 'u-no-results' );
    _optionsDom.classList.remove( 'u-filtered' );
  }

  /**
   * Binds events to the search input, option list, and checkboxes.
   */
  function _bindEvents() {

    _searchDom.addEventListener( 'input', function() {
      _evaluate( this.value );
    } );

    _searchDom.addEventListener( 'focus', function() {
      if ( _fieldsetDom.getAttribute( 'aria-hidden' ) === 'true' ) {
        expand();
      }
    } );

    _searchDom.addEventListener( 'blur', function() {
      if ( !_isBlurSkipped &&
           _fieldsetDom.getAttribute( 'aria-hidden' ) === 'false' ) {
        collapse();
      }
    } );

    _searchDom.addEventListener( 'keydown', function( event ) {
      const key = event.keyCode;

      if ( _fieldsetDom.getAttribute( 'aria-hidden' ) === 'true' &&
            key !== KEY_TAB ) {
        expand();
      }

      if ( key === KEY_RETURN ) {
        event.preventDefault();
        _highlight( DIR_NEXT );
      } else if ( key === KEY_ESCAPE ) {
        _resetSearch();
        collapse();
      } else if ( key === KEY_DOWN ) {
        _highlight( DIR_NEXT );
      } else if ( key === KEY_TAB &&
                  !event.shiftKey &&
                  _fieldsetDom.getAttribute( 'aria-hidden' ) === 'false' ) {
        collapse();
      }
    } );

    _optionsDom.addEventListener( 'mousedown', function() {
      _isBlurSkipped = true;
    } );

    _optionsDom.addEventListener( 'keydown', function( event ) {
      const key = event.keyCode;
      const target = event.target;
      const checked = target.checked;

      if ( key === KEY_RETURN ) {
        event.preventDefault();

        /* Programmatically checking a checkbox does not fire a change event
        so we need to manually create an event and dispatch it from the input.
        */
        target.checked = !checked;
        const evt = document.createEvent( 'HTMLEvents' );
        evt.initEvent( 'change', false, true );
        target.dispatchEvent( evt );
      } else if ( key === KEY_ESCAPE ) {
        _searchDom.focus();
        collapse();
      } else if ( key === KEY_UP ) {
        _highlight( DIR_PREV );
      } else if ( key === KEY_DOWN ) {
        _highlight( DIR_NEXT );
      }
    } );

    _fieldsetDom.addEventListener( 'mousedown', function() {
      _isBlurSkipped = true;
    } );

    const inputs = _optionsDom.querySelectorAll( 'input' );
    for ( let i = 0, len = inputs.length; i < len; i++ ) {
      inputs[i].addEventListener( 'change', _changeHandler );
    }

    // Add event listeners to any selections that are present at page load.
    const labelButtons = _selectionsDom.querySelectorAll( 'button' );
    for ( let j = 0, len = labelButtons.length; j < len; j++ ) {
      labelButtons[j].addEventListener( 'keydown', _selectionKeyDownHandler );
    }
  }

  /**
   * @param {KeyEvent} event - The key down event object.
   */
  function _selectionKeyDownHandler( event ) {
    if ( event.keyCode === KEY_SPACE ||
         event.keyCode === KEY_RETURN ) {
      const label = event.target.querySelector( 'label' );
      const checkbox = _optionsDom.querySelector( '#' + label.getAttribute( 'for' ) );
      checkbox.click();
    }
  }

  /**
   * Handles the functions to trigger on the checkbox change.
   * @param   {Event} event The checkbox change event.
   */
  function _changeHandler( event ) {
    _updateSelections( event.target.value );
    _resetSearch();
  }

  // Attach public events.
  this.init = init;
  this.expand = expand;
  this.collapse = collapse;

  const eventObserver = new EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  return this;
}

Multiselect.BASE_CLASS = BASE_CLASS;

export default Multiselect;
