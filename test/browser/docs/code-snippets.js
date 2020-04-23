/* eslint-disable no-undef */

describe( 'The code snippet toggling feature', () => {

  let codeToggleButton;
  let codeSnippets;
  let areCodeSnippetsVisible;

  before( () => {
    browser.url( 'http://localhost:4000/design-system/components/buttons' );
    browser.setWindowSize( 1024, 768 );
    codeToggleButton = $( '#toggle-code-btn' );
    codeSnippets = [ ...$$( '[data-toggle-code]' ) ];
    areCodeSnippetsVisible = () => codeSnippets.some( snippet => snippet.isDisplayed() );
  } );

  it( 'should show code snippets by default', () => {
    expect( areCodeSnippetsVisible() ).toBeTruthy();
  } );

  it( 'should hide code snippets when toggle button is clicked', () => {
    codeToggleButton.click();
    expect( codeToggleButton.getText() ).toContain( 'Show' );
    expect( areCodeSnippetsVisible() ).toBeFalsy();
  } );

  it( 'should re-show code snippets when toggle button is clicked again', () => {
    codeToggleButton.click();
    expect( codeToggleButton.getText() ).toContain( 'Hide' );
    expect( areCodeSnippetsVisible() ).toBeTruthy();
  } );

} );
