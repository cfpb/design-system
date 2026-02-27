import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import path from 'path';

const specificConfig = defineConfig({
  build: {
    cssCodeSplit: false,
    outDir: path.resolve('packages/cfpb-design-system/dist'),

    lib: {
      entry: path.resolve('packages/cfpb-design-system/src/index.js'),
      formats: ['es'],
      fileName: () => 'index.js',
    },

    rollupOptions: {
      output: {
        assetFileNames: 'index.css',
      },
    },
  },
});

export default mergeConfig(baseConfig, specificConfig);
