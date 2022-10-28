module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIds: { force: 'true' },
          addClassesToSVGElement: { className: 'cf-icon-svg' },
          removeAttrs: {
            attrs: ['fill', 'width', 'height', 'path:class', 'circle:class'],
          },
          removeStyleElement: {},
          removeViewBox: false,
        },
      },
    },
  ],
};
