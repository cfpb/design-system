// style-dictionary.config.js — ESM
import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';
import { getReferences, usesReferences } from 'style-dictionary/utils';

const baseDir = 'packages/cfpb-design-system/src';
const tokenBase = path.resolve(baseDir, 'tokens');

// ---- helpers ----
const toPosix = (p) => p.split(path.sep).join('/');
const toAbsPosix = (p) => toPosix(path.isAbsolute(p) ? p : path.resolve(p));

function getAllDirs(dirPath) {
  const out = [];
  for (const dirent of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (dirent.isDirectory() && !dirent.name.startsWith('.')) {
      const full = path.join(dirPath, dirent.name);
      out.push(full, ...getAllDirs(full));
    }
  }
  return out;
}

// ---- discover all token json files and prepare per-file entries ----
const tokenDirs = [tokenBase, ...getAllDirs(tokenBase)];
const files = [];
const filtersToRegister = []; // store to register after we know full paths

for (const dirPath of tokenDirs) {
  const jsonFiles = fs.readdirSync(dirPath).filter((f) => f.endsWith('.json'));
  for (const jsonFile of jsonFiles) {
    const fullPathAbsPosix = toAbsPosix(path.join(dirPath, jsonFile));
    const relDir = path.relative(tokenBase, dirPath); // '' if at root

    const cssFileName = path.basename(jsonFile, '.json') + '.css';
    const destination =
      relDir === '' ? cssFileName : `${toPosix(relDir)}/${cssFileName}`;

    const filterName = `filter__${(relDir || '_')
      .replace(/[^a-zA-Z0-9_/-]/g, '_') }__${jsonFile.replace(/[^a-zA-Z0-9_.-]/g, '_')}`
      .replace(/[^a-zA-Z0-9_]/g, '_');

    filtersToRegister.push({ filterName, fullPathAbsPosix });

    files.push({
      destination,
      format: 'css/variables',
      filter: filterName,
      options: {
        // keep references as var(--...) in the output
        outputReferences: true,
        selector: ':host', // <-output to shadow dom
      },
    });
  }
}

// ---- registrations (v5 shape) ----
// Name transform: drop the first segment from token.path, kebab-case the rest.
StyleDictionary.registerTransform({
  name: 'name/kebab-no-top',
  type: 'name',
  transform: (token) => {
    const parts = Array.isArray(token.path) ? token.path.slice(1) : [];
    const basis = parts.length > 0 ? parts.join('-') : (token.name || '');

    return basis
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // fooBar -> foo-bar
      .replace(/[\s_]+/g, '-')               // spaces/underscores -> hyphen
      .replace(/-+/g, '-')                   // collapse repeats
      .toLowerCase();
  },
});

// Transform group using our custom name transform + standard CSS transforms
StyleDictionary.registerTransformGroup({
  name: 'css/without-group',
  transforms: [
    'attribute/cti',
    'name/kebab-no-top',
    'time/seconds',
    'size/px',
    'color/css',
  ],
});

// Per-file filters (match by absolute, POSIX-normalized filePath)
for (const { filterName, fullPathAbsPosix } of filtersToRegister) {
  StyleDictionary.registerFilter({
    name: filterName,
    filter: (token) => toAbsPosix(token.filePath) === fullPathAbsPosix,
  });
}

