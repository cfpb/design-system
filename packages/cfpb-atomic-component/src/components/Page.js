/* ==========================================================================
   Page

   Page Atomic Component

   ========================================================================== */

import AtomicComponent from './AtomicComponent';
import config from '../utilities/config';

const Page = AtomicComponent.extend( {
  TYPE: config.TYPES.TEMPLATE,
  CHILD_TYPES: [ config.TYPES.TEMPLATE, config.TYPES.ORGANISM, config.TYPES.MOLECULE, config.TYPES.ATOM ]
} );

export default Page;
