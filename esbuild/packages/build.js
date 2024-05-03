import esbuild from 'esbuild';

import { copy } from './copy.js';
import { scripts, jsPaths } from './scripts.js';
import { styles, cssPaths } from './styles.js';

const baseConfig = {
  logLevel: 'info',
  bundle: true,
  minify: true,
  sourcemap: true,
  external: ['*.png', '*.woff2', '*.gif'],
  loader: {
    '.svg': 'text',
  },
  outdir: './tmp/',
  outbase: './packages/',
  plugins: [],
};

(async function () {
  const scriptsConfig = scripts(baseConfig);
  const stylesConfig = styles(baseConfig);
  const mergedConfig = { ...scriptsConfig, ...stylesConfig };
  mergedConfig.entryPoints = jsPaths.concat(cssPaths);

  const ctx = await esbuild.context(mergedConfig);

  await ctx.rebuild();
  await ctx.dispose();
  await copy();
})();
