import { defineConfig } from 'cypress';
import viteConfig from './vite.config.packages.js';

export default defineConfig({
  projectId: '2hroh3',

  e2e: {
    baseUrl: 'http://127.0.0.1:4000/design-system/',
    defaultCommandTimeout: 40000,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    excludeSpecPattern: 'cypress/e2e/**/*-helpers.cy.js',
    setupNodeEvents(/*on, config*/) {
      // implement node event listeners here
    },
  },

  component: {
    supportFile: 'cypress/support/component.js',
    devServer: {
      framework: 'cypress-ct-lit',
      bundler: 'vite',
      viteConfig: viteConfig,
    },
    indexHtmlFile: 'cypress/support/component-index.html',
  },
  experimentalWebKitSupport: true,
});
