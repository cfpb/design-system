/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */

describe( 'Netlify CMS', () => {

  describe( 'Editing the homepage', () => {

    let loginButton;

    beforeEach( async () => {
      await browser.url( '/design-system/admin/#/collections/special-pages/entries/home' );
      await browser.pause( 300 );
      loginButton = await $( 'button=Login' ),
      // Wait for page to load netlify configuration and show the login button.
      await loginButton.waitForDisplayed( { timeout: 10000 } );
      expect( loginButton ).toExist();
    } );

    afterEach( async () => {
      await browser.reloadSession();
    } );

    it( 'should allow the user to log in', async () => {
      await loginButton.click();
      const editorContainer = await $( 'label=Page title' );
      await editorContainer.waitForDisplayed();
      expect( editorContainer ).toExist();
    } );

    it( 'should properly render a preview of a page', async () => {
      await loginButton.click();
      // The homepage's body field
      const pageBodyField = await $( '#nc-root #description-field-2' );
      await pageBodyField.waitForDisplayed();
      await pageBodyField.clearValue();
      await pageBodyField.setValue( 'fun' );
      // The preview pane is an iframe
      await browser.switchToFrame( await $( 'iframe' ) );
      const previewPane = await $( 'body' );
      expect( previewPane ).toHaveTextContaining( 'fun' );
    } );

  } );

  describe( 'Editing a component page', () => {

    beforeEach( async () => {
      await browser.reloadSession();
      await browser.url( '/design-system/admin/#/collections/pages/entries/buttons' );
      // Make the browser a little wider than normal to prevent the "show details" tabs
      // from triggering their mobile media queries
      await browser.setWindowSize( 1850, 800 );
      loginButton = await $( 'button=Login' );
      await loginButton.waitForDisplayed();
    } );

    it( 'should properly render a preview of a component page', async () => {
      await loginButton.click();
      // The button page's title field
      const pageTitleField = await $( '#nc-root #title-field-1' );
      await pageTitleField.waitForDisplayed();
      await pageTitleField.clearValue();
      await pageTitleField.setValue( 'best' );
      // The preview pane is an iframe
      await browser.switchToFrame( await $( 'iframe' ) );
      const previewPane = await $( 'body' );
      expect( previewPane ).toHaveTextContaining( 'best' );
    } );

    it( 'should support switching between the various "show details" tabs', async () => {
      await loginButton.click();
      // Wait for the editor to load
      const editorContainer = await $( 'label=Page title' );
      await editorContainer.waitForDisplayed();
      // The preview pane is an iframe
      await  browser.switchToFrame( await $( 'iframe' ) );
      const detailsButton = await $( 'button=Show details' );
      await detailsButton.click();
      const implementationButton = await $( 'a=Implementation' );
      expect( implementationButton ).toBeDisplayed();
      await implementationButton.click();
      // Move one level up the DOM tree
      const implementationButtonParent = await implementationButton.$( '..' );
      expect( implementationButtonParent ).toHaveElementClassContaining( 'selected' );
    } );
  } );

} );
