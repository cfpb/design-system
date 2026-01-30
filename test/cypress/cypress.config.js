import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'none',
      bundler: 'vite'
    },
    specPattern: 'cypress/component/**/*.cy.js'
  }
});
