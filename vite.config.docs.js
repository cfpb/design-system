import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import path from 'path';

const specificConfig = defineConfig({
  root: path.resolve(__dirname, 'docs/assets'),
  base: '/dist/',

  build: {
    modulePreload: false,
    cssCodeSplit: false,
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
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'index.css' : '[name][extname]',
      },
    },
  },
});

export default mergeConfig(baseConfig, specificConfig);
