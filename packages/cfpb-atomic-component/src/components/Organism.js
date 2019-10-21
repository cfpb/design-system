/* ==========================================================================
   Organism

   Organism Atomic Component

   ========================================================================== */

const AtomicComponent = require( './AtomicComponent' );
const TYPES = require( '../utilities/config' ).TYPES;

const Organism = AtomicComponent.extend( {
  TYPE: TYPES.ORGANISM,
  CHILD_TYPES: [ TYPES.MOLECULE, TYPES.ATOM ]
} );

module.exports = Organism;
