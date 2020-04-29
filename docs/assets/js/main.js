import { Tabs } from 'govuk-frontend';
import AnchorJS from 'anchor-js';
import Expandable from '@cfpb/cfpb-expandables/src/Expandable';
import Table from '@cfpb/cfpb-tables/src/Table';

const anchors = new AnchorJS();
// Add anchors to all headings (except page title headings)
anchors.add( 'h2:not(.title_heading), h3, h4, h5' );
// Ensure there are no anchors in the live code examples
anchors.remove( '.live-code-example h2, .live-code-example h3, .live-code-example h4, .live-code-example h5' );

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

const HIDDEN_CLASS = 'u-hidden';
// const toggleButton = document.querySelectorAll( 'a-toggle_code' );

document.addEventListener( 'click', function( event ) {
  if ( event.target.matches( '[data-toggle-code]' ) ) {
    event.preventDefault();
    const container = event.target.parentNode;
    const codeEl = document.querySelector( event.target.getAttribute( 'href' ) );
    if ( codeEl && codeEl.classList.contains( HIDDEN_CLASS ) ) {
      codeEl.classList.remove( HIDDEN_CLASS );
      container.querySelector( '[data-toggle-code="hide"]' ).classList.remove( HIDDEN_CLASS );
      container.querySelector( '[data-toggle-code="show"]' ).classList.add( HIDDEN_CLASS );
    } else {
      codeEl.classList.add( HIDDEN_CLASS );
      container.querySelector( '[data-toggle-code="hide"]' ).classList.add( HIDDEN_CLASS );
      container.querySelector( '[data-toggle-code="show"]' ).classList.remove( HIDDEN_CLASS );
    }
  }

}, false );
