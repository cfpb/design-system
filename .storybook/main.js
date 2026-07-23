import { fileURLToPath } from 'node:url';
import path, { dirname } from 'path';
import { mergeConfig } from 'vite';

export default {
  stories: [
    '../packages/cfpb-design-system/src/elements/**/*.stories.@(js|ts)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },

  docs: {
    defaultName: 'Overview',
  },

  staticDirs: [
    {
      from: '../packages/cfpb-design-system/src/components/cfpb-icons/icons',
      to: '/icons',
    },
    {
      from: '../docs/fonts',
      to: '/fonts',
    },
    {
      from: '../packages/cfpb-design-system/src/base',
      to: '/base',
    },
  ],

  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      // In dev the iframe is at /iframe.html so ./icons -> /icons/
      // In prod the iframe is at /design-system/web-components/iframe.html
      // so ./icons/ -> /design-system/web-components/icons which matches the
      // staticDirs output path once the build is served at that base
      base: configType === 'PRODUCTION' ? '/design-system/web-components' : '/',
      css: {
        transformer: 'lightningcss',
      },
      resolve: {
        alias: {
          '@cfpb/cfpb-design-system': path.resolve(
            process.cwd(),
            'packages/cfpb-design-system',
          ),
        },
      },
    });
  },
};

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
