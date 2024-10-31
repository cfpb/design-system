const getIframeBody = () => {
  // Get the iframe > document > body
  // and retry until the body element is not empty
  return (
    cy
      .get('#preview-pane')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      // https://on.cypress.io/wrap
      .then(cy.wrap)
  );
};

describe('Decap CMS', () => {
  describe('Editing the homepage', () => {
    beforeEach(() => {
      cy.reload();
      cy.visit('/admin/#/collections/special-pages/entries/home');
      cy.intercept('http://localhost:8081/api/v1').as('getApi');
      cy.get('button').contains('Login').should('be.visible');
      cy.get('button').contains('Login').click();
      cy.get('div').contains('Loading entry...');
      cy.wait(['@getApi', '@getApi'], {
        timeout: 100000,
      }).then(() => {
        cy.get('label').contains('Page title').should('be.visible');
      });
    });

    it('should properly render a preview of a page', () => {
      // The homepage's body field
      cy.get('#nc-root #description-field-2').should('be.visible');
      cy.get('#nc-root #description-field-2').clear({ force: true });
      cy.get('#nc-root #description-field-2').type('fun', {
        force: true,
        delay: 0,
      });
      cy.get('#nc-root #description-field-2').blur();
      getIframeBody().find('.frame-content').should('include.text', 'fun');
    });
  });

  describe('Editing a component page', () => {
    beforeEach(() => {
      cy.reload();
      cy.visit('/admin/#/collections/pages/entries/buttons');
      cy.intercept('http://localhost:8081/api/v1').as('getApi');
      cy.get('button').contains('Login').should('be.visible');
      cy.get('button').contains('Login').click();
      cy.get('div').contains('Loading entry...');
      cy.wait(['@getApi', '@getApi'], {
        timeout: 100000,
      });
      cy.get('label').contains('Page title').should('be.visible');
    });

    it('should properly render a preview of a component page', () => {
      // The button page's title field
      cy.get('#nc-root #title-field-1').should('be.visible');
      cy.get('#nc-root #title-field-1').clear({ force: true });
      cy.get('#nc-root #title-field-1').type('best', { force: true, delay: 0 });
      cy.get('#nc-root #title-field-1').blur();

      getIframeBody().find('.frame-content').should('include.text', 'best');
    });

    it('should support switching between the various "show details" tabs', () => {
      cy.viewport(2000, 1200);
      // Wait for the editor to load
      cy.get('label').contains('Page title').should('be.visible');
      getIframeBody()
        .find('button')
        .contains('Show details')
        .should('be.visible');
      getIframeBody().find('.m-tabs').should('have.css', 'display', 'none');
      getIframeBody().find('button').contains('Show details').click();
      getIframeBody().find('a').contains('Implementation').should('be.visible');
      getIframeBody().find('a').contains('Implementation').click();
      getIframeBody().find('.m-tabs').should('not.have.css', 'display', 'none');
      getIframeBody()
        .find('a')
        .contains('Implementation')
        .parent()
        .should('have.class', 'm-tabs__list-item-selected');
    });
  });
});
