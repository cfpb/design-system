import genericPreviewTemplate from './widgets/genericPreviewTemplate';
import navigationPreviewTemplate from './widgets/navigationPreviewTemplate';
import pagePreviewTemplate from './widgets/pagePreviewTemplate';

/**
 * Register the exsiting Jekyll-backend preview templates so legacy collections
 * keep working while the Storybook pilot runs in parallel.
 * @param {import('decap-cms-core').DecapCmsCore} CMS - Decap CMS singleton
 */
export function registerLegacyPreviewTemplates(CMS) {
  CMS.registerPreviewTemplate('special-pages', genericPreviewTemplate);
  CMS.registerPreviewTemplate('pages', pagePreviewTemplate);
  CMS.registerPreviewTemplate('side-navigation', navigationPreviewTemplate);
}
