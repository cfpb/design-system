import fs from 'node:fs';
import esbuild from 'esbuild';
import htmlPlugin from '@chialab/esbuild-plugin-html';

//import { esbuildLiquidPlugin } from './plugins/esbuild-liquid-plugin.js';
import { replaceNodeBuiltIns } from './plugins/replace-node-builtins.js';
import { copy } from './copy.js';
import { scripts, jsPaths } from './scripts.js';
//import { styles, cssPaths } from './styles.js';

import environment from './environment.js';
const { processed } = environment.paths;

let esbuildLiquidPlugin = {
  name: 'liquid',
  setup(build) {
    build.sideEffects = false;

    build.onResolve({ filter: /.*\.html$/ }, (args) => {
      return {
        path: `${args.resolveDir}/${args.path}`,
        namespace: 'liquid',
      };
    });

    build.onLoad({ filter: /.*\.html$/, namespace: 'liquid' }, async (args) => {
      let contents = fs
        .readFileSync(args.path, { encoding: 'utf8', flag: 'r' })
        .trim();

      if (build.initialOptions && build.initialOptions.minify) {
        contents = contents
          .replace(/\>[\r\n ]+\</g, '><')
          .replace(/(<.*?>)|\s+/g, (m, $1) => ($1 ? $1 : ' '))
          .replace(/(-%} \{%-)/, '-%}{%-')
          .trim();
      }

      return {
        contents: JSON.stringify(contents),
        loader: 'json',
        watchFiles: [args.path],
      };
    });
  },
};

const baseConfig = {
  logLevel: 'info',
  bundle: true,
  minify: true,
  sourcemap: true,
  external: ['*.png', '*.woff', '*.woff2', '*.gif'],
  loader: {
    '.js': 'jsx',
    '.svg': 'text',
  },
  outdir: './docs/dist/',
  outbase: './docs/assets/',
  plugins: [replaceNodeBuiltIns(), esbuildLiquidPlugin],
};

const arg = process.argv.slice(2)[0];

(async function () {
  const scriptsConfig = scripts(baseConfig);
  /*const stylesConfig = styles(baseConfig);
  const mergedConfig = { ...scriptsConfig, ...stylesConfig };
  mergedConfig.entryPoints = jsPaths.concat(cssPaths);
  */
  const mergedConfig = { ...scriptsConfig };
  if (arg === 'watch') {
    const ctx = await esbuild.context(mergedConfig);
    await ctx.watch();
    // Not disposing context here as the user will ctrl+c to end watching.
  } else if (arg === 'scripts') {
    const ctx = await esbuild.context(scriptsConfig);
    await ctx.rebuild();
    return await ctx.dispose();
  } else if (arg === 'styles') {
    const ctx = await esbuild.context(stylesConfig);
    await ctx.rebuild();
    return await ctx.dispose();
  } else {
    const ctx = await esbuild.context(mergedConfig);
    await ctx.rebuild();
    await ctx.dispose();
  }
  /*
  await copy(baseConfig);*/
})();
