import slugify from 'slugify';
import markdownIt from 'markdown-it';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const ICON_REGEX = /{%\s+include\s+["']?\/?icons\/([\w-]+)\.svg["']?\s+%}/g;

export default function (eleventyConfig) {
  // Get baseurl from environment or use default
  const baseurl = process.env.BASEURL || '/design-system';

  // Copy assets
  eleventyConfig.addPassthroughCopy('docs/assets');
  eleventyConfig.addPassthroughCopy('docs/images');
  eleventyConfig.addPassthroughCopy('docs/admin');
  eleventyConfig.addPassthroughCopy('docs/fonts');
  eleventyConfig.addPassthroughCopy({ 'docs/dist': 'dist' });

  // Watch for changes
  eleventyConfig.addWatchTarget('docs/assets/');
  eleventyConfig.addWatchTarget('docs/dist/');

  // Set up markdown
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });
  eleventyConfig.setLibrary('md', md);

  // Configure Liquid options
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strictFilters: false,
  });

  // Add filters
  eleventyConfig.addFilter('slugify', function (str) {
    if (!str) return '';
    return slugify(str, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
  });

  eleventyConfig.addFilter('relative_url', function (url) {
    if (!url) return baseurl;
    return url.startsWith('/') ? baseurl + url : baseurl + '/' + url;
  });

  const renderIcons = (content) => {
    if (!content) return '';
    const iconsDir = path.resolve('docs/_includes/icons');
    return content.replace(ICON_REGEX, (match, icon) => {
      const iconPath = path.join(iconsDir, `${icon}.svg`);
      if (!fs.existsSync(iconPath)) return match;
      return fs.readFileSync(iconPath, { encoding: 'utf8', flag: 'r' }).trim();
    });
  };

  eleventyConfig.addFilter('render_icons', function (content) {
    return renderIcons(content);
  });

  eleventyConfig.addFilter('markdownify', function (content) {
    if (!content) return '';
    return md.render(renderIcons(content));
  });

  // Custom collection for pages by section
  eleventyConfig.addCollection('pagesBySection', function (collectionApi) {
    const pages = collectionApi.getFilteredByGlob('docs/pages/**/*.md');
    const sections = {};

    pages.forEach((page) => {
      const section = page.data.section || 'other';
      if (!sections[section]) {
        sections[section] = [];
      }
      sections[section].push(page);
    });

    return sections;
  });

  // Add global data
  const navigationData = yaml.load(
    fs.readFileSync('docs/_data/side-navigation.yml', 'utf8'),
  );

  eleventyConfig.addGlobalData('site', {
    title: 'Design System',
    name: 'Design System',
    description: "CFPB's design system",
    org: 'CFPB',
    repository: 'cfpb/design-system',
    baseurl: baseurl,
    data: {
      sideNavigation: navigationData,
    },
  });

  // Custom permalinks
  eleventyConfig.addGlobalData('eleventyComputed', {
    permalink: (data) => {
      // Skip if permalink is already set
      if (data.permalink) return data.permalink;

      // Handle homepage
      if (data.is_homepage) {
        return '/index.html';
      }

      const title = data.title;
      const section = data.section;

      if (!title || !section) {
        return false; // Use default
      }

      // Slugify the title
      const slug = slugify(title, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      });

      // Look out for section index pages
      if (section === slug) {
        return `/${section}/index.html`;
      }

      return `/${section}/${slug}/index.html`;
    },
  });

  // Add date filters
  eleventyConfig.addFilter('date', function (date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString();
  });

  return {
    dir: {
      input: 'docs',
      output: 'docs/_site/design-system',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
    templateFormats: ['html', 'md', 'liquid', 'njk'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    pathPrefix: baseurl + '/',
  };
}
