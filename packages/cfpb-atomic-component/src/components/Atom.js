/* ==========================================================================
   Atom

   Atom Atomic Component

   ========================================================================== */

import AtomicComponent from './AtomicComponent';
import config from '../utilities/config';

const Atom = AtomicComponent.extend( {
  TYPE: config.TYPES.ATOM,
  CHILD_TYPES: []
} );

export default Atom;
