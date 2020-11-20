/* ==========================================================================
   Table Sortablle

   Mixin for sorting table organism.
   ========================================================================== */


import config from '@cfpb/cfpb-atomic-component/src/utilities/config';
import { closest } from '@cfpb/cfpb-atomic-component/src/utilities/dom-traverse';

const DIRECTIONS = config.DIRECTIONS;
const UNDEFINED = config.UNDEFINED;

const TableSortable = {
  ui: {
    base:       '.o-table__sortable',
    tableBody:  'tbody',
    sortButton: '.sorted-up, .sorted-down'
  },

  classes: {
    sortDown: 'sorted-down',
    sortUp:   'sorted-up'
  },

  events: {
    'click .sortable': 'onSortableClick'
  },

  initialize:      initialize,
  bindProperties:  bindProperties,
  getColumnIndex:  getColumnIndex,
  updateTable:     updateTable,
  updateTableData: updateTableData,
  updateTableDom:  updateTableDom,
  tableDataSorter: tableDataSorter,
  onSortableClick: onSortableClick
};

/**
 * Function used to create computed and triggered properties.
 */
function initialize() {
  this.sortClass = UNDEFINED;
  this.sortColumnIndex = UNDEFINED;
  this.sortDirection = UNDEFINED;
  this.tableData = [];
  this.bindProperties();
  if ( this.ui.sortButton ) {
    this.sortColumnIndex = this.getColumnIndex();

    this.sortDirection = DIRECTIONS.UP;
    if ( this.ui.sortButton.classList.contains( this.classes.sortDown ) ) {
      this.sortDirection = DIRECTIONS.DOWN;
    }

    this.updateTable();
  }
}

/**
 * Function used to create computed and trigger properties.
 */
function bindProperties() {
  let sortDirection;

  Object.defineProperty( this, 'sortDirection', {
    configurable: true,
    get: function() {
      return sortDirection;
    },
    set: function( value ) {
      if ( value === DIRECTIONS.UP ) {
        this.sortClass = this.classes.sortUp;
      } else if ( value === DIRECTIONS.DOWN ) {
        this.sortClass = this.classes.sortDown;
      }
      sortDirection = value;
    }
  } );
}

/**
 * Function used to get the column index of the active sort column.
 *
 * @param {HTMLNode} element - The element used as the sortable.
 * @returns {number} The column index of the active sort column.
 */
function getColumnIndex( element ) {
  return closest( element || this.ui.sortButton, 'td, th' ).cellIndex;
}

/**
 * Function used to update the table data and dom.
 * @returns {boolean} TODO: Add description.
 */
function updateTable() {
  return this.updateTableData() && this.updateTableDom();
}

/**
 * Function used to get, sort, and update the table data array.
 *
 * @param {number} columnIndex - The index of the column used for sorting.
 * @returns {Array} Multidimensional array of column's cell value
 * and corresponding row element.
 */
function updateTableData( columnIndex ) {
  let cell;
  const rows = this.ui.tableBody.querySelectorAll( 'tr' );
  this.tableData = [];
  columnIndex = columnIndex || this.sortColumnIndex;

  for ( let i = 0, len = rows.length; i < len; ++i ) {
    cell = rows[i].cells[columnIndex];
    if ( cell ) {
      cell = cell.textContent.trim();
    }
    this.tableData.push( [ cell, rows[i] ] );
  }

  const sortType = this.ui.sortButton.getAttribute( 'data-sort_type' );
  this.tableData.sort( this.tableDataSorter( this.sortDirection, sortType ) );

  return this.tableData;
}

/**
 * Function used to update the table DOM.
 * @returns {HTMLNode} The table's <tbody> element.
 */
function updateTableDom() {
  const tableBody = this.ui.tableBody;

  /* Empty the table body to prepare for sorting the rows
     TODO: It might make sense to use innerHTML
     from a performance and garbage collection standpoint. */
  while ( tableBody.lastChild ) {
    tableBody.removeChild( tableBody.lastChild );
  }

  const documentFragment = document.createDocumentFragment();
  for ( let i = 0; i < this.tableData.length; i++ ) {
    documentFragment.appendChild( this.tableData[i][1] );
  }

  tableBody.appendChild( documentFragment );
  this.dispatchEvent( 'table:updated' );

  return tableBody;
}

// TODO Fix complexity issue
/* eslint-disable complexity */
/**
 * Function used to create a function for sorting table data.
 * Passed to Array.sort method.
 *
 * @param {number} direction - A number where a negative number indicates a
 * reverse sort.
 * @param {string} sortType - A string used for sort types. By default,
 * the values are sorted by their native type. If this value is set to
 * 'number', then the cells' numeric values are used.
 * @returns {Function} - A function to be used by the Array.sort method,
 * where the parameters 'a' and 'b' is each an Array (of Arrays) to be sorted.
 */
function tableDataSorter( direction, sortType ) {
  return function( a, b ) {
    const sign = direction === DIRECTIONS.DOWN ? -1 : 1;
    let order = 0;
    const regex = /[^\d.-]/g;

    // Set a and b to the first Array in each Array-of-Arrays
    a = a[0];
    b = b[0];

    // For number sort, convert a & b to numbers.
    if ( sortType === 'number' ) {
      a = Number( a.replace( regex, '' ) );
      b = Number( b.replace( regex, '' ) );
    }

    // Sort the values
    if ( a < b ) {
      order = sign * -1;
    } else if ( a > b ) {
      order = sign;
    }

    return order;
  };
}
/* eslint-enable complexity */

/**
 * Function used as callback for the sortable click event.
 *
 * @param {Event} event - DOM event.
 * @returns {Object} - TOOD: Add description.
 */
function onSortableClick( event ) {
  if ( this.ui.sortButton ) {
    this.ui.sortButton.classList.remove( this.sortClass );
  }
  if ( this.ui.sortButton === event.target ) {
    this.sortDirection = ~this.sortDirection;
  } else {
    this.ui.sortButton = event.target;
    this.sortColumnIndex = this.getColumnIndex();
    this.sortDirection = DIRECTIONS.UP;
  }
  // The active sort class is changing when the sort direction changes.
  this.ui.sortButton.classList.add( this.sortClass );
  this.updateTable();

  return this;
}

export default TableSortable;
