/* eslint-disable no-undef */

describe( 'Multiselect', function() {

  let multiselectInput;

  before( function() {
    browser.url( '/design-system/components/dropdowns-and-multiselects' );
    browser.setWindowSize( 1024, 768 );
    browser.pause( 1000 );
    // Selects the first multiselect live code sample
    multiselectInput = $( '.a-live_code .o-multiselect_search' );
  } );

  it( 'should show the first multiselect option when opened', function() {
    multiselectInput.click();
    multiselectInput.scrollIntoView();
    // Ensure multiselect has fully expanded
    browser.pause( 300 );
    const firstMultiSelectOption = $( '.a-live_code .o-multiselect_options li:first-child' );
    expect( firstMultiSelectOption.isDisplayedInViewport() ).toBeTruthy();
  } );

  it( 'should not show the last multiselect option until the user scrolls to it', function() {
    multiselectInput.scrollIntoView();
    multiselectInput.click();
    const multiselectFieldset = $( '.a-live_code .o-multiselect_fieldset' );
    const lastMultiSelectOption = $( '.a-live_code .o-multiselect_options li:last-child' );
    lastMultiSelectOption.scrollIntoView();
    const multiselectFieldsetScrollTop = multiselectFieldset.getProperty( 'scrollTop' );
    // Ensure multiselect has fully expanded
    browser.pause( 300 );
    // If the scrollTop of the fieldset is zero, it means no scrolling was necessary to reach
    // the last multiselect option which indicates the options aren't contained within the
    // scrollable area and are spilling over due to a browser or CSS bug.
    expect( multiselectFieldsetScrollTop ).toBeGreaterThan( 0 );
  } );

} );
