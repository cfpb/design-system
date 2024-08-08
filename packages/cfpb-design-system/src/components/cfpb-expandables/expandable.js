/* ==========================================================================
   Expandable Organism
   ========================================================================== */

import {
  add as addDataHook,
  checkDom,
  setInitFlag,
  instantiateAll,
  MaxHeightTransition,
  EventObserver,
  FlyoutMenu,
} from '../../utilities';

import * as ExpandableStyles from './expandable.scss';

const BASE_CLASS = 'o-expandable';

/**
 * Expandable
 * @class
 * @classdesc Initializes a new Expandable molecule.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the molecule.
 * @returns {Expandable} An instance.
 */
function Expandable(element) {
  // Internal vars.
  const _dom = checkDom(element, BASE_CLASS);
  let _targetDom;
  let _contentDom;
  let _labelDom;

  // Animation vars.
  let _transition;
  let _flyout;

  /**
   * Set up and create the multiselect.
   * @returns {Expandable} An instance.
   */
  function init() {
    if (!setInitFlag(_dom)) {
      return this;
    }

    _targetDom = _dom.querySelector(`.${BASE_CLASS}__header`);
    _contentDom = _dom.querySelector(`.${BASE_CLASS}__content`);
    _labelDom = _dom.querySelector(`.${BASE_CLASS}__label`);

    const isExpanded = _dom.classList.contains(`${BASE_CLASS}--onload-open`);

    // Add behavior hooks.
    addDataHook(_dom, 'behavior_flyout-menu');
    addDataHook(_targetDom, 'behavior_flyout-menu_trigger');
    addDataHook(_contentDom, 'behavior_flyout-menu_content');

    // If it's expanded we don't set an initial height,
    // as it will be calculated internally.
    const initialClass = isExpanded
      ? MaxHeightTransition.CLASSES.MH_DEFAULT
      : MaxHeightTransition.CLASSES.MH_ZERO;
    _transition = new MaxHeightTransition(_contentDom).init(initialClass);

    // Create root menu.
    _flyout = new FlyoutMenu(_dom);

    _flyout.setTransition(
      _transition,
      _transition.maxHeightZero,
      _transition.maxHeightDefault,
    );

    _flyout.init(isExpanded);

    // Add events.
    _flyout.addEventListener('expandbegin', () => {
      _contentDom.classList.remove('u-hidden');
      this.dispatchEvent('expandbegin', { target: this });
    });
    _flyout.addEventListener('collapseend', () => {
      _contentDom.classList.add('u-hidden');
    });

    return this;
  }

  /**
   * @returns {string} The expandable label text.
   */
  function getLabelText() {
    return _labelDom.textContent.trim();
  }

  // Attach public events.
  this.init = init;
  this.expand = () => _flyout.expand();
  this.collapse = () => _flyout.collapse();
  this.isExpanded = () => _flyout.isExpanded();
  this.refresh = () => _flyout.getTransition().refresh();
  this.getLabelText = getLabelText;

  const eventObserver = new EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  return this;
}

Expandable.BASE_CLASS = BASE_CLASS;
Expandable.init = (scope) =>
  instantiateAll(`.${Expandable.BASE_CLASS}`, Expandable, scope);

export { Expandable, ExpandableStyles };
