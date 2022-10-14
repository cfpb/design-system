/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */

describe( 'CMS interstitial page with editing instructions', () => {
  before( async () => {
    await browser.reloadSession();
  } );

  describe( 'Editing a component page', () => {
    beforeEach( async () => {
      await browser.url( '/design-system/components/banners' );
      const editButton = await $( '#edit-page' );
      await editButton.waitForDisplayed();
      await editButton.click();
    } );

    it( "should show the interstitial if the user hasn't seen it before", () => {
      expect( browser ).toHaveTitle( 'Updating this website - CFPB Design System' );
    } );

    it( 'should not show the interstitial if the user has already seen it', () => {
      expect( browser ).toHaveTitle( 'Content Manager' );
    } );
  } );
} );
