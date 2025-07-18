/* ==========================================================================
   Dom Behaviors
   Behaviors are functionality that can be shared between different pieces
   of markup. They are not strictly atomic, though they likely are used
   on atomic components. An example of shared behavior may be a menu that
   expands and collapses and sets the aria-expanded attribute on the HTML.
   Or an input field that can be cleared by clicking an (x) button in the
   input. These are both behaviors that may appear in different parts of
   the codebase, but could share the same functionality.
   Behaviors are added through the `data-js-hook` attribute on the HTML
   and have a prefix of `behavior_`
   (both those designators are set in modules/util/standard-type.js).
   For example, `behaviors/FlyoutMenu.js` defines the behavior of
   expanding and collapsing an expandable menu. At a minimum, three things
   need to be defined: (A) The containing scope of the menu, (B) the trigger
   to activate the menu, and (C) the content to show/hide when the trigger
   is clicked. So the markup looks something like:
   <div data-js-hook="behavior_flyout-menu">
     <button data-js-hook="behavior_flyout-menu_trigger">
     <div data-js-hook="behavior_flyout-menu_content">…</div>
   </div>
   ========================================================================== */

import { BEHAVIOR_PREFIX, JS_HOOK } from '../standard-type.js';
import { contains } from '../data-hook.js';

/**
 * @param {string} behaviorSelector - Behavior type used to find the element
 *   within the dom.
 * @param {HTMLElement} baseElement - Containing element for the behavior element.
 * @returns {Array|NodeList} behaviorElements if it exists in the dom,
 *   null otherwise.
 */
function _findElements(behaviorSelector, baseElement) {
  baseElement = baseElement || document;
  let behaviorElements = [];

  try {
    behaviorElements = baseElement.querySelectorAll(behaviorSelector);
  } catch (error) {
    const msg = `${behaviorSelector} not found in DOM! ${error}`;
    throw new Error(msg);
  }

  if (
    behaviorElements.length === 0 &&
    behaviorSelector.indexOf(BEHAVIOR_PREFIX) === -1
  ) {
    behaviorElements = behaviorFind(behaviorSelector, baseElement);
  }

  return behaviorElements;
}

/**
 * @param {( string|HTMLElement|Array|NodeList )} behaviorElement - Used to
 *   query dom for elements.
 * @param {string} event - Event type to add to element.
 * @param {Function} eventHandler - Callback for event.
 * @param {HTMLElement} baseElement - Containing element
 *   for the behavior element.
 * @returns {Array|NodeList} if it exists in the dom, null otherwise.
 */
function behaviorAttach(behaviorElement, event, eventHandler, baseElement) {
  let behaviorElements = [];

  if (behaviorElement instanceof NodeList === true) {
    behaviorElements = behaviorElement;
  } else if (behaviorElement instanceof Node === true) {
    behaviorElements = [behaviorElement];
  } else if (typeof behaviorElement === 'string') {
    behaviorElements = _findElements(behaviorElement, baseElement);
  }

  for (let i = 0, len = behaviorElements.length; i < len; i++) {
    behaviorElements[i].addEventListener(event, eventHandler, false);
  }

  return behaviorElements;
}

/**
 * @param {HTMLElement} element - The DOM element within which to search
 *   for the behavior in the data-js-hook attribute.
 * @param {string} behaviorDataAttr - The value in the data-js-hook.
 *   This is the name of the behavior.
 *   E.g. `behavior_flyout-menu`, `behavior_flyout-menu_content`.
 * @returns {HTMLElement} The DOM element that has an attached behavior.
 * @throws {Error} If data-js-hook attribute value was not found on DOM element.
 */
function checkBehaviorDom(element, behaviorDataAttr) {
  // Check that the behavior is found on the passed DOM node.
  let dom;

  if (contains(element, behaviorDataAttr)) {
    dom = element;
    return dom;
  }

  /* If the passed DOM node isn't null,
     query the node to see if it's in the children. */
  if (element) {
    const selector = '[' + JS_HOOK + '=' + behaviorDataAttr + ']';
    dom = element.querySelector(selector);
  }

  if (!dom) {
    const msg = behaviorDataAttr + ' behavior not found on passed DOM node!';
    throw new Error(msg);
  }

  return dom;
}

/**
 * @param {string} behaviorSelector - Behavior type used to find
 *   the element within the dom.
 * @param {HTMLElement} baseElement - Containing element
 *   for the behavior element.
 * @returns {NodeList} if it exists in the dom, null otherwise.
 */
function behaviorFind(behaviorSelector, baseElement) {
  behaviorSelector = JS_HOOK + '*=' + BEHAVIOR_PREFIX + behaviorSelector;
  behaviorSelector = '[' + behaviorSelector + ']';

  return _findElements(behaviorSelector, baseElement);
}

// Expose public methods.
export { behaviorAttach, checkBehaviorDom, behaviorFind };
