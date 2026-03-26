import addClassesToSVGElement from './scripts/svgo-plugin-add-classes-to-svg-element.cjs';

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
      params: { className: 'cf-icon-svg', suffixPattern: '--$FILENAME' },
      fn: addClassesToSVGElement.fn,
    },
  ],
};
