/* ==========================================================================
   Assign

   Contains code copied from the following with major modifications :

   - https://github.com/maslennikov/shallow-extend
     Copyright (c) 2014 Alexey Maslennikov

   ========================================================================== */

/**
 * @param {object} object - JavaScript object.
 * @returns {boolean} True if object is a plain JavaScript object.
 */
function _isPlainObject( object ) {
  return Object.prototype.toString.call( object ) === '[object Object]';
}

// TODO Fix complexity issue
/* eslint-disable complexity */
/**
 * Copies properties of all sources to the destination object overriding its own
 * existing properties. When assigning from multiple sources, fields of every
 * next source will override same named fields of previous sources.
 *
 * @param {Object} destination object.
 * @returns {Object} assigned destination object.
*/
function assign( destination ) {
  destination = destination || {};
  for ( let i = 1, len = arguments.length; i < len; i++ ) {
    const source = arguments[i] || {};
    let key;
    for ( key in source ) {
      if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
        const value = source[key];
        if ( _isPlainObject( value ) ) {
          assign( destination[key] || ( destination[key] = {} ), value );
        } else {
          destination[key] = value;
        }
      }
    }
  }

  return destination;
}
/* eslint-enable complexity */

// Expose public methods.
export {
  assign
};
