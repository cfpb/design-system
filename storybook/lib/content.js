import YAML from 'yaml';
import slugify from 'slugify';

/**
 * @typedef {object} PageFrontMatter
 * @property {string} title
 * @property {string} slug
 * @property {string} section
 * @property {string} [eyebrow]
 * @property {string} [status]
 * @property {string} [description]
 * @property {string[] | string} [redirect_from]
 * @property {string} [last_udpated]
 */

/**
 * @typedef {object} ContentRegistryEntry
 * @property {PageFrontMatter} frontmatter
 * @property {string} body
 * @property {string} collectionName
 * @property {string} sourcePath
 */

const FRONTMATTER_PATTERN = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;
const TITLE_PATTERN =
  /(?:<VariationGroup|<Section)\s+title=(?:"([^"]+)"|'([^']+)')/g;

/**
 * @param {string} value
 * @returns {string}
 */
export function slugifyValue(value) {
  return slugify(value ?? '', { lower: true, strict: true });
}

/**
 * @param {string} source
 * @returns {{ frontmatter: PageFrontMatter, body: string}}
 */
export function parseMdxDocument(source) {
  const match = source.match(FRONTMATTER_PATTERN);
  if (!match) {
    throw new Error('Expected and MDX document with YAML frontmatter.');
  }

  const parsedFrontmatter = YAML.parse(match[1]) || {};
  const frontmatter = {
    ...parsedFrontmatter,
    slug: parsedFrontmatter.slug || slugifyValue(parsedFrontmatter.title),
  };

  return {
    frontmatter,
    body: match[2].trim(),
  };
}

/**
 * @param {string} body
 * @returns {string[]}
 */
export function extractJumpLinks(body) {
  const links = [];

  for (const match of body.matchAll(TITLE_PATTERN)) {
    const title = match[1] || match[2];
    if (title && !links.includes(title)) {
      links.push(title);
    }
  }

  return links;
}

/**
 * @param {PageFrontMatter} frontmatter
 * @param {string} body
 * @param {string} sourcePath
 * @param {string} collectionName
 * @returns {ContentRegistryEntry}
 */
export function createContentEntry(
  frontmatter,
  body,
  sourcePath,
  collectionName = 'storybook-pages',
) {
  return {
    frontmatter,
    body,
    sourcePath,
    collectionName,
  };
}

/**
 * @param {string} source
 * @param {string} sourcePath
 * @param {string} [collectionName]
 * @returns {ContentRegistryEntry}
 */
export function parseContentEntry(
  source,
  sourcePath,
  collectionName = 'storybook-pages',
) {
  const { frontmatter, body } = parseMdxDocument(source);
  return createContentEntry(frontmatter, body, sourcePath, collectionName);
}

/**
 * @param {ContentRegistryEntry} entry
 * @return {string}
 */
export function getEntryBasename(entry) {
  return entry.sourcePath
    .split('/')
    .pop()
    .replace(/\.(md|mdx)$/, '');
}
