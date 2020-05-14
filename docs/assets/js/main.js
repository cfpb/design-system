import { Tabs } from 'govuk-frontend';
import AnchorJS from 'anchor-js';
import Expandable from '@cfpb/cfpb-expandables/src/Expandable';
import Table from '@cfpb/cfpb-tables/src/Table';

const anchors = new AnchorJS();
// Add anchors to all headings (except page title headings)
anchors.add( 'h2:not(.title_heading), h3, h4, h5' );
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

const HIDDEN_CLASS = 'u-hidden';

/**
 * @param {MouseEvent} event - The mouse event object from the click.
 */
function handleDocumentClick( event ) {
  const target = event.target;
  if ( !target.matches( '[data-toggle-code]' ) ) {
    return;
  }
  event.preventDefault();
  const container = target.parentNode;
  const codeEl = document.querySelector( target.getAttribute( 'href' ) );
  const showCodeBtn = container.querySelector( '[data-toggle-code="show"]' );
  const hideCodeBtn = container.querySelector( '[data-toggle-code="hide"]' );
  if ( codeEl && codeEl.classList.contains( HIDDEN_CLASS ) ) {
    codeEl.classList.remove( HIDDEN_CLASS );
    hideCodeBtn.classList.remove( HIDDEN_CLASS );
    showCodeBtn.classList.add( HIDDEN_CLASS );
  } else {
    codeEl.classList.add( HIDDEN_CLASS );
    hideCodeBtn.classList.add( HIDDEN_CLASS );
    showCodeBtn.classList.remove( HIDDEN_CLASS );
  }

}

document.addEventListener( 'click', handleDocumentClick, false );
