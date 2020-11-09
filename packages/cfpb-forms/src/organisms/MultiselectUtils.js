import domTraverse from '../../../cfpb-atomic-component/src/utilities/dom-traverse';

/**
 * Searches an array for the first object with the matching key:value pair.
 * @param   {Array}  array - List to query through for the expected value.
 * @param   {string} key   - The key to check the value against.
 * @param   {string} val   - The value to match to the key.
 * @returns {number}       Returns the index of a match, otherwise -1.
 */
function indexOfObject( array, key, val ) {
  let match = -1;

  if ( !array.length > 0 ) {
    return match;
  }

  array.forEach( function( item, index ) {
    if ( item[key] === val ) {
      match = index;
    }
  } );

  return match;
}

/**
 * Shortcut for creating new dom elements.
 * @param {string} tag - The html elem to create.
 * @param {Object} options - The options for building the elem.
 * @returns {HTMLNode} The created elem.
 */
function create( tag, options ) {
  const elem = document.createElement( tag );

  let i;
  for ( i in options ) {
    if ( options.hasOwnProperty( i ) ) {
      const val = options[i];
      let ref;

      if ( i === 'inside' ) {
        ref = domTraverse.queryOne( val );
        ref.appendChild( elem );
      } else if ( i === 'around' ) {
        ref = domTraverse.queryOne( val );
        ref.parentNode.insertBefore( elem, ref );
        elem.appendChild( ref );
      } else if ( i in elem ) {
        elem[i] = val;
      } else {
        elem.setAttribute( i, val );
      }
    }
  }

  return elem;
}

export default {
  indexOfObject,
  create
}