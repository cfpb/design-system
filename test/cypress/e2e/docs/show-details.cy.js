describe('The "show details" toggling feature', () => {
  const components = [
    'alerts',
    'banner-notification',
    'banner-us-gov',
    'buttons',
    'checkboxes',
    'date-picker',
    'expandables',
    'fieldsets',
    'helper-text',
    'labels-and-legends',
    'links',
    'lists',
    'pagination',
    'radio-buttons',
    'selects',
    'summaries',
    'tables',
    'taglines',
    'text-inputs',
  ];

  before(() => {
    cy.visit('/components/');
    cy.viewport(1600, 1200);
    // Sidenav.
    cy.get('.ds-nav').should('be.visible');

    // If tests are being run via Sauce Labs, only test ten random component pages.
    // Testing all of them takes 30+ minutes and Sauce Labs has a max test length of 30 min.
    /*if (global.SAUCE_LABS) {
      componentPages.sort(() => 0.5 - Math.random());
      componentPages = componentPages.slice(0, 10);
    }*/
  });

  it('should query component names', () => {
    cy.get('.ds-nav-2 .a-link--jump').then((items) => {
      items.each((index, item) => {
        item = String(item);
        components[index] = item.substring(
          item.lastIndexOf('/design-system/') + 14,
        );
      });
    });
  });

  components.forEach((component) => {
    it(`should show/hide ${component} details across all component pages`, () => {
      cy.visit('/components/' + component);
      cy.reload();

      cy.log('should hide snippet tabs by default');
      // Show details button.
      cy.get('button').contains('Show details').should('be.visible');

      // Hide details button.
      cy.get('button').contains('Hide details').should('not.be.visible');

      // Detail tabs.
      cy.get('.m-tabs').should('not.be.visible');

      cy.log('should show code snippets when toggle button is clicked');
      // Show details button.
      cy.get('button').contains('Show details').click();
      cy.get('button').contains('Show details').should('not.be.visible');

      // Hide details button.
      cy.get('button').contains('Hide details').should('be.visible');

      // Detail tabs.
      cy.get('.m-tabs').should('be.visible');

      cy.log(
        'should re-hide code snippets when toggle button is clicked again',
      );
      // Hide details button.
      cy.get('button').contains('Hide details').click();
      cy.get('button').contains('Hide details').should('not.be.visible');

      // Detail tabs.
      cy.get('.m-tabs').should('not.be.visible');
    });
  });
});
