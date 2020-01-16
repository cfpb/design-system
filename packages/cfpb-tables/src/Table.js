/* ==========================================================================
   Table Organism
   ========================================================================== */


const config = require( '@cfpb/cfpb-atomic-component/src/utilities/config' );
const Organism = require( '@cfpb/cfpb-atomic-component/src/components/Organism' );
const TableSortable = require( './TableSortable' );
const TableRowLinks = require( './TableRowLinks' );

const Table = Organism.extend( {
  ui: {
    base: '.o-table'
  },

  modifiers: [ TableSortable, TableRowLinks ]
} );

Table.constants.DIRECTIONS = config.DIRECTIONS;

module.exports = Table;
