/* ==========================================================================
   Page

   Page Atomic Component

   ========================================================================== */

const AtomicComponent = require( './AtomicComponent' );
const TYPES = require( '../utilities/config' ).TYPES;

const Page = AtomicComponent.extend( {
  TYPE: TYPES.TEMPLATE,
  CHILD_TYPES: [ TYPES.TEMPLATE, TYPES.ORGANISM, TYPES.MOLECULE, TYPES.ATOM ]
} );

module.exports = Page;
