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
 * @param {HTMLNode} elem - A DOM element.
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

/**
 * Search for support of the matches() method by looking at
 * browser prefixes.
 * @param {HTMLNode} elem
 *   The element to check for support of matches() method.
 * @returns {Function} The appropriate matches() method of elem.
 */
function _getMatchesMethod( elem ) {
  return elem.matches ||
         elem.webkitMatchesSelector ||
         elem.mozMatchesSelector ||
         elem.msMatchesSelector;
}

export {
  queryOne,
  closest
};