StyleDictionary.registerFormat({
  name: 'markdown/token-table',
  format: ({ dictionary, file, options }) => {
    const {
      frontMatter,
      documentHeading = '# Design Tokens',
      intro,
      groupHeadingLevel = 2,
      outputReferences = false,
      outputReferenceFallbacks = false,
    } = file?.options || {};
    const usesDtcg = options?.usesDtcg ?? false;

    const fmBlock = frontMatter
      ? `---\n${Object.entries(frontMatter)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n')}\n---\n\n`
      : '';

    const headingPrefix = '#'.repeat(
      Math.max(1, Number(groupHeadingLevel) || 2),
    );

    const normalizeValue = (value) => {
      if (value === null || value === undefined) {
        return '';
      }
      if (typeof value === 'string') {
        return value.replace(/\n/g, ' ');
      }
      if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
      }
      return JSON.stringify(value);
    };

    const resolveReferencesIfNeeded = (token) => {
      const originalValue =
        token?.original?.value ?? token?.original?.$value ?? token?.original;
      const transformedValue =
        token?.value !== undefined ? token.value : token?.$value;

      if (
        !outputReferences ||
        originalValue === undefined ||
        !usesReferences(originalValue)
      ) {
        return transformedValue;
      }

      const refs =
        getReferences(originalValue, dictionary.tokens, {
          unfilteredTokens: dictionary.unfilteredTokens,
          usesDtcg,
          warnImmediately: false,
        }) || [];

      const originalIsObject =
        typeof originalValue === 'object' && originalValue !== null;

      let valueToFormat = originalIsObject
        ? transformedValue
        : originalValue;

      refs.forEach((ref) => {
        if (!ref?.name) {
          return;
        }

        const refValue = ref.$value ?? ref.value;
        const replacement =
          outputReferenceFallbacks && refValue !== undefined
            ? `var(--${ref.name}, ${refValue})`
            : `var(--${ref.name})`;

        const searchPattern = originalIsObject
          ? refValue
          : new RegExp(`{${ref.path.join('\\.')}(\\.\\$?value)?}`, 'g');

        if (!searchPattern) {
          return;
        }

        valueToFormat = `${valueToFormat}`.replace(searchPattern, replacement);
      });

      return valueToFormat;
    };

    const formatValue = (token) =>
      normalizeValue(resolveReferencesIfNeeded(token));

    const formatName = (token) => {
      if (token?.name) {
        return `--${token.name}`;
      }
      if (Array.isArray(token?.path)) {
        return `--${token.path.join('-')}`;
      }
      return token?.value || '';
    };

    const humanize = (slug) =>
      slug
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());

    const tokenGroups = dictionary.allTokens.reduce((acc, token) => {
      const groupKey = token.path?.[0] || 'tokens';
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(token);
      return acc;
    }, {});

    const groupsMarkdown = Object.keys(tokenGroups)
      .sort((a, b) => a.localeCompare(b))
      .map((group) => {
        const rows = tokenGroups[group]
          .slice()
          .sort((a, b) => formatName(a).localeCompare(formatName(b)))
          .map((token) => {
            const type = token.type || token.attributes?.category || '';
            return `| \`${formatName(token)}\` | \`${formatValue(
              token,
            )}\` | ${type} |`;
          });

        if (rows.length === 0) {
          return '';
        }

        return [
          `${headingPrefix} ${humanize(group)}`,
          '| Token | Value | Type |',
          '| --- | --- | --- |',
          ...rows,
          '',
        ].join('\n');
      })
      .filter(Boolean)
      .join('\n');

    const introBlock = intro ? `${intro}\n\n` : '';

    return `${fmBlock}${documentHeading}\n\n${introBlock}${groupsMarkdown}`.trimEnd() + '\n';
  },
});

// ---- export the config object ----
export default {
  // Keep all tokens loaded so references can be resolved / named consistently
  source: [`${toPosix(tokenBase)}/**/*.json`],

  // Logging behavior equivalent to your build.mjs
  log: {
    warnings: logWarningLevels.warn,          // 'warn' | 'error' | 'disabled'
    verbosity: logVerbosityLevels.verbose,    // 'default' | 'silent' | 'verbose'
    errors: {
      brokenReferences: logBrokenReferenceLevels.throw, // 'throw' | 'console'
    },
  },

  platforms: {
    css: {
      // Use our custom group to drop top-level segment
      transformGroup: 'css/without-group',
      buildPath: `${baseDir}/elements/`,
      files,
    },
    docs: {
      transformGroup: 'css/without-group',
      buildPath: 'docs/pages/',
      files: [
        {
          destination: 'tokens.md',
          format: 'markdown/token-table',
          options: {
            frontMatter: {
              title: 'Tokens',
              layout: 'variation',
              section: 'foundation',
              status: 'Generated',
              description: 'Auto-generated reference for CFPB design tokens.',
            },
            documentHeading: '# Design Tokens',
            intro:
              '_This file is generated by Style Dictionary. Do not edit it manually._',
            groupHeadingLevel: 2,
            outputReferences: true,
          },
        },
      ],
    },
  },
};