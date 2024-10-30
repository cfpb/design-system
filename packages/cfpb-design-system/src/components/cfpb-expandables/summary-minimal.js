import {
  add as addDataHook,
  checkDom,
  instantiateAll,
  setInitFlag,
  FlyoutMenu,
  MaxHeightTransition,
  EventObserver,
} from '../../utilities';

import * as SummaryMinimalStyles from './summary-minimal.scss';

const BASE_CLASS = 'o-summary-minimal';

/**
 * SummaryMinimal
 * @class
 * @classdesc Initializes a new SummaryMinimal organism.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the organism.
 * @returns {SummaryMinimal} An instance.
 */
function SummaryMinimal(element) {
  const _dom = checkDom(element, BASE_CLASS);
  const _contentDom = _dom.querySelector(`.${BASE_CLASS}__content`);
  const _btnDom = _dom.querySelector(`.${BASE_CLASS}__btn`);
  let _transition;
  let _flyout;

  /**
   * @returns {SummaryMinimal} An instance.
   */
  function init() {
    if (!setInitFlag(_dom)) {
      return this;
    }

    // Add FlyoutMenu behavior data-js-hooks.
    addDataHook(_dom, 'behavior_flyout-menu');
    addDataHook(_contentDom, 'behavior_flyout-menu_content');
    addDataHook(_btnDom, 'behavior_flyout-menu_trigger');

    // Don't initialize the SummaryMinimal till the page has loaded,
    // so we can have an accurate idea of its height.
    window.addEventListener('load', _pageLoadHandler);

    return this;
  }

  /**
   * The page (content + CSS) has loaded.
   */
  function _pageLoadHandler() {
    window.removeEventListener('load', _pageLoadHandler);

    _flyout = new FlyoutMenu(_dom, false);
    _transition = new MaxHeightTransition(_contentDom);
    _transition.init(MaxHeightTransition.CLASSES.MH_SUMMARY);
    _flyout.setTransition(
      _transition,
      _transition.maxHeightSummary,
      _transition.maxHeightDefault,
    );
    _flyout.init();

    _dom.addEventListener('focusin', _focusInHandler);

    /* When we click inside the content area we may be changing the size,
       such as when a video player expands on being clicked.
       So, let's refresh the transition to recalculate the max-height,
       just in case. */
    _contentDom.addEventListener('click', _contentClicked);

    _flyout.collapse();
    _transition.animateOn();
  }

  /**
   * Handling tabbing into the content area that is hidden.
   * If the focus goes onto a focusable element within the content area,
   * we'll act like the summary expansion button was clicked.
   * @param {Event} evt - The focus event.
   */
  function _focusInHandler(evt) {
    if (evt.target !== _btnDom) {
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

  // Attach public events.
  const eventObserver = new EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  this.init = init;

  return this;
}

SummaryMinimal.BASE_CLASS = BASE_CLASS;
SummaryMinimal.init = (scope) =>
  instantiateAll(`.${BASE_CLASS}`, SummaryMinimal, scope);

export { SummaryMinimal, SummaryMinimalStyles };
