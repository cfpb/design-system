const { extendDefaultPlugins } = require( 'svgo' );

module.exports = {
  plugins: extendDefaultPlugins( [
    {
      name: 'addClassesToSVGElement',
      params: {
        className: 'cf-icon-svg'
      }
    },
    {
      name: 'cleanupIDs',
      params: {
        force: 'true'
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: [ 'fill', 'width', 'height', 'path:class', 'circle:class' ]
      }
    },
    {
      name: 'removeStyleElement'
    },
    {
      name: 'removeViewBox',
      active: false
    }
  ] )
};
