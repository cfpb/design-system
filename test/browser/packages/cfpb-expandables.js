/* eslint-disable no-undef */

describe( 'Basic CFPB expandable', () => {

  let expandableHeader;
  let expandableContent;

  before( async () => {
    await browser.url( '/design-system/components/expandables' );
    await browser.setWindowSize( 1024, 768 );
    // Selects the first expandable live code sample, "Basic expandable"
    expandableHeader = await $( '.a-live_code button.o-expandable_header' );
    expandableContent = await $( '.a-live_code .o-expandable_content' );
  } );

  it( 'should hide expandable content on page load', async () => {
    expect( await expandableContent.isDisplayed() ).toBeFalsy();
  } );

  it( 'should open expandable when header is clicked', async () => {
    await expandableHeader.click();
    await expandableContent.waitForDisplayed();
    expect( await expandableContent.isDisplayed() ).toBeTruthy();
  } );

  it( 'should close expandable when header is clicked again', async () => {
    await expandableHeader.click();
    await expandableContent.waitForDisplayed( { reverse: true } );
    expect( await expandableContent.isDisplayed() ).toBeFalsy();
  } );

} );
