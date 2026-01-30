import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/design-system/src/index.js'),
      name: 'CFPBDesignSystem',
      fileName: (format) => `cfpb-design-system.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
});
