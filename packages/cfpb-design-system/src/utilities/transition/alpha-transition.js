import { BaseTransition, EventObserver } from '@cfpb/cfpb-design-system';

// Exported constants.
const CLASSES = {
  CSS_PROPERTY: 'opacity',
  BASE_CLASS: 'u-alpha-transition',
  ALPHA_100: 'u-alpha-100',
  ALPHA_0: 'u-alpha-0',
};

/**
 * AlphaTransition
 * @class
 * @classdesc Initializes new AlphaTransition behavior.
 * @param {HTMLElement} element - DOM element to apply opacity transition to.
 * @returns {AlphaTransition} An instance.
 */
function AlphaTransition(element) {
  const eventObserver = new EventObserver();
  const _baseTransition = new BaseTransition(element, CLASSES, this);

  /**
   * @param {Function} initialClass - The initial state for this transition.
   * @returns {AlphaTransition} An instance.
   */
  function init(initialClass) {
    _baseTransition.init(initialClass);

    return this;
  }

  /**
   * Fade to 100% by applying a utility alpha class.
   * @returns {AlphaTransition} An instance.
   */
  function fadeIn() {
    _baseTransition.applyClass(CLASSES.ALPHA_100);

    return this;
  }

  /**
   * Fade to nothing by applying a utility alpha class.
   * @returns {AlphaTransition} An instance.
   */
  function fadeOut() {
    _baseTransition.applyClass(CLASSES.ALPHA_0);

    return this;
  }

  // Attach public events.
  this.addEventListener = eventObserver.addEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;
  this.removeEventListener = eventObserver.removeEventListener;

  this.animateOff = _baseTransition.animateOff;
  this.animateOn = _baseTransition.animateOn;
  this.halt = _baseTransition.halt;
  this.isAnimated = _baseTransition.isAnimated;
  this.remove = _baseTransition.remove;
  this.setElement = _baseTransition.setElement;

  this.fadeIn = fadeIn;
  this.fadeOut = fadeOut;
  this.init = init;

  return this;
}

// Public static properties.
AlphaTransition.CLASSES = CLASSES;

export { AlphaTransition };
