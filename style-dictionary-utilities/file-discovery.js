
import fs from 'fs';
import path from 'path';
import { toAbsPosix, toPosix } from './path-utils.js';

const INTENT_ROOTS = new Set(['sass', 'css']);

/**
 * Return nested subdirectories in depth-first order.
 * @param {string} dirPath
 * @returns {string[]}
 */
export function getAllDirs(dirPath) {
  const out = [];
  for (const dirent of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (dirent.isDirectory() && !dirent.name.startsWith('.')) {
      const full = path.join(dirPath, dirent.name);
      out.push(full, ...getAllDirs(full));
    }
  }
  return out;
}

const toFilterId = (value) =>
  value.replace(/[^a-zA-Z0-9_.-]/g, '_').replace(/[^a-zA-Z0-9_]/g, '_');

const createFilterName = (relDir, jsonFile, branch) =>
  `filter__${toFilterId(relDir || '_')}__${toFilterId(jsonFile)}__${toFilterId(branch)}`;

const getDestination = (relDir, basename, ext, suffix = '') =>
  relDir === ''
    ? `${basename}${suffix}.${ext}`
    : `${toPosix(relDir)}/${basename}${suffix}.${ext}`;

const getTokenTopLevelRoots = (fullPath) => {
  const json = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  // $extensions is metadata and not a token branch.
  return Object.keys(json).filter((key) => key !== '$extensions');
};

const classifyRoots = (roots) => {
  const hasSassRoot = roots.includes('sass');
  const hasCssRoot = roots.includes('css');
  const nonIntentRoots = roots.filter((root) => !INTENT_ROOTS.has(root));
  return {
    hasSassRoot,
    hasCssRoot,
    nonIntentRoots,
    hasNonIntentRoots: nonIntentRoots.length > 0,
  };
};

const buildFilterSpec = ({
  filterName,
  fullPathAbsPosix,
  includeRoots = null,
  excludeRoots = null,
}) => ({
  filterName,
  fullPathAbsPosix,
  includeRoots,
  excludeRoots,
});

export function buildFilesAndFilters({
  basePath,
  cssFormat,
  cssFileOptions,
  scssFileOptions,
}) {
  // Discovery classifies each token file by top-level intent:
  // - sass-only: emit .scss
  // - css-only: emit .css
  // - dual: emit both
  // - default: emit normal .css
  // Mixed files (intent + non-intent roots) emit non-intent roots through the
  // default pipeline, optionally using .default.css to avoid collisions.
  const tokenDirs = [basePath, ...getAllDirs(basePath)];
  const defaultCssFiles = [];
  const intentCssFiles = [];
  const intentScssFiles = [];
  const filtersToRegister = [];

  for (const dirPath of tokenDirs) {
    const jsonFiles = fs
      .readdirSync(dirPath)
      .filter((file) => file.endsWith('.json'));

    for (const jsonFile of jsonFiles) {
      const fullPath = path.join(dirPath, jsonFile);
      const fullPathAbsPosix = toAbsPosix(fullPath);
      const relDir = path.relative(basePath, dirPath);
      const basename = path.basename(jsonFile, '.json');
      const roots = getTokenTopLevelRoots(fullPath);
      const { hasSassRoot, hasCssRoot, nonIntentRoots, hasNonIntentRoots } =
        classifyRoots(roots);

      if (hasCssRoot) {
        const filterName = createFilterName(relDir, jsonFile, 'intent_css');
        filtersToRegister.push(
          buildFilterSpec({
            filterName,
            fullPathAbsPosix,
            includeRoots: ['css'],
          }),
        );
        intentCssFiles.push({
          destination: getDestination(relDir, basename, 'css'),
          format: cssFormat,
          filter: filterName,
          options: { ...cssFileOptions },
        });
      }

      if (hasSassRoot) {
        const filterName = createFilterName(relDir, jsonFile, 'intent_sass');
        filtersToRegister.push(
          buildFilterSpec({
            filterName,
            fullPathAbsPosix,
            includeRoots: ['sass'],
          }),
        );
        intentScssFiles.push({
          destination: getDestination(relDir, basename, 'scss'),
          format: 'scss/variables',
          filter: filterName,
          options: { ...scssFileOptions },
        });
      }

      if (!hasSassRoot && !hasCssRoot) {
        const filterName = createFilterName(relDir, jsonFile, 'default_all');
        filtersToRegister.push(
          buildFilterSpec({
            filterName,
            fullPathAbsPosix,
          }),
        );
        defaultCssFiles.push({
          destination: getDestination(relDir, basename, 'css'),
          format: cssFormat,
          filter: filterName,
          options: { ...cssFileOptions },
        });
        continue;
      }

      if (hasNonIntentRoots) {
        const filterName = createFilterName(
          relDir,
          jsonFile,
          'default_non_intent',
        );
        filtersToRegister.push(
          buildFilterSpec({
            filterName,
            fullPathAbsPosix,
            includeRoots: nonIntentRoots,
          }),
        );
        // Mixed files with an intent css branch would otherwise overwrite
        // <basename>.css. We emit non-intent branches to <basename>.default.css
        // to preserve intent transform behavior and avoid destination collisions.
        const suffix = hasCssRoot ? '.default' : '';
        defaultCssFiles.push({
          destination: getDestination(relDir, basename, 'css', suffix),
          format: cssFormat,
          filter: filterName,
          options: { ...cssFileOptions },
        });
      }
    }
  }

  return {
    defaultCssFiles,
    intentCssFiles,
    intentScssFiles,
    filtersToRegister,
  };
}
