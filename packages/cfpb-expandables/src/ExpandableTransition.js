// Required modules.
const Events = require( '@cfpb/cfpb-atomic-component/src/mixins/Events.js' );
const BaseTransition = require( '@cfpb/cfpb-atomic-component/src/utilities/transition/BaseTransition' );

// Exported constants.
const CLASSES = {
  BASE_CLASS:   'o-expandable_content__transition',
  EXPANDED:     'o-expandable_content__expanded',
  COLLAPSED:    'o-expandable_content__collapsed',
  OPEN_DEFAULT: 'o-expandable_content__onload-open'
};

/* eslint-disable max-lines-per-function */
/**
 * ExpandableTransition
 * @class
 *
 * @classdesc Initializes new ExpandableTransition behavior.
 *
 * @param {HTMLNode} element - DOM element to apply move transition to.
 * @returns {ExpandableTransition} An instance.
 */
function ExpandableTransition( element ) {
  const _baseTransition = new BaseTransition( element, CLASSES );
  let previousHeight;

  /**
   * @returns {ExpandableTransition} An instance.
   */
  function init() {
    _baseTransition.init();
    _baseTransition.addEventListener(
      BaseTransition.END_EVENT,
      _transitionComplete.bind( this )
    );

    if ( element.classList.contains( CLASSES.OPEN_DEFAULT ) ) {
      this.expand();
    } else {
      this.collapse();
    }

    return this;
  }

  /**
   * Handle the end of a transition.
   */
  function _transitionComplete() {
    if ( element.classList.contains( CLASSES.EXPANDED ) ) {
      this.dispatchEvent( 'expandEnd', { target: this } );

      if ( element.scrollHeight > previousHeight ) {
        element.style.maxHeight = element.scrollHeight + 'px';
      }
    } else if ( element.classList.contains( CLASSES.COLLAPSED ) ) {
      this.dispatchEvent( 'collapseEnd', { target: this } );
    }
  }

  /**
   * Toggle the expandable
   * @returns {ExpandableTransition} An instance.
   */
  function toggleExpandable() {
    if ( element.classList.contains( CLASSES.COLLAPSED ) ) {
      this.expand();
    } else {
      this.collapse();
    }

    return this;
  }

  /**
   * Collapses the expandable content
   * @returns {ExpandableTransition} An instance.
   */
  function collapse() {
    this.dispatchEvent( 'collapseBegin', { target: this } );

    previousHeight = element.scrollHeight;
    element.style.maxHeight = '0';
    _baseTransition.applyClass( CLASSES.COLLAPSED );

    return this;
  }

  /**
   * Expands the expandable content
   * @returns {ExpandableTransition} An instance.
   */
  function expand() {
    this.dispatchEvent( 'expandBegin', { target: this } );

    if ( !previousHeight || element.scrollHeight > previousHeight ) {
      previousHeight = element.scrollHeight;
    }

    element.style.maxHeight = previousHeight + 'px';
    _baseTransition.applyClass( CLASSES.EXPANDED );

    return this;
  }

  // Attach public events.
  this.addEventListener = Events.on;
  this.dispatchEvent = Events.trigger;
  this.removeEventListener = Events.off;

  this.animateOff = _baseTransition.animateOff;
  this.animateOn = _baseTransition.animateOn;
  this.halt = _baseTransition.halt;
  this.isAnimated = _baseTransition.isAnimated;
  this.setElement = _baseTransition.setElement;
  this.remove = _baseTransition.remove;

  this.init = init;
  this.toggleExpandable = toggleExpandable;
  this.collapse = collapse;
  this.expand = expand;

  return this;
}
/* eslint-enable max-lines-per-function */

// Public static properties.
ExpandableTransition.CLASSES = CLASSES;

module.exports = ExpandableTransition;
