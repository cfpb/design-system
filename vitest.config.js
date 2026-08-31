import { defineConfig } from 'vitest/config';
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = import.meta.dirname;

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    coverage: {
      reportsDirectory: './test/unit-test-coverage',
      include: ['**/packages/**/src/**/*.js'],
      exclude: ['**/*.{scss,css}'],
    },
    projects: [
      {
        extends: true,
        test: {
          // Naming this test so it can run on its own with `vitest --project-unit `
          // this skips the slower browser project, and so it will be labeled
          // `|unit|` instead of `|0|` in test output.
          name: 'unit',
          globals: true,
          environment: 'jsdom',
          setupFiles: './test/vitest.setup.js',
          include: ['packages/**/*.spec.js'],
          // Handle the CSS imports that are in JS files:
          css: true,
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
        },
      },
    ],
  },
});
