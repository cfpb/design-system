/// <reference types="vite/client" />
import { html } from 'lit';

/**
 * Helpers that are shared across `*.stories.ts` files
 *
 * Things that go here should be Storybook-only. Component behavior helpers
 * belong in `test/plugins/element-helpers.js`.
 *
 */

/**
 * Every icon name the DS ships is taken from the SVG filenames, so a new icon
 * shows up in the controls withouth anyone editing a story.
 *
 * `import.meta.glob` is resolved by Vite and is realtive to this file, so the path
 * is from `.storybook/`.
 */
export const iconNames: string[] = Object.keys(
  import.meta.glob(
    '../../package/cfpb-design-system/src/components/cfpb-icons/icons/*.svg',
  ),
)
  .map((path) => path.split('/').pop()!.replace('.svg', ''))
  .sort();

/**
 * A Storybook select control listing every icon name.
 *
 * The empty string is first and is the default, so a component that takes an
 * optional icon starts out without one.
 * @returns {object} An argType control definition for an icon name property
 */
export function iconControl() {
  return {
    control: 'select' as const,
    options: ['', ...iconNames],
  };
}

/**
 * Make sure that components that show menus don't get cut off by the Story canvas.
 *
 * Storybook sizes the canvas iframe based on the story's content, and the open
 * menu extends past the bottom of the iframe and appears cut off. Specifically,
 * `cfpb-select` and `cfpb-form-search`.
 * @param {string} [minHeight] - CSS length for the reserved space.
 * @returns {(story: () => unknown) => unknown} A Storybook decorator.
 */
export function reserveOverlayRoom(minHeight = '20rem') {
  return (story: () => unknown) =>
    html`<div style="min-height: ${minHeight}">${story()}</div>`;
}
