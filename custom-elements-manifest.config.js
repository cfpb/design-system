import { jsxTypesPlugin } from '@wc-toolkit/jsx-types';

/**
 * CEM analyzer plugin that sorts 'modules' (components) by path before the manifest is
 * written out. `globby`'s file discovery order isn't stable across runs or
 * machines, which would cause render only diffs even when source hasn't changed. MUST
 * run before `jsxTypesPlugin` in the plugin array so it sees the sorted order too.
 * @returns {import('@custom-elements-manifest/analyzer').Plugin} - Returns the sorted modules based on path
 */
function sortModulesPlugin() {
  return {
    name: 'sort-modules',
    packageLinkPhase({ customElementsManifest }) {
      customElementsManifest.modules.sort((a, b) =>
        a.path.localeCompare(b.path),
      );
    },
  };
}

export default {
  globs: ['packages/cfpb-design-system/src/elements/**/*.js'],
  exclude: ['**/*.spec.js', '**/utilities/**'],
  outdir: 'storybook',
  litelement: true,
  plugins: [
    sortModulesPlugin(),
    jsxTypesPlugin({
      outdir: 'storybook',
      fileName: 'custom-elements-types.d.ts',
      // Generate imports relative to the storybook/ output dir
      componentTypePath: (_name, _tag, modulePath) => `../${modulePath}`,
    }),
  ],
};
