import { BaseTransition, EventObserver } from '@cfpb/cfpb-design-system';

// Exported constants.
const CLASSES = {
  CSS_PROPERTY: 'max-height',
  BASE_CLASS: 'u-max-height-transition',
  MH_DEFAULT: 'u-max-height-default',
  MH_SUMMARY: 'u-max-height-summary',
  MH_ZERO: 'u-max-height-zero',
};

/**
 * MoveTransition
 * @class
 * @classdesc Initializes new MoveTransition behavior.
 * @param {HTMLElement} element - DOM element to apply transition to.
 * @returns {MaxHeightTransition} An instance.
 */
function MaxHeightTransition(element) {
  const eventObserver = new EventObserver();
  const _baseTransition = new BaseTransition(element, CLASSES, this);
  let _previousHeight = 0;

  /**
   * Refresh the max height set on the element.
   * This may be useful if resizing the window and the content height changes.
   */
  function refresh() {
    const elmHeight = element.scrollHeight;
    const newHeight = elmHeight + 'px';
    element.style.maxHeight = newHeight;
  }

  /**
   * The whole page has loaded,
   * including all dependent resources such as stylesheets and images.
   */
  function _pageLoaded() {
    window.removeEventListener('load', _pageLoaded);
    refresh();
  }

  /**
   * @param {Function} initialClass - The initial state for this transition.
   * @returns {MaxHeightTransition} An instance.
   */
  function init(initialClass) {
    _baseTransition.init(initialClass);

    /*
    The scrollHeight of an element may be incorrect if the page hasn't
    fully loaded yet, so we listen for that to happen before calculating
    the element max-height.
    */
    window.addEventListener('load', _pageLoaded);

    /*
    The scrollHeight of an element may change on page load.
    */
    window.addEventListener('resize', () => {
      refresh();
    });

    return this;
  }

  /**
   * Reset the max-height to the default size.
   * @returns {MaxHeightTransition} An instance.
   */
  function maxHeightDefault() {
    refresh();
    _baseTransition.applyClass(CLASSES.MH_DEFAULT);

    if (!_previousHeight || element.scrollHeight > _previousHeight) {
      _previousHeight = element.scrollHeight;
    }

    return this;
  }

  /**
   * Collapses the max-height to just a summary height.
   * @returns {MaxHeightTransition} An instance.
   */
  function maxHeightSummary() {
    _baseTransition.applyClass(CLASSES.MH_SUMMARY);

    _previousHeight = element.scrollHeight;

    return this;
  }

  /**
   * Collapses thte max-height completely.
   * @returns {MaxHeightTransition} An instance.
   */
  function maxHeightZero() {
    _baseTransition.applyClass(CLASSES.MH_ZERO);

    _previousHeight = element.scrollHeight;

    return this;
  }

  /**
   * Remove style attribute.
   * Remove all transition classes, if transition is initialized.
   * @returns {boolean}
   *   True, if the element's CSS classes were touched, false otherwise.
   */
  function remove() {
    element.style.maxHeight = '';
    return _baseTransition.remove();
  }

  // Attach public events.
  this.addEventListener = eventObserver.addEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;
  this.removeEventListener = eventObserver.removeEventListener;

  this.animateOff = _baseTransition.animateOff;
  this.animateOn = _baseTransition.animateOn;
  this.halt = _baseTransition.halt;
  this.isAnimated = _baseTransition.isAnimated;
  this.setElement = _baseTransition.setElement;
  this.refresh = refresh;
  this.remove = remove;

  this.init = init;
  this.maxHeightDefault = maxHeightDefault;
  this.maxHeightSummary = maxHeightSummary;
  this.maxHeightZero = maxHeightZero;

  return this;
}

// Public static properties.
MaxHeightTransition.CLASSES = CLASSES;

export { MaxHeightTransition };
