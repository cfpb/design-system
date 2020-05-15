const HIDDEN_CLASS = 'u-hidden';

/**
 * @param {DOMNode} button - Button element that controls the toggling
 * @param {DOMNode} document - Defaults to window.document but overridable for ReactDOM
 */
export default function toggle( button, document = window.document ) {
  const container = button.parentNode;
  const codeEl = document.querySelector( button.getAttribute( 'href' ) );
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
