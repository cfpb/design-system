import { TOGGLE_ATTRIBUTE, toggleDetails } from './toggle-details.js';
import { Tabs } from 'govuk-frontend';
import AnchorJS from 'anchor-js';
import Expandable from '@cfpb/cfpb-expandables/src/Expandable';
import Table from '@cfpb/cfpb-tables/src/Table';

const anchors = new AnchorJS();
// Add anchors to all headings (except page title headings)
anchors.add( 'h2:not(.title), h3, h4, h5' );
// Ensure there are no anchors in the live code examples
anchors.remove( `
  .live-code-example h2,
  .live-code-example h3,
  .live-code-example h4,
  .live-code-example h5,
  #search-results h3
` );

Expandable.init();
Table.init();

const main = document.querySelector( 'main.content' );
const tabs = document.querySelectorAll( '[data-module="tabs"]' );

if ( tabs && tabs.length > 0 ) {
  main.classList.add( 'js-enabled' );
  for ( let i = 0; i < tabs.length; i++ ) {
    const tab = tabs[i];
    new Tabs( tab ).init();
  }
}

/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */
function handleDocumentClick( event ) {
  const target = event.target;
  if ( target.matches( `[${ TOGGLE_ATTRIBUTE }]` ) ) {
    toggleDetails( target );
  }
}

document.addEventListener( 'click', handleDocumentClick, false );

const secondaryNavCats = document.querySelectorAll( '.ds-secondary-nav' );
let hasChangedViewport = false;

/**
 * Collapses the secondary nav summary categories.
 */
function collapseSecondaryNav() {
  for ( let i = 0, len = secondaryNavCats.length; i < len; i++ ) {
    secondaryNavCats[i].removeAttribute( 'open' );
  }
}

/**
 * Expands the secondary nav summary categories.
 */
function expandSecondaryNav() {
  for ( let i = 0, len = secondaryNavCats.length; i < len; i++ ) {
    secondaryNavCats[i].setAttribute( 'open', 'open' );
  }
}

/**
 * Test the viewport size and set whether the test passes on the instance.
 */
function handleViewportChange() {
  if ( window.innerWidth < 901 ) {
    collapseSecondaryNav();
  } else {
    expandSecondaryNav();
  }
}

// Check viewport state on page load.
handleViewportChange();

// Add event listener for checking viewport state on window resize.
window.addEventListener( 'resize', () => {
  handleViewportChange();
} );
