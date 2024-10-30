import {
  add as addDataHook,
  checkDom,
  instantiateAll,
  setInitFlag,
  FlyoutMenu,
  MaxHeightTransition,
  EventObserver,
  MOBILE,
  viewportIsIn,
} from '../../utilities';

import * as SummaryStyles from './summary.scss';

const BASE_CLASS = 'o-summary';

/**
 * Summary
 * @class
 * @classdesc Initializes a new Summary organism.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the organism.
 * @returns {Summary} An instance.
 */
function Summary(element) {
  const _dom = checkDom(element, BASE_CLASS);
  const _hasMobileModifier = _dom.classList.contains(`${BASE_CLASS}--mobile`);
  const _contentDom = _dom.querySelector(`.${BASE_CLASS}__content`);
  const _btnDom = _dom.querySelector(`.${BASE_CLASS}__btn`);
  let _transition;
  let _flyout;

  // Whether this instance's behaviors are suspended or not.
  let _suspended;

  /**
   * NOTE: Init won't work if it's called after the page has been loaded,
   * since it depends on the `load` event fired by the browser.
   * @returns {Summary} An instance.
   */
  function init() {
    if (!setInitFlag(_dom)) {
      return this;
    }

    // Don't initialize the Summary till the page has loaded, so we can have
    // an accurate idea of its height.
    window.addEventListener('load', _pageLoadHandler);

    return this;
  }

  /**
   * The page (content + CSS) has loaded.
   */
  function _pageLoadHandler() {
    window.removeEventListener('load', _pageLoadHandler);

    _suspended = !_shouldSuspend();

    // Add FlyoutMenu behavior data-js-hooks.
    addDataHook(_dom, 'behavior_flyout-menu');
    addDataHook(_contentDom, 'behavior_flyout-menu_content');
    addDataHook(_btnDom, 'behavior_flyout-menu_trigger');

    _flyout = new FlyoutMenu(_dom, false);
    _transition = new MaxHeightTransition(_contentDom);
    _transition.init(
      _suspended
        ? MaxHeightTransition.CLASSES.MH_SUMMARY
        : MaxHeightTransition.CLASSES.MH_DEFAULT,
    );
    _flyout.setTransition(
      _transition,
      _transition.maxHeightSummary,
      _transition.maxHeightDefault,
    );
    _flyout.addEventListener('triggerclick', _triggerClickHandler);
    _flyout.init();

    _resizeHandler();

    window.addEventListener('resize', _resizeHandler);
    // Pipe window resize handler into orientation change on supported devices.
    if ('onorientationchange' in window) {
      window.addEventListener('orientationchange', _resizeHandler);
    }

    _dom.addEventListener('focusin', _focusInHandler);

    /* When we click inside the content area we may be changing the size,
       such as when a video player expands on being clicked.
       So, let's refresh the transition to recalculate the max-height,
       just in case. */
    _contentDom.addEventListener('click', _contentClicked);
  }

  /**
   * Handling tabbing into the content area that is hidden.
   * If the focus goes onto a focusable element within the content area,
   * we'll act like the summary expansion button was clicked.
   * @param {Event} evt - The focus event.
   */
  function _focusInHandler(evt) {
    if (!_suspended && evt.target !== _btnDom) {
      _btnDom.click();
      _dom.removeEventListener('focusin', _focusInHandler);
    }
  }

  /**
   * Handler for when the content area is clicked.
   * Refresh the transition to recalculate the max-height.
   * @param {MouseEvent} evt - the mouse event object.
   */
  function _contentClicked(evt) {
    /* We don't need to refresh if a link was clicked as we'll be navigating
       to another page. */
    if (evt.target.tagName !== 'A' && _flyout.isExpanded()) {
      _transition.refresh();
    }
  }

  /**
   * Handle resizing of the window,
   * suspends or resumes the mobile or desktop behaviors.
   */
  function _resizeHandler() {
    if (_shouldSuspend()) {
      _suspend();
    } else {
      _resume();
    }
  }

  /**
   * @returns {boolean} True if this should be suspended, false otherwise.
   */
  function _shouldSuspend() {
    /* Bail out of initializatiion if the height of the summary's content
       is less than our summary height of 5.5ems
       16 * 5.5 = 88
       See https://github.com/cfpb/design-system/blob/72623270013f2ad08dbe92b5b709ed2b434ee41e/packages/cfpb-atomic-component/src/utilities/transition/transition.less#L84
    */
    return (
      (_hasMobileModifier && !viewportIsIn(MOBILE)) ||
      _contentDom.scrollHeight <= 88
    );
  }

  /**
   * Handle click of flyout.
   */
  function _triggerClickHandler() {
    _flyout.addEventListener('expandend', _expandEndHandler);
  }

  /**
   * After the summary opens, remove the "read more" button.
   */
  function _expandEndHandler() {
    _hideButton();
    window.removeEventListener('resize', _resizeHandler);
    window.removeEventListener('orientationchange', _resizeHandler);
    _flyout.removeEventListener('expandend', _expandEndHandler);
    _flyout.suspend();
    _transition.remove();
  }

  /**
   *
   */
  function _showButton() {
    _btnDom.classList.remove('u-hidden');
  }

  /**
   *
   */
  function _hideButton() {
    _btnDom.classList.add('u-hidden');
  }

  /**
   * Add events necessary for the desktop menu behaviors.
   * @returns {boolean} Whether it has successfully been resumed or not.
   */
  function _resume() {
    if (_suspended) {
      _flyout.collapse();
      _transition.animateOn();
      _showButton();

      _suspended = false;
    }

    return !_suspended;
  }

  /**
   * Remove events necessary for the desktop menu behaviors.
   * @returns {boolean} Whether it has successfully been suspended or not.
   */
  function _suspend() {
    if (!_suspended) {
      _transition.animateOff();
      _flyout.expand();
      _hideButton();

      _suspended = true;
    }

    return _suspended;
  }

  // Attach public events.
  const eventObserver = new EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  this.init = init;

  return this;
}

Summary.BASE_CLASS = BASE_CLASS;
Summary.init = (scope) => instantiateAll(`.${BASE_CLASS}`, Summary, scope);

export { Summary, SummaryStyles };
