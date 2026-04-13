const getIframeBody = () => {
  return cy
    .get('#preview-pane')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap);
};

/**
 * Open a specific Decap CMS route and wait for the form UI to be ready.
 * @param {string} path - Decap admin route to open.
 */
function setupCmsVisit(path) {
  cy.reload(true);
  cy.visit(path);
  cy.get('label').contains('Page title').should('be.visible');
}

describe('Storybook pilot Decap CMS workflow', () => {
  beforeEach(() => {
    setupCmsVisit(
      '/design-system/admin/index.html?local_proxy_autologin=1#/collections/storybook-pages/entries/buttons',
    );
  });

  it('renders the Storybook pilot page in preview', () => {
    cy.get('#nc-root #title-field-1').should('have.value', 'Buttons');
    getIframeBody().find('.frame-content').should('include.text', 'Buttons');
    getIframeBody()
      .find('.frame-content')
      .should('include.text', 'Primary button');
    getIframeBody()
      .find('.frame-content')
      .contains('summary', 'Navigation')
      .should('not.exist');
    cy.contains('label', 'MDX body').should('not.exist');
  });

  it('updates the shared preview when structured fields change', () => {
    cy.contains('label', 'Guidelines').as('guidelinesLabel');
    cy.get('@guidelinesLabel').scrollIntoView();
    cy.get('@guidelinesLabel').closest('div').parent().as('guidelinesField');
    cy.get('@guidelinesField')
      .find('textarea, [contenteditable="true"], [data-slate-editor="true"]')
      .first()
      .as('guidelinesEditor');

    cy.get('@guidelinesEditor').type('\n\n- Pilot preview content.', {
      force: true,
      delay: 0,
    });
    cy.get('@guidelinesEditor').blur({ force: true });

    getIframeBody()
      .find('.frame-content')
      .should('include.text', 'Pilot preview content.');
  });
});
