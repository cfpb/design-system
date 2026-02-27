import { defineConfig } from 'vite';
import path from 'path';
import litcss from 'vite-plugin-lit-css';

export default defineConfig({
  plugins: [
    litcss({
      include: [
        path.resolve('packages/cfpb-design-system/src/elements/**/*.scss'),
      ],
      uglify: true,
    }),
  ],

  resolve: {
    alias: {
      '@cfpb/cfpb-design-system': path.resolve(
        __dirname,
        'packages/cfpb-design-system/',
      ),
    },
  },
});
