/* ==========================================================================
   Molecule

   Molecule Atomic Component

   ========================================================================== */

import AtomicComponent from './AtomicComponent';
import config from '../utilities/config';

const Molecule = AtomicComponent.extend( {
  TYPE: config.TYPES.MOLECULE,
  CHILD_TYPES: [ config.TYPES.ATOM ]
} );

export default Molecule;
