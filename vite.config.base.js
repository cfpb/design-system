import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  css: {
    transformer: 'lightningcss',
  },

  resolve: {
    alias: {
      '@cfpb/cfpb-design-system': path.resolve(
        import.meta.dirname,
        'packages/cfpb-design-system/',
      ),
    },
  },
});
