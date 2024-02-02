import { getAll } from './utils.js';

const routes = `../packages/`;

const jsPaths = [
  // packages
  ...getAll(`${routes}/cfpb-**.js`)
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
  };
}

export { scripts, jsPaths };
