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
    cy.get('#search-box').type('button');
    cy.get('#search-form button').click();
    cy.get('#search-results').should(
      'contain',
      "results for search of 'button'.",
    );
  });
});
