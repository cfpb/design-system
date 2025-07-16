import { transformGroups } from 'style-dictionary/enums';
import tokens from './packages/cfpb-design-system/src/tokens/index.js';

const { css } = transformGroups;

const baseDir = 'packages/cfpb-design-system/src';

export default {
  source: [`${baseDir}/tokens/**/*.json`],
  platforms: {
    css: {
      transformGroup: css,
      buildPath: `${baseDir}/elements/`,
      files: tokens.map((tokenSet) => ({
        destination: `${tokenSet}/vars.css`,
        format: 'css/variables',
      })),
    },
  },
};
