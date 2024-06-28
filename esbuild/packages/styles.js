import { pluginPostCssSass } from '../plugins/plugin-postcss-sass.js';
import autoprefixer from 'autoprefixer';
import { glob } from 'glob';

const cssPaths = [];

const entryFileList = glob.sync('./packages/cfpb-*/src/cfpb-*.scss');
entryFileList.forEach((file) => {
  cssPaths.push(file);
});

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
