/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */

describe( 'CMS interstitial page with editing instructions', function() {

  before( function() {
    browser.reloadSession();
  } );

  describe( 'Editing a component page', function() {

    beforeEach( function() {
      browser.url( '/design-system/components/banners' );
      const editButton = $( '#edit-page' );
      editButton.waitForDisplayed();
      editButton.click();
    } );

    it( 'should show the interstitial if the user hasn\'t seen it before', function() {
      expect( browser ).toHaveTitle( 'Updating this website - CFPB Design System' );
    } );

    it( 'should not show the interstitial if the user has already seen it', function() {
      expect( browser ).toHaveTitle( 'Content Manager' );
    } );

  } );

} );
