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

  it( 'should correctly filter the multiselect options', function() {
    multiselectInput.scrollIntoView();
    multiselectInput.click();
    // Ensure multiselect has fully expanded
    browser.pause( 300 );

    const firstMultiSelectOption = $( '.a-live_code .o-multiselect_options li[data-option=option1]' );
    const fourthMultiSelectOption = $( '.a-live_code .o-multiselect_options li[data-option=option4]' );
    const longMultiSelectOption = $( '.a-live_code .o-multiselect_options li[data-option=option8]' );

    // Find option #4
    multiselectInput.setValue( 'ion 4' );
    expect( firstMultiSelectOption.isDisplayed() ).toBeFalsy();
    expect( fourthMultiSelectOption.isDisplayed() ).toBeTruthy();
    expect( longMultiSelectOption.isDisplayed() ).toBeFalsy();

    // Find the last really long option
    multiselectInput.setValue( 'superca' );
    expect( firstMultiSelectOption.isDisplayed() ).toBeFalsy();
    expect( fourthMultiSelectOption.isDisplayed() ).toBeFalsy();
    expect( longMultiSelectOption.isDisplayed() ).toBeTruthy();
  } );

  it( 'should let the user remove a choice', function() {
    multiselectInput.scrollIntoView();

    // Verify option1 is selected by default
    const multiSelectChoice = $( '.a-live_code .o-multiselect_choices li[data-option=option1] label' );
    expect( multiSelectChoice.isDisplayed() ).toBeTruthy();

    // Verify option1 can be removed
    multiSelectChoice.click();
    expect( multiSelectChoice.isDisplayed() ).toBeFalsy();
  } );

  it( 'should let the user add a choice', function() {
    multiselectInput.scrollIntoView();
    multiselectInput.click();
    // Ensure multiselect has fully expanded
    browser.pause( 300 );

    const secondMultiSelectOption = $( '.a-live_code .o-multiselect_options li[data-option=option2] label' );
    secondMultiSelectOption.click();

    const secondMultiSelectChoice = $( '.a-live_code .o-multiselect_choices li[data-option=option2] label' );
    expect( secondMultiSelectChoice.isDisplayed() ).toBeTruthy();
  } );

} );
