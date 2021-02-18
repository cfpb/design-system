{
  plugins: [
    {
      addClassesToSVGElement: {
        className: 'cf-icon-svg'
      }
    },
    {
      cleanupIDs: {
        force: 'true'
      }
    },
    {
      removeAttrs: {
        attrs: [
          'fill',
          'path:class',
          'circle:class'
        ]
      }
    },
    {
      removeStyleElement: true
    }
  ]
}
