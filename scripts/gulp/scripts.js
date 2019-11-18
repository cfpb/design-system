const gulp = require( 'gulp' );
const vinylNamed = require( 'vinyl-named' );
const webpack = require( 'webpack' );
const webpackConfig = require( '../../config/webpack-config' );
const handleErrors = require( '../utils/handle-errors' );
const webpackStream = require( 'webpack-stream' );

/* TODO: Add a production and dev flag via NODE_ENV to generate
   a minified and un-minified version of the assets. */

/**
 * Compile all the individual component files so that users can `npm install`
 * a single component if they desire.
 * @returns {Object} An output stream from gulp.
 */
function scriptsComponents() {
  return gulp.src( 'packages/cfpb-design-system/src/cfpb-design-system.js' )
    .pipe( vinylNamed() )
    .pipe( webpackStream( webpackConfig.commonConf, webpack ) )
    .on( 'error', handleErrors.bind( this, { exitProcess: true } ) )
    .pipe( gulp.dest( 'packages/cfpb-design-system/' ) );
}

gulp.task( 'scripts:components', scriptsComponents );

gulp.task( 'scripts', gulp.parallel(
  'scripts:components'
) );
