import {
  BEHAVIOR_PREFIX,
  JS_HOOK,
  BaseTransition,
  EventObserver,
  checkBehaviorDom,
} from '@cfpb/cfpb-design-system';

const BASE_CLASS = BEHAVIOR_PREFIX + 'flyout-menu';
const SEL_PREFIX = '[' + JS_HOOK + '=' + BASE_CLASS;

/**
 * FlyoutMenu
 * @class
 * @classdesc Initializes new FlyoutMenu behavior.
 * Behaviors are functionality that can be shared between different pieces
 * of markup. They are not strictly atomic, though they likely are used
 * on atomic components.
 * As added JS behavior, this is added through HTML data-js-hook attributes.
 *
 * Structure is:
 * behavior_flyout-menu
 *   behavior_flyout-menu_trigger
 *   behavior_flyout-menu_content
 *     behavior_flyout-menu_trigger (optional)
 *
 * The second trigger is optional and may be used for a button in the content
 * area, which may obscure the first trigger.
 * The flyout can be triggered through a click of either trigger.
 * @param {HTMLElement} element - The DOM element to attach FlyoutMenu behavior.
 * @param {boolean} autoHideContent - Whether to add `hidden` attribute to
 *   content when it is collapsed.
 * @returns {FlyoutMenu} An instance.
 */
