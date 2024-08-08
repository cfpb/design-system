import esbuild from 'esbuild';

import { pluginEsbuildLiquid } from '../plugins/plugin-esbuild-liquid.js';
import { scripts } from './scripts.js';

const baseConfig = {
  logLevel: 'info',
  bundle: true,
  minify: true,
  sourcemap: true,
  external: ['*.png', '*.woff2', '*.gif'],
  loader: {
    '.js': 'jsx',
    '.svg': 'text',
  },
  outdir: './docs/dist/',
  outbase: './docs/assets/js/',
  plugins: [pluginEsbuildLiquid],
};

const arg = process.argv.slice(2)[0];

(async function () {
  const scriptsConfig = scripts(baseConfig);

  const ctx = await esbuild.context(scriptsConfig);
  if (arg === 'watch') {
    await ctx.watch();
    // Not disposing context here as the user will ctrl+c to end watching.
  } else {
    await ctx.rebuild();
    await ctx.dispose();
  }
})();
