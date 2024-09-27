import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '2hroh3',
  e2e: {
    baseUrl: 'http://127.0.0.1:4000/design-system/',
    defaultCommandTimeout: 40000,
    specPattern: 'test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'test/cypress/support/e2e.js',
    excludeSpecPattern: 'test/cypress/e2e/**/*-helpers.cy.js',
    setupNodeEvents(/*on, config*/) {
      // implement node event listeners here
    },
  },
});
