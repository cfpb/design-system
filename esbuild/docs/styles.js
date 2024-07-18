import { pluginPostCssSass } from '../plugins/plugin-postcss-sass.js';
import autoprefixer from 'autoprefixer';

const cssPaths = ['./docs/assets/css/main.scss'];

/**
 * @param {object} baseConfig - The base esbuild configuration.
 * @returns {object} The modified configuration object.
 */
function styles(baseConfig) {
  return {
    ...baseConfig,
    entryPoints: cssPaths,
    plugins: baseConfig.plugins.concat([
      pluginPostCssSass({
        plugins: [autoprefixer],
      }),
    ]),
  };
}

export { styles, cssPaths };
