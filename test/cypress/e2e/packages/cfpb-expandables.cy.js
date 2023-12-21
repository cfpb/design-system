describe('Basic CFPB expandable', () => {
  before(() => {
    cy.visit('/components/expandables');
    cy.viewport(1024, 768);
  });

  it('should hide expandable content on page load', async () => {
    // Expandable content.
    cy.get('.a-live_code .o-expandable_content').should('not.be.visible');
  });

  it('should open expandable when header is clicked', async () => {
    // Expandable header.
    cy.get('.a-live_code button.o-expandable_header')
      .click()
      .then(() => {
        // Expandable content.
        cy.get('.a-live_code .o-expandable_content').should('be.visible');
      });
  });

  it('should close expandable when header is clicked again', async () => {
    // Expandable header.
    cy.get('.a-live_code button.o-expandable_header')
      .click()
      .then(() => {
        // Expandable content.
        cy.get('.a-live_code .o-expandable_content').should('not.be.visible');
      });
  });
});
