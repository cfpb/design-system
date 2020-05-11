/* eslint-disable no-undef */

describe( 'Netlify CMS', () => {

  let loginButton;

  beforeEach( () => {
    browser.url( 'http://localhost:4000/design-system/admin/#/collections/generic-pages/entries/home' );
    loginButton = browser.react$( 'LoginButton' );
  } );

  afterEach( () => {
    browser.execute( () => {
      localStorage.clear();
      sessionStorage.clear();
    } );
    browser.refresh();
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
    const pageTitleField = $( '#nc-root #body-field-1' );
    pageTitleField.waitForDisplayed();
    pageTitleField.clearValue();
    pageTitleField.setValue( 'browser tests are fun' );
    // The preview pane is an iframe
    browser.switchToFrame( $( 'iframe' ) );
    const previewPane = $( 'body' );
    expect( previewPane ).toHaveTextContaining( 'browser tests are fun' );
  } );

} );
