function init() {
  const secondaryNavCat = document.querySelector( '.ds-nav-container' );

  /**
   * Test the viewport size and set whether the test passes on the instance.
   */
  function handleViewportChange() {
    if ( window.innerWidth < 601 ) {
      secondaryNavCat.removeAttribute( 'open' );

    } else {
      secondaryNavCat.setAttribute( 'open', 'open' );
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
