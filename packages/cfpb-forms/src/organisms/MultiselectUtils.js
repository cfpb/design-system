/**
 * Shortcut for creating new dom elements.
 * @param {string} tag - The html elem to create.
 * @param {HTMLElement} parentNode - The parent node to attach to.
 * @param {object} options - The options for building the elem.
 * @returns {HTMLElement} The created elem.
 */
export function create(tag, parentNode, options) {
  const elem = document.createElement(tag);

  Object.keys(options).forEach((key) => {
    const val = options[key];
    if (key in elem) {
      elem[key] = val;
    } else {
      elem.setAttribute(key, val);
    }
  });

  if (parentNode) parentNode.appendChild(elem);
  return elem;
}
