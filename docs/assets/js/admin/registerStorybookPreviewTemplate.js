import storybookPagePreviewTemplate from './widgets/storybookPagePreviewTemplate';

/**
 * Register the Storybook-specific preview template for the "storybook-pages" collection.
 * @param {import('decap-cms-core').DecapCmsCore} CMS - Decap CMS singleton
 */
export function registerStorybookPreviewTemplate(CMS) {
  CMS.registerPreviewTemplate('storybook-pages', storybookPagePreviewTemplate);
  CMS.registerPreviewStyle('/design-system/dist/index.css');
}
