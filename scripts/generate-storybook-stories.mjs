import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { parseContentEntry, slugifyValue } from '../storybook/lib/content.js';
import {
  getNavigationPageEntries,
  parseNavigationTree,
} from '../storybook/lib/navigation.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const navigationPath = path.join(projectRoot, 'docs/_data/side-navigation.yml');
const contentDir = path.join(projectRoot, 'storybook/content/pages');
const legacyPagesDir = path.join(projectRoot, 'docs/pages');
const outputDir = path.join(projectRoot, 'storybook/stories/generated');

function toExportName(value) {
  const sanitized = value.replace(/[^a-zA-Z0-9]+/g, ' ').trim();
  const words = sanitized.split(/\s+/).filter(Boolean);
  const baseName = words.length
    ? words.map((word) => word[0].toUpperCase() + word.slice(1)).join('')
    : 'Story';

  return /^[A-Z]/.test(baseName) ? baseName : `Story${baseName}`;
}

function escapeJsString(value) {
  return value.replaceAll('\\', '\\\\').replaceAll("'", "\\'");
}

async function generateStories() {
  const [navigationSource, contentFiles, legacyFiles] = await Promise.all([
    fsp.readFile(navigationPath, 'utf8'),
    fsp.readdir(contentDir),
    fsp.readdir(legacyPagesDir),
  ]);

  const navigationTree = parseNavigationTree(navigationSource);
  const navigationEntries = getNavigationPageEntries(navigationTree);
  const mdxFiles = contentFiles.filter((fileName) => fileName.endsWith('.mdx'));
  const legacyPageFiles = legacyFiles.filter((fileName) =>
    fileName.endsWith('.md'),
  );
  const mdxEntriesByTitle = new Map();
  const legacyEntriesByTitle = new Map();

  await fsp.mkdir(outputDir, { recursive: true });

  for (const fileName of mdxFiles) {
    const sourcePath = path.join(contentDir, fileName);
    const source = await fsp.readFile(sourcePath, 'utf8');
    const entry = parseContentEntry(
      source,
      `storybook/content/pages/${fileName}`,
    );
    mdxEntriesByTitle.set(entry.frontmatter.title, {
      entry,
      fileName,
    });
  }

  for (const fileName of legacyPageFiles) {
    const sourcePath = path.join(legacyPagesDir, fileName);
    const source = await fsp.readFile(sourcePath, 'utf8');
    const entry = parseContentEntry(source, `docs/pages/${fileName}`, 'pages');
    legacyEntriesByTitle.set(entry.frontmatter.title, {
      entry,
      fileName,
    });
  }

  const nextFileNames = new Set();

  for (const [index, navigationEntry] of navigationEntries.entries()) {
    const migratedEntry = mdxEntriesByTitle.get(navigationEntry.page);
    const legacyEntry = legacyEntriesByTitle.get(navigationEntry.page);
    const storyExport = toExportName(navigationEntry.page);
    const pageSlug = slugifyValue(navigationEntry.page);
    const title = navigationEntry.title;
    const sectionSlug = slugifyValue(navigationEntry.path[0] || 'website');
    // Prefix files with the current nav index so Storybook preserves the same
    // ordering editors see in Decap's side-navigation.yml.
    const fileStem = `${String(index + 1).padStart(3, '0')}-${pageSlug}`;
    const outputFileName = `${fileStem}.stories.jsx`;
    const placeholderBody = `This page has not been migrated to the Storybook pilot yet.

Use the edit button to continue editing the source entry in Decap CMS.`;
    nextFileNames.add(outputFileName);
    // Generate a placeholder story for unmigrated entries so Storybook's left
    // rail can already mirror the Decap-managed navigation tree during the
    // stepwise migration, even before every page has been ported to MDX.
    const storySource = migratedEntry
      ? `import React from 'react';
import { createRoot } from 'react-dom/client';
import rawDocument from '../../content/pages/${migratedEntry.fileName}?raw';
import { parseContentEntry } from '../../lib/content';
import { SitePage } from '../../components/SitePage';

const entry = parseContentEntry(
  rawDocument,
  'storybook/content/pages/${migratedEntry.fileName}',
);

export default {
  title: '${escapeJsString(title)}',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ${storyExport} = {
  render: () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<SitePage entry={entry} />);
    return container;
  },
};
`
      : `import React from 'react';
import { createRoot } from 'react-dom/client';
import { createContentEntry } from '../../lib/content';
import { SitePage } from '../../components/SitePage';

const entry = createContentEntry(
  {
    title: '${escapeJsString(navigationEntry.page)}',
    slug: '${escapeJsString(pageSlug)}',
    section: '${escapeJsString(sectionSlug)}',
    eyebrow: '${escapeJsString(navigationEntry.path[0] || 'Design system website')}',
  },
  \`${placeholderBody}\`,
  '${escapeJsString(
    legacyEntry?.entry.sourcePath || `storybook/content/pages/${pageSlug}.mdx`,
  )}',
  '${legacyEntry?.entry.collectionName || 'storybook-pages'}',
);

export default {
  title: '${escapeJsString(title)}',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ${storyExport} = {
  render: () => {
    const container = document.createElement('div');
    const root = createRoot(container);
    root.render(<SitePage entry={entry} />);
    return container;
  },
};
`;

    await fsp.writeFile(path.join(outputDir, outputFileName), storySource);
  }

  const existingFiles = await fsp.readdir(outputDir);

  for (const fileName of existingFiles) {
    if (fileName.endsWith('.stories.jsx') && !nextFileNames.has(fileName)) {
      await fsp.unlink(path.join(outputDir, fileName));
    }
  }
}

async function watchAndGenerate() {
  await generateStories();

  const debounceTimers = new Map();
  const watchers = [
    fs.watch(navigationPath, () => scheduleGenerate('navigation')),
    fs.watch(contentDir, () => scheduleGenerate('content')),
  ];

  function scheduleGenerate(key) {
    clearTimeout(debounceTimers.get(key));
    debounceTimers.set(
      key,
      setTimeout(async () => {
        try {
          // fs.watch can emit bursts for a single save. Debouncing keeps local
          // Storybook regeneration predictable while editors are updating nav or
          // pilot MDX content in Decap.
          await generateStories();
        } catch (error) {
          console.error(error);
        }
      }, 100),
    );
  }

  const shutdown = async () => {
    for (const watcher of watchers) {
      watcher.close();
    }
    process.exit(0);
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  await new Promise(() => {});
}

if (process.argv.includes('--watch')) {
  await watchAndGenerate();
} else {
  await generateStories();
}
