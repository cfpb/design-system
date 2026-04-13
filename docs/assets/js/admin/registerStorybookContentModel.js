import { buildStorybookMdxBody } from '../../../../storybook/lib/structured-content';

let hasRegisteredStorybookContentModel = false;

/**
 * Register Storybook pilot save-time hooks that regenerates the MDX body from
 * structured Decap fields.
 * @param {import('decap-cms-core').DecapCmsCore} CMS - Decap CMS singleton
 */
export function registerStorybookContentModel(CMS) {
  if (hasRegisteredStorybookContentModel) {
    return;
  }

  CMS.registerEventListener({
    name: 'preSave',
    handler: ({ entry, collection }) => {
      const collectionName =
        entry?.get?.('collection') ?? collection?.get?.('name');

      if (collectionName !== 'storybook-pages') {
        return undefined;
      }

      const data = entry.get('data');
      // Keep the structured Decap fields as the editing source of truth and
      // regenerate the MDX body on save so editors do not have to hand maintain
      // implemenation syntax.
      const generateBody = buildStorybookMdxBody(data.toJS());

      return data.set('body', generateBody);
    },
  });

  hasRegisteredStorybookContentModel = true;
}
