import { pluginPostCssSass } from '../plugins/plugin-postcss-sass.js';
import autoprefixer from 'autoprefixer';

const jsPaths = [
  './docs/assets/js/interstitial.js',
  './docs/assets/js/main.js',
  './docs/assets/js/admin/decap-cms.js',
  './docs/assets/js/admin/main-preview.js',
  './docs/assets/js/search.js',
];

/**
 * @param {object} baseConfig - The base esbuild configuration.
 * @returns {object} The modified configuration object.
 */
function scripts(baseConfig) {
  return {
    ...baseConfig,
    entryPoints: jsPaths,
    target: 'es6',
    plugins: baseConfig.plugins.concat([
      pluginPostCssSass({
        plugins: [autoprefixer],
      }),
    ]),
  };
}

export { scripts };
