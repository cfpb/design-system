import { Tabs } from 'govuk-frontend';

const main = document.querySelector( 'main.content' );
const tabs = document.querySelectorAll( '[data-module="tabs"]' );

if ( tabs ) {
  main.classList.add( 'js-enabled' );
  for ( let i = 0; i < tabs.length; i++ ) {
    const tab = tabs[i];
    new Tabs( tab ).init( );
  }
}

const HIDDEN_CLASS = 'u-hidden';
const toggleButton = document.getElementById( 'toggle-code-btn' );
const codeSnippets = document.querySelectorAll( '[data-toggle-code]' );

const hideEls = els => els.forEach( el => el.classList.add( HIDDEN_CLASS ) );
const showEls = els => els.forEach( el => el.classList.remove( HIDDEN_CLASS ) );

toggleButton.addEventListener( 'click', ev => {
  ev.preventDefault();
  const codeIsHidden = toggleButton.getAttribute( 'data-code-hidden' );
  if ( codeIsHidden ) {
    showEls( codeSnippets );
    toggleButton.removeAttribute( 'data-code-hidden' );
  } else {
    hideEls( codeSnippets );
    toggleButton.setAttribute( 'data-code-hidden', 'true' );
  }
} );

/**
 * create permalink elements for easy copy/paste of anchor links at every h3 heading
 * @todo: for h4 headings too?
 */
function addPermalinks( ) {
  const headings = document.querySelectorAll( '.content_main h3' );

  for ( let i = 0; i < headings.length; i++ ) {
    const heading = headings[i];
    const href = heading.getAttribute( 'id' );
    if ( href ) {
      // create href with id of heading
      const link = document.createElement( 'a' );
      link.setAttribute( 'href', '#' + href );
      
      // @todo: use icon-copy.svg
      link.innerHTML = ' <small>Copy link to #' + href + ' section of this page</small>';


      // append to heading
      heading.appendChild( link );
    }

  }

  // @todo: copy href to clipboard on click

}

addPermalinks( );
