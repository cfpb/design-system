import path from 'path';
import { fileURLToPath } from 'url';

const storybookDir = path.dirname(fileURLToPath(import.meta.url));
const isBuildCommand = process.argv.includes('build');
const reactStorybookUrl =
  process.env.REACT_STORYBOOK_URL ||
  (isBuildCommand ? null : 'http://localhost:7007');
const reactStorybookRefId = 'reactcomponents';

const config = {
  framework: '@storybook/web-components-vite',
  stories: ['../storybook/stories/**/*.stories.@(js|jsx)'],
  refs: reactStorybookUrl
    ? {
        [reactStorybookRefId]: {
          id: reactStorybookRefId,
          title: 'React Components',
          url: reactStorybookUrl,
        },
      }
    : {},
  docs: {
    defaultName: 'Overview',
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  staticDirs: [
    // Mount the existing docs/admin and built docs assets under the same
    // /design-system/* URLs they use in the Jekyll site so preview links,
    // fonts, images, and then embdedded Decap app resolve without duplicating
    // assets into the Storybook tree.
    {
      from: '../docs/admin',
      to: '/design-system/admin',
    },
    {
      from: '../docs/dist',
      to: '/design-system/dist',
    },
    {
      from: '../docs/fonts',
      to: '/design-system/fonts',
    },
    {
      from: '../docs/images',
      to: '/design-system/images',
    },
  ],
  async viteFinal(baseConfig) {
    return {
      ...baseConfig,
      resolve: {
        ...(baseConfig.resolve || {}),
        alias: {
          ...((baseConfig.resolve && baseConfig.resolve.alias) || {}),
          '@cfpb/cfpb-design-system/src': path.resolve(
            storybookDir,
            '../packages/cfpb-design-system/src',
          ),
          '@cfpb/cfpb-design-system/dist': path.resolve(
            storybookDir,
            '../packages/cfpb-design-system/dist',
          ),
        },
      },
    };
  },
};

export default config;
