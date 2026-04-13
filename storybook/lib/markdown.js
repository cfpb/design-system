import { marked } from 'marked';
import { replaceLegacyIconIncludes } from './icons';

/**
 * @param {string} value
 * @returns {string}
 */
export function renderMarkdown(value) {
  if (!value) {
    return '';
  }

  return replaceLegacyIconIncludes(marked.parse(value, { async: false }));
}
