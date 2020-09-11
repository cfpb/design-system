const path = require( 'path' );

/**
 * This file is a less plugin that gets included in a less file via the
 * `@plugin "@cfpb/icons-svg-inline";` syntax.
 * The `install` function and the `function.add()` method are the hooks
 * necessary for the less preprocessor to pick this up and run it at build-time.
 * The plugin name specified in the less file, this file's filename,
 * and the name passed to `function.add()` must all be the same.
 * See http://lesscss.org/features/#plugin-atrules-feature-writing-your-first-plugin
 */

module.exports = {
  install: function( less, pluginManager, functions ) {

    /**
     * @param {string} svgName - The canonical name of the icon.
     * @param {string} svgFillColor - The fill color of the icon (defaults to CFPB Black).
     * @returns {string} SVG icon markup.
     */
    functions.add( 'icons-svg-inline', ( svgName, svgFillColor ) => {
      // Retrieve this plugin script's path so we can fake __dirname.
      // When less is updated, the installedPlugins[x] index value may need to
      // be updated. If you receive an error when building that's like
      // "The "path" argument must be of type string. Received undefined"
      // Add console.log( pluginManager.installedPlugins ) and look for the
      // index value that has a filename property that points to this file.
      const thisScriptPath = pluginManager.installedPlugins[2].filename;

      // __dirname is not accessible in this script, so this fakes it.
      const __dirname = path.dirname( thisScriptPath );

      // eslint-disable-next-line no-sync
      let svg = less.fs.readFileSync(
        path.join( __dirname, `./icons/${ svgName.value }.svg` ),
        'utf8'
      );

      /* Replace the cf-icon-svg class (used only in the embedded markup)
         with a fill color. */
      svg = svg.replace(
        'class="cf-icon-svg"', `fill="${ svgFillColor.value }"`
      );

      return svg;
    } );
  }
};
