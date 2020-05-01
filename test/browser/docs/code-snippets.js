/* eslint-disable no-undef */

describe( 'The code snippet toggling feature', () => {

  let codeToggleButton;
  let codeSnippetTabs;
  let arecodeSnippetTabsVisible;

  before( () => {
    browser.url( 'http://localhost:4000/design-system/components/buttons' );
    browser.setWindowSize( 1024, 768 );
    codeShowButton = $( '.a-toggle_code [data-toggle-code="show"]' );
    codeHideButton = $( '.a-toggle_code [data-toggle-code="hide"]' );
    codeSnippetTabs = [ ...$$( '.govuk-tabs' ) ];
    areCodeSnippetTabsVisible = () => codeSnippetTabs.some( snippet => snippet.isDisplayed() );
  } );

  it( 'should hide snippet tabs by default', () => {
    expect( codeShowButton.isDisplayed() ).toBeTruthy();
    expect( codeHideButton.isDisplayed() ).toBeFalsy();
    expect( areCodeSnippetTabsVisible() ).toBeFalsy();
  } );

  it( 'should show code snippets when toggle button is clicked', () => {
    codeShowButton.click();
    expect( codeShowButton.isDisplayed() ).toBeFalsy();
    expect( codeHideButton.isDisplayed() ).toBeTruthy();
    expect( areCodeSnippetTabsVisible() ).toBeTruthy();
  } );

  it( 'should re-hide code snippets when toggle button is clicked again', () => {
    codeHideButton.click();
    expect( codeShowButton.isDisplayed() ).toBeTruthy();
    expect( codeHideButton.isDisplayed() ).toBeFalsy();
    expect( areCodeSnippetTabsVisible() ).toBeFalsy();
  } );

} );
