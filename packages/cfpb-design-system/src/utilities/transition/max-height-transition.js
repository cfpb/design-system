import { BaseTransition } from '../transition/base-transition.js';
import { EventObserver } from '../event-observer.js';

// Exported constants.
const CLASSES = {
  CSS_PROPERTY: 'max-height',
  BASE_CLASS: 'u-max-height-transition',
  MH_DEFAULT: 'u-max-height-default',
  MH_SUMMARY: 'u-max-height-summary',
  MH_DYNAMIC: 'u-max-height-dynamic',
  MH_DYNAMIC_UP: 'u-max-height-dynamic--up',
  MH_DYNAMIC_DOWN: 'u-max-height-dynamic--down',
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

    // Revert to default value to clear any value used in "up" direction.
    element.style.bottom = 'auto';
  }

  /**
   * @returns {{rect: number, distanceToBottom: number, distanceToTop: number, dir: string}}
   *   Useful metrics for presenting a popup.
   */
  function calcPosition() {
    const rect = element.getBoundingClientRect();
    const distanceToBottom = window.innerHeight - rect.bottom;
    const distanceToTop = rect.top;
    const dir = distanceToBottom <= 140 ? 'up' : 'down';

    return {
      rect,
      distanceToBottom,
      distanceToTop,
      dir,
    };
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
    refresh();
    _baseTransition.applyClass(CLASSES.MH_SUMMARY);

    _previousHeight = element.scrollHeight;

    return this;
  }

  /**
   * Collapses the max-height to just a summary height.
   * @returns {MaxHeightTransition} An instance.
   */
  function maxHeightDynamic() {
    refresh();
    const position = calcPosition();

    let minHeight = 30;

    const borderWidth = 2;

    let newHeight =
      element.scrollHeight + minHeight < position.distanceToBottom
        ? `${element.scrollHeight + borderWidth}px`
        : `${position.distanceToBottom - minHeight}px`;

    if (position.dir === 'up') {
      const parentHeight = element.parentElement.offsetHeight;
      minHeight += parentHeight;
      element.style.bottom = `${parentHeight - borderWidth}px`;
      newHeight =
        element.scrollHeight + minHeight < position.distanceToTop
          ? `${element.scrollHeight + borderWidth}px`
          : `${position.distanceToTop - minHeight}px`;
    }

    element.style.maxHeight = newHeight;

    _baseTransition.applyClass(CLASSES.MH_DYNAMIC);

    // `applyClass` flushes the classes, so we can add these direct.
    if (position.dir === 'up')
      _baseTransition.applyClass(CLASSES.MH_DYNAMIC_UP);
    else _baseTransition.applyClass(CLASSES.MH_DYNAMIC_DOWN);

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
  this.maxHeightDynamic = maxHeightDynamic;

  return this;
}

// Public static properties.
MaxHeightTransition.CLASSES = CLASSES;

export { MaxHeightTransition };
