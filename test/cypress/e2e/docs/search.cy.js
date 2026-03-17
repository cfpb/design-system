describe('The search feature', () => {
  beforeEach(() => {
    cy.visit('/search/');
  });

  it('should show no search results', () => {
    cy.get('#search-results').should(
      'contain',
      "No search results found for ''.",
    );
  });

  it('should show search results', () => {
    cy.get('#search-box')
      .shadow()
      .find('cfpb-form-search-input')
      .should('exist')
      .shadow()
      .find('input[type=search]')
      .type('button');
    cy.get('#search-box').shadow().find('button[type=submit]').click();
    cy.get('#search-results').find('li').its('length').should('be.gte', 1);
  });

  it('should show search results on enter key press', () => {
    cy.get('#search-box')
      .shadow()
      .find('cfpb-form-search-input')
      .should('exist');
    cy.get('#search-box')
      .shadow()
      .find('input[type=search]')
      .type('expandable');
    cy.get('#search-box').shadow().find('input[type=search]').type('{enter}');
    cy.get('#search-results').find('li').its('length').should('be.gte', 1);
  });
});
