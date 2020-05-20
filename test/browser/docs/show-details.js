/* eslint-disable max-nested-callbacks */
/* eslint-disable no-undef */

describe( 'The "show details" toggling feature', () => {

  let showDetailsButton;
  let hideDetailsButton;
  let detailsTabs;
  let areDetailsTabsVisible;
  let componentPages;

  before( () => {
    browser.url( '/design-system/components/' );
    browser.setWindowSize( 1024, 768 );
    componentPages = $$( '.nav-secondary .m-list_link' ).map( el => ( {
      name: el.getText(),
      url: el.getAttribute( 'href' )
    } ) );
  } );

  it( 'should show/hide details across all component pages', () => {

    componentPages.forEach( componentPage => {

      describe( `The ${ componentPage.name } component page`, () => {

        before( () => {
          browser.url( componentPage.url );
          browser.setWindowSize( 1024, 768 );
          showDetailsButton = $( 'button=Show details' );
          hideDetailsButton = $( 'button=Hide details' );
          detailsTabs = [ ...$$( '.govuk-tabs' ) ];
          areDetailsTabsVisible = () => detailsTabs.some( snippet => snippet.isDisplayed() );
        } );

        it( 'should hide snippet tabs by default', () => {
          if ( !showDetailsButton || !hideDetailsButton ) {
            this.skip();
          }
          expect( showDetailsButton.isDisplayed() ).toBeTruthy();
          expect( hideDetailsButton.isDisplayed() ).toBeFalsy();
          expect( areDetailsTabsVisible() ).toBeFalsy();
        } );

        it( 'should show code snippets when toggle button is clicked', () => {
          if ( !showDetailsButton || !hideDetailsButton ) {
            this.skip();
          }
          showDetailsButton.click();
          expect( showDetailsButton.isDisplayed() ).toBeFalsy();
          expect( hideDetailsButton.isDisplayed() ).toBeTruthy();
          expect( areDetailsTabsVisible() ).toBeTruthy();
        } );

        it( 'should re-hide code snippets when toggle button is clicked again', () => {
          if ( !showDetailsButton || !hideDetailsButton ) {
            this.skip();
          }
          hideDetailsButton.click();
          expect( showDetailsButton.isDisplayed() ).toBeTruthy();
          expect( hideDetailsButton.isDisplayed() ).toBeFalsy();
          expect( areDetailsTabsVisible() ).toBeFalsy();
        } );
      } );

    } );

  } );

} );
