import { JS_HOOK } from './standard-type.js';

/**
 * @param {HTMLElement} element - DOM element.
 * @param {string} value - Value to check as existing as a JS data-* hook value.
 * @returns {boolean} True if the data-* hook value exists, false otherwise.
 */
function contains(element, value) {
  if (!element) {
    return false;
  }
  let values = element.getAttribute(JS_HOOK);
  // If JS data-* hook is not set return immediately.
  if (!values) {
    return false;
  }
  values = values.split(' ');

  return values.indexOf(value) > -1 ? true : false;
}

/**
 * @param {HTMLElement} element - DOM element.
 * @param {string} value - Value to add to the element's JS data-* hook.
 * @returns {string} The value that was added.
 * @throws {Error} If supplied value contains a space,
 *   meaning it would be two values, which is likely a typo.
 */
function add(element, value) {
  if (contains(element, value)) return value;

  if (value.indexOf(' ') !== -1) {
    const msg = JS_HOOK + ' values cannot contain spaces!';
    throw new Error(msg);
  }

  const values = element.getAttribute(JS_HOOK);
  if (values !== null) {
    value = values + ' ' + value;
  }
  element.setAttribute(JS_HOOK, value);

  return value;
}

export { add, contains };
