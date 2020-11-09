/* ==========================================================================
   Organism

   Organism Atomic Component

   ========================================================================== */

import AtomicComponent from './AtomicComponent';
import config from '../utilities/config';

const Organism = AtomicComponent.extend( {
  TYPE: config.TYPES.ORGANISM,
  CHILD_TYPES: [ config.TYPES.MOLECULE, config.TYPES.ATOM ]
} );

export default Organism;
