/* ==========================================================================
   Dom closest

   Utility for retrieving the closest DOM element that
   matches a give selector.

   ========================================================================== */

// TODO Fix complexity issue
/* eslint-disable complexity */
/**
 * Get the nearest parent node of an elementent.
 *
 * @param {HTMLNode} element - A DOM elementent.
 * @param {string} selector - CSS selector.
 * @returns {HTMLNode} Nearest parent node that matches the selector.
 */
function closest( element, selector ) {
  if ( 'closest' in element ) {
    return element.closest( selector );
  }

  const matchesSelector = element.matches ||
                          element.webkitMatchesSelector ||
                          element.mozMatchesSelector ||
                          element.msMatchesSelector;
  let match;

  while ( element ) {
    if ( matchesSelector.bind( element )( selector ) ) {
      match = element;
    } else {
      element = element.parentElement;
    }

    if ( match ) { return element; }
  }

  return null;
}
/* eslint-enable complexity */

// Expose public methods.
module.exports = {
  closest: closest
};
