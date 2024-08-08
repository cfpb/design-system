import esbuild from 'esbuild';

import { copy } from './copy.js';
import { scripts } from './scripts.js';

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
  const ctx = await esbuild.context(scriptsConfig);

  await ctx.rebuild();
  await ctx.dispose();
  await copy();
})();
