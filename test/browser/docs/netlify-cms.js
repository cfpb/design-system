/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */

describe( 'Netlify CMS', () => {

  let loginButton;

  beforeEach( () => {
    browser.reloadSession();
  } );

  describe( 'Editing the homepage', () => {

    beforeEach( () => {
      browser.url( '/design-system/admin/#/collections/generic-pages/entries/home' );
      loginButton = browser.react$( 'LoginButton' );
    } );

    it( 'should load the login page with a login button', () => {
      loginButton.waitForDisplayed();
      expect( loginButton ).toExist();
    } );

    it( 'should allow the user to log in', () => {
      loginButton.waitForDisplayed();
      loginButton.click();
      const editorContainer = browser.react$( 'EditorContainer' );
      editorContainer.waitForDisplayed();
      expect( editorContainer ).toExist();
    } );

    it( 'should properly render a preview of a page', () => {
      loginButton.waitForDisplayed();
      loginButton.click();
      // The homepage's body field
      const pageBodyField = $( '#nc-root #body-field-1' );
      pageBodyField.waitForDisplayed();
      pageBodyField.clearValue();
      pageBodyField.setValue( 'browser tests are fun' );
      // The preview pane is an iframe
      browser.switchToFrame( $( 'iframe' ) );
      const previewPane = $( 'body' );
      expect( previewPane ).toHaveTextContaining( 'browser tests are fun' );
    } );

  } );

  describe( 'Editing a component page', () => {

    beforeEach( () => {
      browser.url( '/design-system/admin/#/collections/components/entries/buttons' );
      loginButton = browser.react$( 'LoginButton' );
    } );

    it( 'should properly render a preview of a component page', () => {
      loginButton.waitForDisplayed();
      loginButton.click();
      // The button page's title field
      const pageTitleField = $( '#nc-root #title-field-1' );
      pageTitleField.waitForDisplayed();
      pageTitleField.clearValue();
      pageTitleField.setValue( 'component pages are the best' );
      // The preview pane is an iframe
      browser.switchToFrame( $( 'iframe' ) );
      const previewPane = $( 'body' );
      expect( previewPane ).toHaveTextContaining( 'component pages are the best' );
    } );

  } );

} );
