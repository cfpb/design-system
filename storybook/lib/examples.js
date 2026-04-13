import { replaceLegacyIconIncludes } from './icons';

const exampleModules = import.meta.glob('../../docs/_includes/examples/**/*', {
  eager: true,
  query: '?raw',
  import: 'default',
});

/**
 * @param {string} path
 * @returns {string}
 */
export function getExampleMarkup(path) {
  const normalizedPath = path.replace(/^\/+/, '');
  const lookupPath = `../../docs/_includes/${normalizedPath}`;
  const source = exampleModules[lookupPath] || '';
  return replaceLegacyIconIncludes(source);
}
