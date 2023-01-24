/* ==========================================================================
   Expandable Organism
   ========================================================================== */

import {
  checkDom,
  setInitFlag,
} from '@cfpb/cfpb-atomic-component/src/utilities/atomic-helpers.js';
import { add as addDataHook } from '@cfpb/cfpb-atomic-component/src/utilities/data-hook.js';
import MaxHeightTransition from '@cfpb/cfpb-atomic-component/src/utilities/transition/MaxHeightTransition.js';
import EventObserver from '@cfpb/cfpb-atomic-component/src/mixins/EventObserver.js';
import FlyoutMenu from '@cfpb/cfpb-atomic-component/src/utilities/behavior/FlyoutMenu.js';
import { instantiateAll } from '@cfpb/cfpb-atomic-component/src/utilities/atomic-helpers.js';

const BASE_CLASS = 'o-expandable';

/**
 * Expandable
 *
 * @class
 * @classdesc Initializes a new Expandable molecule.
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the molecule.
 * @returns {Expandable} An instance.
 */
function Expandable(element) {
  let _instance;

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
   *
   * @returns {Expandable} An instance.
   */
  function init() {
    if (!setInitFlag(_dom)) {
      return this;
    }

    _instance = this;

    _targetDom = _dom.querySelector(`.${BASE_CLASS}_target`);
    _contentDom = _dom.querySelector(`.${BASE_CLASS}_content`);
    _labelDom = _dom.querySelector(`.${BASE_CLASS}_label`);

    const isExpanded = _contentDom.classList.contains(
      `${BASE_CLASS}_content__onload-open`
    );

    // Add behavior hooks.
    addDataHook(_dom, 'behavior_flyout-menu');
    addDataHook(_targetDom, 'behavior_flyout-menu_trigger');
    addDataHook(_contentDom, 'behavior_flyout-menu_content');

    // Create root menu.
    _transition = new MaxHeightTransition(_contentDom).init();
    _flyout = new FlyoutMenu(_dom).init(isExpanded);

    _flyout.setExpandTransition(_transition, _transition.maxHeightDefault);
    _flyout.setCollapseTransition(_transition, _transition.maxHeightZero);

    // Add events.
    _flyout.addEventListener('expandBegin', () => {
      _instance.dispatchEvent('expandBegin', { target: _instance });
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
  this.getLabelText = getLabelText;

  const eventObserver = new EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  return this;
}

Expandable.BASE_CLASS = BASE_CLASS;
Expandable.init = () => instantiateAll(`.${Expandable.BASE_CLASS}`, Expandable);

export default Expandable;
