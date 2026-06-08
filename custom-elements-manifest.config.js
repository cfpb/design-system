import { jsxTypesPlugin } from '@wc-toolkit/jsx-types';

export default {
  globs: ['packages/cfpb-design-system/src/elements/**/*.js'],
  exclude: ['**/*.spec.js', '**/utilities/**'],
  outdir: 'storybook',
  litelement: true,
  plugins: [
    jsxTypesPlugin({
      outdir: 'storybook',
      fileName: 'custom-elements-types.d.ts',
      // Generate imports relative to the storybook/ output dir
      componentTypePath: (_name, _tag, modulePath) => `../${modulePath}`,
    }),
  ],
};
