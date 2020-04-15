/* eslint-disable no-undef */

describe( 'basic cfpb expandable', () => {

  let expandableHeader;
  let expandableContent;
  let isExpandableContentVisible;

  before( () => {
    browser.url( 'http://localhost:4000/design-system/components/expandables' );
    browser.setWindowSize( 1024, 768 );
    // Selects the first expandable live code sample, "Basic expandable"
    expandableHeader = $( '.live-code-example button.o-expandable_header' );
    expandableContent = $( '.live-code-example .o-expandable_content' );
    isExpandableContentVisible = () => expandableContent.isDisplayed();
  } );

  it( 'should hide expandable content on page load', () => {
    expect( isExpandableContentVisible() ).toBeFalsy();
  } );

  it( 'should open expandable when header is clicked', () => {
    expandableHeader.click();
    browser.pause( 300 );
    expect( isExpandableContentVisible() ).toBeTruthy();
  } );

  it( 'should close expandable when header is clicked again', () => {
    expandableHeader.click();
    browser.pause( 300 );
    expect( isExpandableContentVisible() ).toBeFalsy();
  } );

} );
