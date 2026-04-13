const navigationFilePath =
  '/Users/davidpalmer/Documents/github/work-design-system/docs/_data/side-navigation.yml';

const originalHeading = 'Web Components (beta)';
const updatedHeading = 'Web Components pilot';

/**
 * Escape a string for literal use in a regular expression.
 * @param {string} value - Raw label text.
 * @returns {string} Escaped text safe to embed in a regex pattern.
 */
function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Open the Decap navigation entry editor.
 * @returns {void}
 */
function visitNavigationEntry() {
  cy.visit(
    '/design-system/admin/index.html#/collections/navigation/entries/side-navigation',
  );
  cy.get('button').contains('Login').click();
  cy.contains('label', 'First-level nav headings').should('be.visible');
}

/**
 * Open the Storybook manager UI.
 * @returns {void}
 */
function visitStorybookManager() {
  cy.visit('/?path=/story/website-components--buttons');
  cy.get('#storybook-explorer-tree').should('be.visible');
}

/**
 * Expand a nested object row in the Decap navigation editor.
 * @param {string} label - Visible row label to expand.
 */
function expandListItem(label) {
  cy.contains(
    '#nc-root .css-1gic66b-NestedObjectLabel',
    new RegExp(`^${escapeRegex(label)}$`),
  ).as('nestedLabel');
  cy.get('@nestedLabel').scrollIntoView();
  cy.get('@nestedLabel').prev().find('button').first().click({ force: true });
}

/**
 * Publish the current Decap entry.
 * @returns {void}
 */
function saveCmsEntry() {
  cy.contains('button, [role="button"]', /^Publish/).click({ force: true });
  cy.contains('button, [role="button"], span, div', /^Publish now$/).click({
    force: true,
  });
  cy.contains('Changes saved').should('be.visible');
}

/**
 * Wait for the YAML navigation file to contain the expected saved value.
 * @param {string} value - Text expected in the saved YAML file.
 */
function waitForNavigationFile(value) {
  cy.task('readTextFile', navigationFilePath, { timeout: 40000 }).should(
    'include',
    value,
  );
}

describe('Storybook navigation sync', () => {
  before(() => {
    Cypress.on('uncaught:exception', (error) => {
      if (
        error.message.includes(
          "No existing state found for follower with id: 'storybook/status'",
        )
      ) {
        return false;
      }

      return undefined;
    });
  });

  before(function () {
    cy.task('readTextFile', navigationFilePath).then((content) => {
      this.originalNavigation = content;
    });
  });

  after(function () {
    if (this.originalNavigation) {
      cy.task('writeTextFile', {
        filePath: navigationFilePath,
        content: this.originalNavigation,
      });
    }
  });

  it('shows all Decap-managed nav items in Storybook and follows saved nav edits', () => {
    visitStorybookManager();
    cy.get('#storybook-explorer-tree').should('contain.text', 'Alerts');
    cy.get('#storybook-explorer-tree').should('contain.text', originalHeading);

    visitNavigationEntry();
    expandListItem('Components');
    expandListItem(originalHeading);
    cy.get(`#nc-root input[value="${originalHeading}"]`).as('headingInput');
    cy.get('@headingInput').first().as('firstHeadingInput');
    cy.get('@firstHeadingInput').should('be.visible');
    cy.get('@firstHeadingInput').clear();
    cy.get('@firstHeadingInput').type(updatedHeading);
    cy.get('@firstHeadingInput').blur();
    saveCmsEntry();
    waitForNavigationFile(`heading: ${updatedHeading}`);

    visitStorybookManager();
    cy.get('#storybook-explorer-tree').should('contain.text', updatedHeading);
  });
});
