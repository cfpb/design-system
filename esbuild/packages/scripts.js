import { glob } from 'glob';

const jsPaths = [];

const entryFileList = glob.sync('./packages/cfpb-*/src/index.js');
entryFileList.forEach((file) => {
  jsPaths.push(file);
});

/**
 * @param {object} baseConfig - The base esbuild configuration.
 * @returns {object} The modified configuration object.
 */
function scripts(baseConfig) {
  return {
    ...baseConfig,
    entryPoints: jsPaths,
    target: 'es6',
  };
}

export { scripts, jsPaths };
