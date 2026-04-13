import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import path from 'path';

const specificConfig = defineConfig({
  root: path.resolve(__dirname, 'docs/assets'),
  base: '/dist/',

  build: {
    modulePreload: false,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 1300,
    outDir: path.resolve(__dirname, 'docs/dist'),
    emptyOutDir: true,

    rolldownOptions: {
      input: {
        main: path.resolve(__dirname, 'docs/assets/js/main.js'),
        'admin-decap-cms': path.resolve(
          __dirname,
          'docs/assets/js/admin/decap-cms.js',
        ),
        'admin-main-preview': path.resolve(
          __dirname,
          'docs/assets/js/admin/main-preview.js',
        ),
        interstitial: path.resolve(__dirname, 'docs/assets/js/interstitial.js'),
        search: path.resolve(__dirname, 'docs/assets/js/search.js'),
        styles: path.resolve(__dirname, 'docs/assets/js/styles.js'),
      },
      output: {
        manualChunks(id) {
          // The admin bundle is substantially larger once the Storybook preview
          // renderer is loaded into Decap. Keep the major subsystems split so the
          // build stays inspectable and Storybook-served admin assets do not
          // collapse into a single opaque chunk.
          if (
            id.includes('/node_modules/react') ||
            id.includes('/node_modules/react-dom')
          ) {
            return 'cms-react';
          }

          if (id.includes('/node_modules/decap-cms-core/')) {
            return 'cms-decap-core';
          }

          if (id.includes('/node_modules/decap-cms-backend-')) {
            return 'cms-decap-backends';
          }

          if (id.includes('/node_modules/decap-cms-widget-')) {
            return 'cms-decap-widgets';
          }

          if (
            id.includes('/node_modules/decap-cms-lib-') ||
            id.includes('/node_modules/decap-cms-ui-') ||
            id.includes('/node_modules/decap-cms-locales/') ||
            id.includes('/node_modules/immutable') ||
            id.includes('/node_modules/redux') ||
            id.includes('/node_modules/react-redux')
          ) {
            return 'cms-decap-vendor';
          }

          if (id.includes('/node_modules/codemirror')) {
            return 'cms-codemirror';
          }

          if (
            id.includes('/docs/assets/js/admin/widgets/') ||
            id.includes('/storybook/components/') ||
            id.includes('/storybook/lib/') ||
            id.includes('/storybook/content/')
          ) {
            return 'cms-preview';
          }

          if (id.includes('/packages/cfpb-design-system/')) {
            return 'cms-design-system';
          }

          if (
            id.includes('/node_modules/marked') ||
            id.includes('/node_modules/liquidjs') ||
            id.includes('/node_modules/yaml') ||
            id.includes('/node_modules/slugify') ||
            id.includes('/node_modules/lit')
          ) {
            return 'cms-preview-vendor';
          }

          return undefined;
        },
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'index.css' : '[name][extname]',
      },
    },
  },
});

export default mergeConfig(baseConfig, specificConfig);
