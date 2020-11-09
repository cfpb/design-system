/* ==========================================================================
   Template

   Template Atomic Component

   ========================================================================== */

import AtomicComponent from './AtomicComponent';
import config from '../utilities/config';

const Template = AtomicComponent.extend( {
  TYPE: config.TYPES.Template,
  CHILD_TYPES: [ config.TYPES.PAGE, config.TYPES.ORGANISM, config.TYPES.MOLECULE, config.TYPES.ATOM ]
} );

export default Template;
