/* ==========================================================================
   Table Row Links

   Mixin for adding row link click functionality to Table organism.
   ========================================================================== */


const closest = require(
  '@cfpb/cfpb-atomic-component/src/utilities/dom-closest'
).closest;

const TableRowLinks = {
  ui: {
    base: '.o-table__row-links'
  },

  events: {
    'click tbody tr': 'onRowLinkClick'
  },

  onRowLinkClick: onRowLinkClick
};

/**
 * Handle a click of the table.
 *
 * @param {MouseEvent} event - Mouse event for click on the table.
 */
function onRowLinkClick( event ) {
  let target = event.target;
  if ( target && target.tagName === 'A' ) {
    return;
  }
  target = closest( event.target, 'tr' );
  const link = target.querySelector( 'a' );
  if ( link ) {
    window.location = link.getAttribute( 'href' );
  }
}

module.exports = TableRowLinks;
