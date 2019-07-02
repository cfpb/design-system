import { Tabs } from 'govuk-frontend'

var $main = document.querySelector('main.content');
var $tabs = document.querySelector('[data-module="tabs"]')

if ($tabs) {
  $main.classList.add('js-enabled');
  new Tabs($tabs).init()
  console.log('myhello')
}

const HIDDEN_CLASS = 'u-hidden';
const toggleButton = document.getElementById( 'toggle-code-btn' );
const codeSnippets = document.querySelectorAll( '[data-toggle-code]' );

let hideEls = els => els.forEach( el => el.classList.add( HIDDEN_CLASS ) );
let showEls = els => els.forEach( el => el.classList.remove( HIDDEN_CLASS ) );

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
