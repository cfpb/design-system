/* eslint-disable no-undef */

describe( 'Multiselect', () => {
  let multiselectInput;

  beforeEach( async () => {
    await browser.url( '/design-system/components/dropdowns-and-multiselects' );
    await browser.setWindowSize( 1024, 768 );

    // Wait till page has loaded.
    await browser.waitUntil(
      async () => {
        // Return when the document is ready.
        function documentReady() {
          return document.readyState;
        }

        // For IE compatibility we can't use an arrow function in the executed JS.
        const state = await browser.execute( documentReady );

        multiselectInput = await $( '.a-live_code .o-multiselect_search' );
        await multiselectInput.scrollIntoView();

        return state === 'complete';
      },
      {
        timeout: 60000,
        timeoutMsg: 'Oops! Test timed out waiting for page to load!'
      }
    );
  } );

  it( 'should show the first multiselect option when opened', async () => {
    await multiselectInput.click();
    // Ensure multiselect has fully expanded
    await browser.pause( 300 );
    const firstMultiSelectOption = await $(
      '.a-live_code .o-multiselect_options li:first-child'
    );
    expect( await firstMultiSelectOption.isDisplayedInViewport() ).toBeTruthy();
  } );

  it( 'should not show the last multiselect option until the user scrolls to it', async () => {
    await multiselectInput.click();
    const multiselectFieldset = await $( '.a-live_code .o-multiselect_fieldset' );
    const lastMultiSelectOption = await $(
      '.a-live_code .o-multiselect_options li:last-child'
    );
    await lastMultiSelectOption.scrollIntoView();
    const multiselectFieldsetScrollTop = await multiselectFieldset.getProperty(
      'scrollTop'
    );
    // Ensure multiselect has fully expanded
    await browser.pause( 300 );
    // If the scrollTop of the fieldset is zero, it means no scrolling was necessary to reach
    // the last multiselect option which indicates the options aren't contained within the
    // scrollable area and are spilling over due to a browser or CSS bug.
    expect( multiselectFieldsetScrollTop ).toBeGreaterThan( 0 );
  } );

  it( 'should correctly filter the multiselect options', async () => {
    await multiselectInput.click();
    // Ensure multiselect has fully expanded
    await browser.pause( 300 );

    const firstMultiSelectOption = await $(
      '.a-live_code .o-multiselect_options li[data-option=option1]'
    );
    const fourthMultiSelectOption = await $(
      '.a-live_code .o-multiselect_options li[data-option=option4]'
    );
    const longMultiSelectOption = await $(
      '.a-live_code .o-multiselect_options li[data-option=option8]'
    );

    // Find option #4
    await multiselectInput.setValue( 'ion 4' );
    expect( await firstMultiSelectOption.isDisplayed() ).toBeFalsy();
    expect( await fourthMultiSelectOption.isDisplayed() ).toBeTruthy();
    expect( await longMultiSelectOption.isDisplayed() ).toBeFalsy();

    // Find the last really long option
    await multiselectInput.setValue( 'superca' );
    expect( await firstMultiSelectOption.isDisplayed() ).toBeFalsy();
    expect( await fourthMultiSelectOption.isDisplayed() ).toBeFalsy();
    expect( await longMultiSelectOption.isDisplayed() ).toBeTruthy();
  } );

  it( 'should let the user remove a choice', async () => {
    // Verify option1 is selected by default
    const multiSelectChoice = await $(
      '.o-multiselect_choices label[for=test_select__multiple-option1]'
    );
    expect( await multiSelectChoice.isDisplayed() ).toBeTruthy();

    // Verify option1 can be removed
    await multiSelectChoice.click();
    expect( await multiSelectChoice.isExisting() ).toBeFalsy();
  } );

  it( 'should let the user add a choice', async () => {
    await multiselectInput.click();
    // Ensure multiselect has fully expanded
    await browser.pause( 300 );

    const secondMultiSelectOption = await $(
      '.a-live_code .o-multiselect_options li[data-option=option2] label'
    );
    await secondMultiSelectOption.click();

    const secondMultiSelectChoice = await $(
      '.a-live_code .o-multiselect_choices label[for=test_select__multiple-option2]'
    );
    expect( await secondMultiSelectChoice.isDisplayed() ).toBeTruthy();
  } );
} );
