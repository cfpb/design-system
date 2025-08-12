import StyleDictionary from 'style-dictionary';
import fs, { readdirSync, statSync } from 'fs';
import path, { join } from 'path';
import { transformGroups } from 'style-dictionary/enums';

const { css } = transformGroups;
const baseDir = 'packages/cfpb-design-system/src';
const tokenBase = path.resolve(baseDir, 'tokens');

/*
 * Recursively get all subdirectories that:
 * - are not hidden (don't start with '.')
 * - contain JSON files or more subdirectories
 */
const getAllDirs = (dirPath) => {
  const results = [];
  const entries = readdirSync(dirPath);

  for (const entry of entries) {
    const fullPath = join(dirPath, entry);
    if (statSync(fullPath).isDirectory() && !entry.startsWith('.')) {
      results.push(fullPath);
      results.push(...getAllDirs(fullPath));
    }
  }
  return results;
};

// This will include tokenBase itself + all nested directories
const tokenDirs = [tokenBase, ...getAllDirs(tokenBase)];
const files = [];

// Loop through each token directory and register filters for each JSON file
for (const dirPath of tokenDirs) {
  const jsonFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));

  for (const jsonFile of jsonFiles) {
    const fullPath = path.join(dirPath, jsonFile);

    const relDir = path.relative(tokenBase, dirPath);
    const filterName = `filter_${relDir}_${jsonFile}`.replace(/[^a-zA-Z0-9_]/g, '_');

    StyleDictionary.registerFilter({
      name: filterName,
      filter: (token) => token.filePath === fullPath
    });

    const cssFileName = path.basename(jsonFile, '.json') + '.css';

    files.push({
      destination: `${relDir}/${cssFileName}`,
      format: 'css/variables',
      filter: filterName
    });
  }
}

export default {
  source: [`${tokenBase}/**/*.json`],
  platforms: {
    css: {
      transformGroup: css,
      buildPath: `${baseDir}/elements/`,
      files
    }
  }
};



