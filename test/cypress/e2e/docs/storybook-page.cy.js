const storybookOrigin = Cypress.config('baseUrl') || 'http://127.0.0.1:6006';
const storybookPilotUrl = `${storybookOrigin}/iframe.html?id=website-components--buttons&viewMode=story`;
const jekyllButtonsUrl =
  'http://127.0.0.1:4000/design-system/components/buttons';

describe('The Storybook pilot page', () => {
  it('renders the migrated buttons page', () => {
    cy.visit(storybookPilotUrl);
    cy.contains('h1', 'Buttons').should('be.visible');
    cy.contains('Show all details').should('be.visible');
    cy.contains('Edit page').should('be.visible');
    cy.contains('summary', 'Navigation').should('not.exist');
    cy.get('#edit-page a').should(
      'have.attr',
      'href',
      '/design-system/admin/index.html?local_proxy_autologin=1#/collections/storybook-pages/entries/buttons',
    );
    cy.get('.component-restrictions')
      .eq(1)
      .within(() => {
        cy.get('button')
          .eq(0)
          .children()
          .eq(0)
          .should('have.class', 'cf-icon-svg--left');
        cy.get('button').eq(0).children().eq(1).should('contain.text', 'Back');
        cy.get('button').eq(1).children().eq(0).should('contain.text', 'Back');
        cy.get('button')
          .eq(1)
          .children()
          .eq(1)
          .should('have.class', 'cf-icon-svg--left');
      });
  });

  it('keeps the pilot page visually close to the Jekyll baseline', () => {
    const screenshotsFolder = Cypress.config('screenshotsFolder');
    const specFolder = `${screenshotsFolder}/${Cypress.spec.name}`;
    const referencePath = `${specFolder}/jekyll-buttons.png`;
    const candidatePath = `${specFolder}/storybook-buttons.png`;
    const diffPath = `${specFolder}/storybook-buttons-diff.png`;

    cy.viewport(1440, 2200);
    cy.visit(jekyllButtonsUrl);
    cy.screenshot('jekyll-buttons', { capture: 'viewport' });

    cy.visit(storybookPilotUrl);
    cy.screenshot('storybook-buttons', { capture: 'viewport' });

    cy.task('compareScreenshots', {
      referencePath,
      candidatePath,
      diffPath,
      threshold: 0.08,
    }).then((result) => {
      expect(result.passes, `visual diff ratio: ${result.ratio}`).to.equal(
        true,
      );
    });
  });
});
