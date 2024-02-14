describe('Multiselect', () => {
  // let multiselectInput;

  beforeEach(() => {
    cy.visit('/components/selects');
    cy.viewport(1024, 768);
    cy.get('.a-live_code').should('be.visible');

    // Wait till page has loaded.
    /*await browser.waitUntil(
      async () => {

        async function documentReady() {
          return document.readyState;
        }

        // For IE compatibility we can't use an arrow function in the executed JS.
        const state = await browser.execute(documentReady);

        multiselectInput = await $('.a-live_code .o-multiselect_search');
        await multiselectInput.scrollIntoView();

        return state === 'complete';
      },
      {
        timeout: 60000,
        timeoutMsg: 'Oops! Test timed out waiting for page to load!',
      },
    );*/
  });

  it('should show the first multiselect option when opened', () => {
    cy.get('.a-live_code .o-multiselect_search').click();
    // Ensure multiselect has fully expanded
    cy.wait(300);
    cy.get('.a-live_code .o-multiselect_options li:first-child').should(
      'be.visible',
    );
  });

  it('should not show the last multiselect option until the user scrolls to it', () => {
    cy.get('.a-live_code .o-multiselect_search').click();
    cy.get('.a-live_code .o-multiselect_options li:last-child').should(
      'not.be.visible',
    );
    cy.get(
      '.a-live_code .o-multiselect_options li:last-child',
    ).scrollIntoView();
    // Ensure multiselect has fully expanded
    cy.get('.a-live_code .o-multiselect_options li:last-child').should(
      'be.visible',
    );
  });

  it('should correctly filter the multiselect options', () => {
    cy.get('.a-live_code .o-multiselect_search').click();
    // Ensure multiselect has fully expanded
    cy.wait(300);

    // Find option #4.
    cy.get('.a-live_code .o-multiselect_search').type('ion 4');

    // First multiselect option.
    cy.get(
      '.a-live_code .o-multiselect_options li[data-option=option1]',
    ).should('not.be.visible');

    // Fourth multiselect option.
    cy.get(
      '.a-live_code .o-multiselect_options li[data-option=option4]',
    ).should('be.visible');

    // Eighth multiselect option.
    cy.get(
      '.a-live_code .o-multiselect_options li[data-option=option8]',
    ).should('not.be.visible');

    // Find the last really long option.
    cy.get('.a-live_code .o-multiselect_search').clear();
    cy.get('.a-live_code .o-multiselect_search').type('superca');

    // First multiselect option.
    cy.get(
      '.a-live_code .o-multiselect_options li[data-option=option1]',
    ).should('not.be.visible');

    // Fourth multiselect option.
    cy.get(
      '.a-live_code .o-multiselect_options li[data-option=option4]',
    ).should('not.be.visible');

    // Eighth multiselect option.
    cy.get(
      '.a-live_code .o-multiselect_options li[data-option=option8]',
    ).should('be.visible');
  });

  it('should let the user remove a choice', () => {
    // Verify option1 is selected by default.
    cy.get(
      '.o-multiselect_choices label[for=test_select__multiple-option1]',
    ).should('be.visible');

    // Verify option1 can be removed.
    cy.get(
      '.o-multiselect_choices label[for=test_select__multiple-option1]',
    ).click();
    cy.get(
      '.o-multiselect_choices label[for=test_select__multiple-option1]',
    ).should('not.exist');
  });

  it('should let the user add a choice', () => {
    cy.get('.a-live_code .o-multiselect_search').click();
    // Ensure multiselect has fully expanded
    cy.wait(300);

    cy.get(
      '.a-live_code .o-multiselect_options li[data-option=option2] label',
    ).click();
    cy.get(
      '.a-live_code .o-multiselect_choices label[for=test_select__multiple-option2]',
    ).should('be.visible');
  });
});