function FlyoutMenu(element, autoHideContent = true) {
  // Verify that the expected dom attributes are present.
  const _dom = checkBehaviorDom(element, BASE_CLASS);
  const _triggerDoms = _findTriggers(element);
  const _contentDom = checkBehaviorDom(element, BASE_CLASS + '_content');

  // Flyouts appear in one of four states.
  let _state = 0;
  const COLLAPSED = 0;
  const COLLAPSING = 1;
  const EXPANDING = 2;
  const EXPANDED = 3;

  let _transition;
  let _expandTransitionMethod;
  let _collapseTransitionMethod;

  // Binded events.
  // Needed to add and remove events to transitions.
  const _collapseEndBinded = _collapseEnd.bind(this);
  const _expandEndBinded = _expandEnd.bind(this);

  /* If this menu appears in a data source,
     this can be used to store the source.
     Examples include the index in an Array,
     a key in an Hash, or a node in a Tree. */
  let _data;

  // Whether this instance's behaviors are suspended or not.
  let _suspended = true;

  /* Event immediately preceeding mouseover is touchstart,
     if that event's present we'll want to ignore mouseover
     to avoid a mouseover and click immediately after each other. */
  let _touchTriggered = false;

  /**
   * Iterate over dom tree and find FlyoutMenu triggers.
   * We need to exclude the ones that are nested FlyoutMenus, since those
   * will be managed by their own instance of this class.
   * @param {HTMLElement} element - The DOM element to search for triggers within.
   * @returns {Array} List of trigger DOM references within this FlyoutMenu.
   */
  function _findTriggers(element) {
    const triggersList = [];
    const triggers = element.querySelectorAll(`${SEL_PREFIX}_trigger]`);

    let trigger;
    let triggerParent;
    let isSubTrigger;
    // Iterate backwards ensuring that length is an UInt32.
    for (let i = triggers.length >>> 0; i--; ) {
      isSubTrigger = false;
      trigger = triggers[i];
      triggerParent = trigger.parentElement;
      while (triggerParent !== element) {
        if (
          triggerParent.getAttribute(JS_HOOK) &&
          triggerParent.getAttribute(JS_HOOK).split(' ').indexOf(BASE_CLASS) !==
            -1
        ) {
          isSubTrigger = true;
          triggerParent = element;
        } else {
          triggerParent = triggerParent.parentElement;
        }
      }

      if (!isSubTrigger) {
        triggersList.unshift(triggers[i]);
      }
    }

    return triggersList;
  }

  /**
   * @returns {FlyoutMenu} An instance.
   * @param {boolean} isExpanded - Whether the flyout menu is expanded at
   *   initialization-time or collapsed.
   */
  function init(isExpanded = false) {
    _state = isExpanded ? EXPANDED : COLLAPSED;
    _triggerDoms.forEach((triggerDom) => {
      _setAriaAttr('expanded', triggerDom, isExpanded);

      triggerDom.addEventListener('click', _handleTriggerClicked.bind(this));
      triggerDom.addEventListener('touchstart', _handleTouchStart, {
        passive: true,
      });
      triggerDom.addEventListener('mouseover', _handleTriggerOver.bind(this));
      triggerDom.addEventListener('mouseout', _handleTriggerOut.bind(this));
    });

    _contentDom.setAttribute('data-open', isExpanded ? 'true' : 'false');
    if (autoHideContent && !isExpanded) _contentDom.setAttribute('hidden', '');

    resume();

    return this;
  }

  /**
   * Set an aria attribute on an HTML element.
   * @param {string} type - The aria attribute to set
   *   (without the aria- prefix).
   * @param {HTMLElement} elem - The element to set.
   * @param {boolean} value - The value to set on `aria-expanded`,
   *   casts to a string.
   * @returns {string} The cast value.
   */
  function _setAriaAttr(type, elem, value) {
    const strValue = String(value);
    elem.setAttribute('aria-' + type, strValue);
    return strValue;
  }

  /**
   * Event handler for when the search input trigger is touched.
   */
  function _handleTouchStart() {
    _touchTriggered = true;
  }

  /**
   * Event handler for when the trigger is hovered over.
   * @param {MouseEvent} event - The clicked flyout trigger event object.
   */
  function _handleTriggerOver(event) {
    if (_suspended) return;

    if (!_touchTriggered) {
      this.dispatchEvent('triggerover', {
        target: this,
        trigger: event.target,
        type: 'triggerover',
      });
    }

    _touchTriggered = false;
  }

  /**
   * Event handler for when the trigger is hovered out.
   * @param {MouseEvent} event - The clicked flyout trigger event object.
   */
  function _handleTriggerOut(event) {
    if (_suspended) return;

    this.dispatchEvent('triggerout', {
      target: this,
      trigger: event.target,
      type: 'triggerout',
    });
  }

  /**
   * Event handler for when the search input trigger is clicked,
   * which opens/closes the search input.
   * @param {MouseEvent} event - The clicked flyout trigger event object.
   */
  function _handleTriggerClicked(event) {
    if (_suspended) return;

    this.dispatchEvent('triggerclick', {
      target: this,
      trigger: event.target,
      type: 'triggerclick',
    });

    event.preventDefault();

    switch (_state) {
      case COLLAPSED:
      case COLLAPSING:
        this.expand();
        break;
      case EXPANDING:
      case EXPANDED:
        this.collapse();
        break;
    }
  }

  /**
   * Open the search box.
   * @returns {FlyoutMenu} An instance.
   */
  function expand() {
    _transition?.halt();
    if (_state === EXPANDING || _state === EXPANDED) return this;

    _state = EXPANDING;
    if (autoHideContent) _contentDom.removeAttribute('hidden');
    this.dispatchEvent('expandbegin', { target: this, type: 'expandbegin' });

    // Only use transitions if both expand and collapse are set.
    if (!_expandTransitionMethod || !_collapseTransitionMethod) {
      _expandEndBinded();
      return this;
    }

    const hasTransition = _transition?.isAnimated();
    if (hasTransition) {
      _transition.addEventListener(BaseTransition.END_EVENT, _expandEndBinded);
    }

    _expandTransitionMethod();

    if (!hasTransition) {
      _expandEndBinded();
    }

    return this;
  }

  /**
   * Close the search box.
   * If collapse is called when expand animation is underway,
   * save a deferred call to collapse, which is called when
   * expand completes.
   * @returns {FlyoutMenu} An instance.
   */
  function collapse() {
    _transition?.halt();
    if (_state === COLLAPSING || _state === COLLAPSED) return this;

    for (let i = 0, len = _triggerDoms.length; i < len; i++) {
      _setAriaAttr('expanded', _triggerDoms[i], false);
    }

    _contentDom.setAttribute('data-open', 'false');

    _state = COLLAPSING;
    this.dispatchEvent('collapsebegin', {
      target: this,
      type: 'collapsebegin',
    });

    // Only use transitions if both expand and collapse are set.
    if (!_collapseTransitionMethod || !_expandTransitionMethod) {
      _collapseEndBinded();
      return this;
    }

    const hasTransition = _transition?.isAnimated();
    if (hasTransition) {
      _transition.addEventListener(
        BaseTransition.END_EVENT,
        _collapseEndBinded,
      );
    }

    _collapseTransitionMethod();

    if (!hasTransition) {
      _collapseEndBinded();
    }

    return this;
  }

  /**
   * Expand animation has completed.
   * Call deferred collapse function,
   * if set (otherwise it will call a noop function).
   */
  function _expandEnd() {
    _state = EXPANDED;
    _contentDom.setAttribute('data-open', 'true');
    if (_transition) {
      _transition.removeEventListener(
        BaseTransition.END_EVENT,
        _expandEndBinded,
      );
    }
    this.dispatchEvent('expandend', { target: this, type: 'expandend' });

    for (let i = 0, len = _triggerDoms.length; i < len; i++) {
      _setAriaAttr('expanded', _triggerDoms[i], true);
    }
  }

  /**
   * Collapse animation has completed.
   */
  function _collapseEnd() {
    _state = COLLAPSED;

    if (autoHideContent) _contentDom.setAttribute('hidden', '');

    if (_transition) {
      _transition.removeEventListener(
        BaseTransition.END_EVENT,
        _collapseEndBinded,
      );
    }

    this.dispatchEvent('collapseend', { target: this, type: 'collapseend' });
  }

  /**
   * Set the transition that runs when this flyout is expanded/collapsed.
   * @param {BaseTransition} transition - A transition object.
   * @param {Function} collapseMethod - The collapse method to call on the transition.
   * @param {Function} expandMethod - The expand method to call on the transition.
   */
  function setTransition(transition, collapseMethod, expandMethod) {
    _transition = transition;

    if (collapseMethod && collapseMethod !== _collapseTransitionMethod) {
      _collapseTransitionMethod = collapseMethod;
    }

    if (expandMethod && expandMethod !== _expandTransitionMethod) {
      _expandTransitionMethod = expandMethod;
    }
  }

  /**
   * Clear the transitions attached to this FlyoutMenu instance.
   */
  function clearTransition() {
    if (_transition) {
      _transition.remove();
    }

    let UNDEFINED;

    _transition = UNDEFINED;

    _expandTransitionMethod = UNDEFINED;
    _collapseTransitionMethod = UNDEFINED;
  }

  /**
   * @returns {object}
   *   Hash of container, content DOM references, and a list of trigger DOMs.
   */
  function getDom() {
    return {
      container: _dom,
      content: _contentDom,
      trigger: _triggerDoms,
    };
  }

  /**
   * Enable broadcasting of trigger events.
   * @returns {boolean} True if resumed, false otherwise.
   */
  function resume() {
    if (_suspended) _suspended = false;

    return !_suspended;
  }

  /**
   * Suspend broadcasting of trigger events.
   * @returns {boolean} True if suspended, false otherwise.
   */
  function suspend() {
    if (!_suspended) _suspended = true;

    return _suspended;
  }

  /**
   * @param {number | string | object} data - A data identifier
   *   such as an Array index, Hash key, or Tree node.
   * @returns {FlyoutMenu} An instance.
   */
  function setData(data) {
    _data = data;

    return this;
  }

  // Attach public events.
  const eventObserver = new EventObserver();
  this.addEventListener = eventObserver.addEventListener;
  this.removeEventListener = eventObserver.removeEventListener;
  this.dispatchEvent = eventObserver.dispatchEvent;

  this.init = init;
  this.expand = expand;
  this.collapse = collapse;
  this.setTransition = setTransition;
  this.clearTransition = clearTransition;
  this.getData = () => _data;
  this.getTransition = () => _transition;
  this.getDom = getDom;
  this.isAnimating = () => _state === EXPANDING || _state === COLLAPSING;
  this.isExpanded = () => _state === EXPANDED;
  this.resume = resume;
  this.setData = setData;
  this.suspend = suspend;

  // Public static properties.
  FlyoutMenu.BASE_CLASS = BASE_CLASS;

  return this;
}

export { FlyoutMenu };
