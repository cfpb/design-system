/**
 * Initialize the side navigation script to handle opening the sidebar
 * when the page is resized between mobile and desktop sizes.
 */
function init() {
  const secondaryNavCat = document.querySelector( '.ds-nav-container' );

  // First collapse the navigation if in mobile.
  if ( innerWidth < 601 ) {
    secondaryNavCat.removeAttribute( 'open' );
  }

  let windowWidth = window.innerWidth;
  /**
   * Test the viewport size and set whether the test passes on the instance.
   */
  function handleViewportChange() {
    // Collapse the navigation if we resize to mobile,
    // but only if we haven't already.
    // Otherwise, we're on desktop size, so open the navigation.
    let innerWidth = window.innerWidth;
    if ( innerWidth !== windowWidth ) {
      if ( innerWidth < 601 ) {
        secondaryNavCat.removeAttribute( 'open' );
      } else {
        secondaryNavCat.setAttribute( 'open', 'open' );
      }
    }
  }

  // Check viewport state on page load.
  handleViewportChange();

  // Add event listener for checking viewport state on window resize.
  window.addEventListener( 'resize', () => {
    handleViewportChange();
  } );
}

export default { init };
