describe('Multiselect', () => {
  beforeEach(() => {
    cy.visit('/components/selects');
    cy.viewport(1024, 768);
    cy.get('.a-live__code').should('be.visible');
  });

  it('should show the first multiselect option when opened', () => {
    cy.get('.a-live__code .o-multiselect__search').click();
    cy.get('.a-live__code .o-multiselect__options li:first-child').should(
      'be.visible',
    );
  });

  it('should not show the last multiselect option until the user scrolls to it', () => {
    cy.get('.a-live__code .o-multiselect__search').click();
    cy.get('.a-live__code .o-multiselect__options li:last-child').should(
      'not.be.visible',
    );
    cy.get(
      '.a-live__code .o-multiselect__options li:last-child',
    ).scrollIntoView();
    // Ensure multiselect has fully expanded
    cy.get('.a-live__code .o-multiselect__options li:last-child').should(
      'be.visible',
    );
  });

  it('should correctly filter the multiselect options', () => {
    cy.get('.a-live__code .o-multiselect__search').click();

    // Find option #4.
    cy.get('.a-live__code .o-multiselect__search').type('ion 4');

    // First multiselect option.
    cy.get(
      '.a-live__code .o-multiselect__options li[data-option=option1]',
    ).should('not.be.visible');

    // Fourth multiselect option.
    cy.get(
      '.a-live__code .o-multiselect__options li[data-option=option4]',
    ).should('be.visible');

    // Eighth multiselect option.
    cy.get(
      '.a-live__code .o-multiselect__options li[data-option=option8]',
    ).should('not.be.visible');

    // Find the last really long option.
    cy.get('.a-live__code .o-multiselect__search').clear();
    cy.get('.a-live__code .o-multiselect__search').type('superca');

    // First multiselect option.
    cy.get(
      '.a-live__code .o-multiselect__options li[data-option=option1]',
    ).should('not.be.visible');

    // Fourth multiselect option.
    cy.get(
      '.a-live__code .o-multiselect__options li[data-option=option4]',
    ).should('not.be.visible');

    // Eighth multiselect option.
    cy.get(
      '.a-live__code .o-multiselect__options li[data-option=option8]',
    ).should('be.visible');
  });

  it('should let the user remove a choice', () => {
    // Verify option1 is selected by default.
    cy.get(
      '.o-multiselect .m-tag-group label[for=test_select__multiple-option1] svg',
    ).should('be.visible');

    // Verify option1 can be removed.
    cy.get(
      '.o-multiselect .m-tag-group label[for=test_select__multiple-option1] svg',
    )
      .parent()
      .parent()
      .click();
    cy.get(
      '.o-multiselect .m-tag-group label[for=test_select__multiple-option1] svg',
    ).should('not.exist');
  });

  it('should let the user add a choice', () => {
    cy.get('.a-live__code .o-multiselect__search').click();

    cy.get(
      '.a-live__code .o-multiselect__options li[data-option=option2] label',
    ).click();
    cy.get(
      '.a-live__code .o-multiselect .m-tag-group label[for=test_select__multiple-option2] svg',
    ).should('be.visible');
  });
});
