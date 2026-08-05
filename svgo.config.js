import path from 'path';

export default {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: { force: 'true' },
        },
      },
    },
    {
      name: 'removeStyleElement',
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'width', 'height', 'path:class', 'circle:class'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ 'aria-hidden': 'true' }],
      },
    },
    {
      name: 'addClassesToSVGElement',
      params: {
        className: (_, info) => {
          const filename = path.basename(info.path, '.svg');
          return `cf-icon-svg cf-icon-svg--${filename}`;
        },
      },
    },
  ],
};
