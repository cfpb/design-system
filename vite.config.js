import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.', // repo root
  build: {
    outDir: 'docs/assets/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'docs/assets/src/main.js')
      }
    }
  },
  resolve: {
    alias: {
      '@cfpb': path.resolve(__dirname, 'packages/design-system/src')
    }
  }
});
