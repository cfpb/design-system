/* ==========================================================================
   Table Organism
   ========================================================================== */


import config from '@cfpb/cfpb-atomic-component/src/utilities/config';
import Organism from '@cfpb/cfpb-atomic-component/src/components/Organism';
import TableSortable from './TableSortable';
import TableRowLinks from './TableRowLinks';

const Table = Organism.extend( {
  ui: {
    base: '.o-table'
  },

  modifiers: [ TableSortable, TableRowLinks ]
} );

Table.constants.DIRECTIONS = config.DIRECTIONS;

export default Table;
