import {
  toggleDetails,
  toggleAllDetails
} from './toggle-details.js';
import AnchorJS from 'anchor-js';
import Expandable from '@cfpb/cfpb-expandables/src/Expandable';
import Table from '@cfpb/cfpb-tables/src/Table';
import { Tabs } from 'govuk-frontend';
import redirectBanner from './redirect-banner.js';
import sidebar from './sidebar.js';

redirectBanner.init();
sidebar.init();

const anchors = new AnchorJS();
// Add anchors to all headings (except page title headings)
anchors.add( 'h2:not(.title), h3, h4, h5' );
// Ensure there are no anchors in inconvenient places
anchors.remove( `
  .live-code-example h2,
  .live-code-example h3,
  .live-code-example h4,
  .live-code-example h5,
  .o-expandable_label,
  #search-results h3
` );

Expandable.init();
Table.init();

const main = document.querySelector( '#main' );
const tabs = document.querySelectorAll( '[data-module="tabs"]' );

if ( tabs && tabs.length > 0 ) {
  main.classList.add( 'js-enabled' );
  for ( let i = 0; i < tabs.length; i++ ) {
    const tab = tabs[i];
    new Tabs( tab ).init();
  }
}

function handleToggleAllClick( event ) {
  event.preventDefault();
  toggleAllDetails( toggleAllBtn );
}

/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */
function handleToggleClick( event ) {
  let target = event.target;
  toggleDetails( target );
}

const toggleAllBtn = document.querySelector( '#toggle-details' );
const toggleBtns = document.querySelectorAll( '.a-toggle_code button' );

toggleAllBtn.addEventListener( 'click', handleToggleAllClick, false );

for ( let i = 0, len = toggleBtns.length; i < len; i++ ) {
  toggleBtns[i].addEventListener( 'click', handleToggleClick, false );
}
