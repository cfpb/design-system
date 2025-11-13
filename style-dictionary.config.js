// style-dictionary.config.js — ESM
import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';

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
  },
};