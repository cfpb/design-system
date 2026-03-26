import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import path from 'node:path';

const specificConfig = defineConfig({
  build: {
    cssCodeSplit: false,
    outDir: path.resolve('packages/cfpb-design-system/dist'),

    lib: {
      entry: path.resolve('packages/cfpb-design-system/src/index.js'),
      formats: ['es'],
      fileName: () => 'index.js',
    },

    rolldownOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith('.css') ? 'index.css' : '[name][extname]',
      },
    },
  },
});

export default mergeConfig(baseConfig, specificConfig);
