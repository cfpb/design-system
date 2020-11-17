/* ==========================================================================
   Table Organism
   ========================================================================== */

import config from '@cfpb/cfpb-atomic-component/src/utilities/config.js';
import AtomicComponent from '@cfpb/cfpb-atomic-component/src/components/AtomicComponent.js';
import TableSortable from './TableSortable.js';
import TableRowLinks from './TableRowLinks.js';

const Table = AtomicComponent.extend( {
  ui: {
    base: '.o-table'
  },

  modifiers: [ TableSortable, TableRowLinks ]
} );

Table.constants.DIRECTIONS = config.DIRECTIONS;

export default Table;
