/**
 * @param {String} name - The key of the URL query parameter to retrieve
 * @returns {String} - Value of URL query parameter
 */
function getUrlParameter( name ) {
  name = name.replace( /[\[]/, '\\[' ).replace( /[\]]/, '\\]' );
  const regex = new RegExp( '[\\?&]' + name + '=([^&#]*)' );
  const results = regex.exec( location.search );
  return results === null ? '' : decodeURIComponent( results[1].replace( /\+/g, ' ' ) );
}

const page = getUrlParameter( 'page' );

if ( page && window.PAGES_WHITELIST[page] ) {
  // Skip the interstitial page if they've seen it within the past two weeks
  if ( localStorage.getItem( 'cms-directions-last-seen' ) ) {
    const now = new Date();
    const lastSeen = Date.parse( localStorage.getItem( 'cms-directions-last-seen' ) );
    const daysSinceDirectionsSeen = ( now - lastSeen ) / 1000 / 60 / 60 / 24;
    if ( daysSinceDirectionsSeen <= 14 ) {
      window.location.replace( window.PAGES_WHITELIST[page] );
    }
  }
  document.querySelector( '[data-interstitial-notification]' ).classList.add( 'm-notification__visible' );
  document.querySelector( '[data-interstitial-next-step]' ).classList.remove( 'u-hidden' );
  document.querySelector( '[data-interstitial-redirect-button]' ).setAttribute( 'href', window.PAGES_WHITELIST[page] );
  document.querySelectorAll( '[data-interstitial-page-name]' ).forEach( el => {
    el.textContent = `"${ page }"`;
  } );
  localStorage.setItem( 'cms-directions-last-seen', new Date() );
}
