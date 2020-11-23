import typeCheckers from '../type-checkers';

/**
 * Queries for the first match unless an HTMLNode is passed
 * @param   {(HTMLNode|string)} expr HTMLNode or string to query for
 * @param   {Object}          con  The document location to query
 * @returns {HTMLNode}             The elem
 */
function queryOne( expr, con ) {
  return typeCheckers.isString( expr ) ?
    ( con || document ).querySelector( expr ) :
    expr || null;
}

/**
 * Get the nearest parent node of an element.
 *
 * @param {HTMLNode} element - A DOM element.
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

export {
  queryOne,
  closest
};
