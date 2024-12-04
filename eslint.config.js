// Run `npx @eslint/config-inspector` to inspect the config.

import globals from 'globals';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import pluginCypress from 'eslint-plugin-cypress/flat';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      '.yarn/',
      'docs/_site/',
      'docs/dist/',
      'test/unit-test-coverage/',
      'packages/cfpb-design-system/dist/',
    ],
  },
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  jsdoc.configs['flat/recommended'],
  jsxA11y.flatConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  pluginCypress.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 2023,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.ts', '.d.ts', '.tsx'],
        },
        typescript: {
          // This project doesn't use typescript but the typescript
          // resolver solves an issue with package.json `exports`
          // See https://github.com/cfpb/design-system/pull/2133
        },
      },
      react: {
        version: 'detect',
      },
    },
    // Some plugins are automatically included.
    // plugins: {},
    rules: {
      'jsdoc/require-hyphen-before-param-description': 'warn',
      'no-console': ['warn'],
      'no-use-before-define': ['error', 'nofunc'],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      'no-var': ['error'],
      'prefer-const': ['error'],
      radix: ['error'],
    },
  },
];
