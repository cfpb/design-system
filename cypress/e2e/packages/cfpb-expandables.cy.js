describe('Basic CFPB expandable', () => {
  beforeEach(() => {
    cy.visit('/components/expandables');
    cy.viewport(1024, 768);
    cy.get('.a-live__code').should('be.visible');
  });

  it('should hide expandable content on page load', () => {
    // Expandable content.
    cy.get('.a-live__code .o-expandable__content').should(
      'have.css',
      'display',
      'none',
    );
  });

  it('should open expandable when header is clicked', () => {
    // Expandable header.
    cy.get('.a-live__code button.o-expandable__header').first().click();
    // Expandable content.
    cy.get('.a-live__code .o-expandable__content')
      .first()
      .should('not.have.css', 'display', 'none');
  });

  it('should close expandable when header is clicked again', () => {
    // Expandable header.
    cy.get('.a-live__code button.o-expandable__header').last().click();
    cy.get('.a-live__code button.o-expandable__header').last().click();
    // Expandable content.
    cy.get('.a-live__code .o-expandable__content')
      .last()
      .should('have.css', 'display', 'none');
  });
});
