/* eslint-disable no-undef */

describe( 'Basic CFPB expandable', () => {

  let expandableHeader;
  let expandableContent;
  let isExpandableContentVisible;

  before( () => {
    browser.url( '/design-system/components/expandables' );
    browser.setWindowSize( 1024, 768 );
    // Selects the first expandable live code sample, "Basic expandable"
    expandableHeader = $( '.a-live_code button.o-expandable_header' );
    expandableContent = $( '.a-live_code .o-expandable_content' );
    isExpandableContentVisible = () => expandableContent.isDisplayed();
  } );

  it( 'should hide expandable content on page load', () => {
    expect( isExpandableContentVisible() ).toBeFalsy();
  } );

  it( 'should open expandable when header is clicked', () => {
    expandableHeader.click();
    expandableContent.waitForDisplayed();
    expect( isExpandableContentVisible() ).toBeTruthy();
  } );

  it( 'should close expandable when header is clicked again', () => {
    expandableHeader.click();
    expandableContent.waitForDisplayed( { reverse: true } );
    expect( isExpandableContentVisible() ).toBeFalsy();
  } );

} );
