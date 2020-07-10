const HIDDEN_CLASS = 'u-hidden';
const TOGGLE_ATTRIBUTE = 'data-toggle-details';

/**
 * Toggle details for a single variation.
 * @param {DOMNode} button - Button element that controls the toggling
 * @param {DOMNode} document - Defaults to window.document but overridable for ReactDOM
 */
function toggleDetails( button, document = window.document ) {
  const container = button.parentNode;
  const codeEl = document.querySelector( button.getAttribute( 'href' ) );
  const hideCodeBtn = container.querySelector( `[${ TOGGLE_ATTRIBUTE }="hide"]` );
  const showCodeBtn = container.querySelector( `[${ TOGGLE_ATTRIBUTE }="show"]` );
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

/**
 * Toggle all details for a page.
 */
function toggleAllDetails() {
  const codeEls = document.querySelectorAll( '.a-toggle_code' );
  let buttonElm;
  for ( let i = 0, len = codeEls.length; i < len; i++ ) {
    buttonElm = codeEls[i].querySelector( 'button:not(.u-hidden)' )
    toggleDetails( buttonElm );
  }
}

export {
  TOGGLE_ATTRIBUTE,
  toggleDetails,
  toggleAllDetails
}