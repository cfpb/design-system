import { getEntryBasename } from './content';

/**
 * @param {import('./content').ContentRegistryEntry} entry
 * @returns {string}
 */
export function buildAdminEntryUrl(entry) {
  // Storybook serves Decap as static assets, so link to the real admin HTML
  // entrypoint rather than the folder path. The has route after index.html
  // is what Decap uses to open the matching collection entry.
  //
  // The pilot still uses Decap's local proxy backend during local Storybook
  // work. That backend inserts a fake "Login" screen even though no real auth
  // happens. Use a local-only query flag so the Storybook edit link can skip
  // that extra click without changing the normal admin path we will keep for
  // the eventual real-auth cutover
  return `/design-system/admin/index.html?local_proxy_autologin=1#/collections/${entry.collectionName}/entries/${getEntryBasename(entry)}`;
}

/**
 * @param {import('./content').ContentRegistryEntry} entry
 * @returns {string}
 */
export function buildIssueUrl(entry) {
  return `https://github.com/cfpb/design-system/issues/new?assignees=&labels=content&template=content_issues.md&title=${encodeURIComponent(entry.frontmatter.title)}%3A+Add+issue+description`;
}
