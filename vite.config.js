import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: './docs',
  base: '/',
  resolve: {
    alias: {
      '@cfpb': path.resolve(__dirname, 'packages/design-system/src')
    }
  },
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
