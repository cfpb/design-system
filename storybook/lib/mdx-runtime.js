import { evaluate } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import * as jsxRuntime from 'react/jsx-runtime';

const cache = new Map();

/**
 * @param {string} source
 * @returns {Promise<Function>}
 */
export async function compileMdxBody(source) {
  if (!cache.has(source)) {
    cache.set(
      source,
      evaluate(source, {
        ...jsxRuntime,
        remarkPlugins: [remarkGfm],
        useDynamicImport: false,
      }).then((module) => module.default),
    );
  }
  return cache.get(source);
}
