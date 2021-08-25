/* eslint-disable max-nested-callbacks */
/* eslint-disable no-undef */

describe( 'The "show details" toggling feature', () => {

  let showDetailsButton;
  let hideDetailsButton;
  let detailsTabs;
  let componentPages;

  before( async () => {
    await browser.url( '/design-system/components/' );
    await browser.setWindowSize( 1600, 1200 );
    const sideNav = await $( '.ds-nav' );
    await sideNav.waitForDisplayed();
    componentPages = await $$( '.ds-nav-2 .m-list_link' ).map( async ( el ) => {
      return {
        name: await el.getText(),
        url: await el.getAttribute( 'href' )
      }
    } );
    // If tests are being run via Sauce Labs, only test ten random component pages.
    // Testing all of them takes 30+ minutes and Sauce Labs has a max test length of 30 min.
    if ( global.SAUCE_LABS ) {
      componentPages.sort( () => 0.5 - Math.random() );
      componentPages = componentPages.slice( 0, 10 );
    }
  } );

  it( 'should show/hide details across all component pages', async () => {

    componentPages.forEach( ( componentPage ) => {

      describe( `The ${ componentPage.name } component page`, () => {

        before( async () => {
          await browser.url( await componentPage.url );
          await browser.refresh();
          showDetailsButton = await $( 'button=Show details' );
          hideDetailsButton = await $( 'button=Hide details' );
          detailsTabs = [ ...await $$( '.govuk-tabs' ) ];
        } );

        it( 'should hide snippet tabs by default', async () => {
          if ( await !showDetailsButton.isExisting() || await !hideDetailsButton.isExisting() ) {
            this.skip();
          }
          expect( await showDetailsButton.isDisplayed() ).toBeTruthy();
          expect( await hideDetailsButton.isDisplayed() ).toBeFalsy();
          detailsTabs.some( async (snippet) => {
              expect( await snippet.isDisplayed() ).toBeFalsy();
          } );
        } );

        it( 'should show code snippets when toggle button is clicked', async () => {
          if ( await !showDetailsButton.isExisting() || await !hideDetailsButton.isExisting() ) {
            this.skip();
          }
          await showDetailsButton.click();
          expect( await showDetailsButton.isDisplayed() ).toBeFalsy();
          expect( await hideDetailsButton.isDisplayed() ).toBeTruthy();
          detailsTabs.some( async (snippet) => {
            expect( await snippet.isDisplayed() ).toBeTruthy();
          } );
        } );

        it( 'should re-hide code snippets when toggle button is clicked again', async () => {

          await hideDetailsButton.click();
          expect( await showDetailsButton.isDisplayed() ).toBeTruthy();
          expect( await hideDetailsButton.isDisplayed() ).toBeFalsy();
          detailsTabs.some( async (snippet) => {
            expect( await snippet.isDisplayed() ).toBeFalsy();
          } );
        } );
      } );

    } );

  } );

} );
