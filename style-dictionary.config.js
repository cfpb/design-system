import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import path from 'path';
import tokenDirs from './packages/cfpb-design-system/src/tokens/index.js';
import { transformGroups } from 'style-dictionary/enums';

const { css } = transformGroups;
const baseDir = 'packages/cfpb-design-system/src';
const tokenBase = path.resolve(baseDir, 'tokens'); // use absolute path

const files = [];

// Loop through each token directory
for (const dir of tokenDirs) {
  const dirPath = path.join(tokenBase, dir);
  const jsonFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));

  for (const jsonFile of jsonFiles) {
    const fullPath = path.join(dirPath, jsonFile);
    const filterName = `filter_${dir}_${jsonFile}`.replace(/[^a-zA-Z0-9_]/g, '_');

    // ✅ Correct registration using `filter`, NOT `matcher`
    StyleDictionary.registerFilter({
      name: filterName,
      filter: (token) => token.filePath === fullPath
    });

    files.push({
      destination: `${dir}/vars.css`,
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


