import fs from 'fs';
import path from 'path';
import { toAbsPosix, toPosix } from './path-utils.js';

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

export function buildFilesAndFilters({
  basePath,
  excludedFiles = [],
  format,
  fileOptions,
}) {
  // Build one output file per input JSON file, preserving folder structure.
  // We also generate a dedicated filter name per source file so Style Dictionary
  // can isolate tokens by origin.
  const tokenDirs = [basePath, ...getAllDirs(basePath)];
  const files = [];
  const filtersToRegister = [];
  const excluded = new Set(excludedFiles);

  for (const dirPath of tokenDirs) {
    const jsonFiles = fs
      .readdirSync(dirPath)
      .filter((file) => file.endsWith('.json') && !excluded.has(file));

    for (const jsonFile of jsonFiles) {
      const fullPathAbsPosix = toAbsPosix(path.join(dirPath, jsonFile));
      const relDir = path.relative(basePath, dirPath);
      const cssFileName = `${path.basename(jsonFile, '.json')}.css`;

      // destination mirrors the token source directory layout under buildPath.
      const destination =
        relDir === '' ? cssFileName : `${toPosix(relDir)}/${cssFileName}`;

      // Style Dictionary filter names must be simple identifiers.
      const filterName = `filter__${(relDir || '_').replace(
        /[^a-zA-Z0-9_/-]/g,
        '_',
      )}__${jsonFile.replace(/[^a-zA-Z0-9_.-]/g, '_')}`.replace(
        /[^a-zA-Z0-9_]/g,
        '_',
      );

      filtersToRegister.push({ filterName, fullPathAbsPosix });
      files.push({
        destination,
        format,
        filter: filterName,
        options: { ...fileOptions },
      });
    }
  }

  return { files, filtersToRegister };
}
