import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/vitest.setup.js',
    include: ['packages/**/*.spec.js'],
    // Handle the CSS imports that are in JS files:
    css: true,
    coverage: {
      reportsDirectory: './test/unit-test-coverage',
    },
  },
});
