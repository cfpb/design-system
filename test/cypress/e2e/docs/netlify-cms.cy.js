/* eslint-disable handle-callback-err */
/* eslint-disable no-undef */

describe('Netlify CMS', () => {
  describe('Editing the homepage', () => {
    beforeEach(() => {
      cy.reload();
      cy.visit('/admin/#/collections/special-pages/entries/home');
      cy.intercept('http://localhost:8081/api/v1').as('getApi');
      const loginButton = cy
        .get('button')
        .contains('Login')
        .then(() => {
          loginButton.should('be.visible');
          loginButton.click();
        });
      cy.get('div').contains('Loading entry...');
      cy.wait(['@getApi', '@getApi'], {
        timeout: 100000,
      }).then(() => {
        const editorContainer = cy
          .get('label')
          .contains('Page title')
          .then(() => {
            editorContainer.should('be.visible');
          });
      });
    });

    it('should properly render a preview of a page', () => {
      // The homepage's body field
      const pageBodyField = cy.get('#nc-root #description-field-2').then(() => {
        pageBodyField.should('be.visible');
        pageBodyField.clear({ force: true });
        pageBodyField.type('fun', { force: true, delay: 0 });
        pageBodyField.blur();
        cy.get('#preview-pane')
          .its('0.contentDocument')
          .should('exist')
          .find('.frame-content')
          .should('include.text', 'fun');
      });
    });
  });

  describe('Editing a component page', () => {
    beforeEach(() => {
      cy.reload();
      cy.visit('/admin/#/collections/pages/entries/buttons');
      cy.intercept('http://localhost:8081/api/v1').as('getApi');
      const loginButton = cy
        .get('button')
        .contains('Login')
        .then(() => {
          loginButton.should('be.visible');
          loginButton.click();
        });
      cy.get('div').contains('Loading entry...');
      cy.wait(['@getApi', '@getApi'], {
        timeout: 100000,
      }).then(() => {
        const editorContainer = cy
          .get('label')
          .contains('Page title')
          .then(() => {
            editorContainer.should('be.visible');
          });
      });
    });

    it('should properly render a preview of a component page', () => {
      // The button page's title field
      const pageTitleField = cy.get('#nc-root #title-field-1').then(() => {
        pageTitleField.should('be.visible');
        pageTitleField.clear({ force: true });
        pageTitleField.type('best', { force: true, delay: 0 });
        pageTitleField.blur();
        cy.get('#preview-pane')
          .its('0.contentDocument')
          .should('exist')
          .find('.frame-content')
          .should('include.text', 'best');
      });
    });

    it('should support switching between the various "show details" tabs', async () => {
      cy.viewport(2000, 1200);
      // Wait for the editor to load
      const editorContainer = cy
        .get('label')
        .contains('Page title')
        .then(() => {
          editorContainer.should('be.visible');
          cy.get('#preview-pane').its('0.contentDocument').should('exist');
          const detailsButton = cy
            .get('button')
            .contains('Show details')
            .click()
            .then(() => {
              let implementationButton = cy
                .get('a')
                .contains('Implementation')
                .should('be.visible');
              implementationButton = cy
                .get('a')
                .contains('Implementation')
                .click();
              implementationButton = cy
                .get('a')
                .contains('Implementation')
                .parent()
                .should('have.class', 'selected');
            });
        });
    });
  });
});
