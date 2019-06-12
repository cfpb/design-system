const component = require( '../utils/parseComponentName' );
const gulp = require( 'gulp' );
const gulpIgnore = require( 'gulp-ignore' );
const gulpRename = require( 'gulp-rename' );
const vinylNamed = require( 'vinyl-named' );
const webpack = require( 'webpack' );
const webpackConfig = require( '../../config/webpack-config.js' );
const webpackStream = require( 'webpack-stream' );

/* TODO: Add a production and dev flag via NODE_ENV to generate
   a minified and un-minified version of the assets. */

/**
 * Compile all the individual component files so that users can `npm install`
 * a single component if they desire.
 * @returns {Object} An output stream from gulp.
 */
function scriptsComponents() {
  const tmp = {};
  return gulp.src( 'packages/' + ( component || '*' ) + '/src/*.js' )
    .pipe( gulpIgnore.exclude( vf => {

      /* Exclude JS files that don't share the same name as the directory
         they're in. This filters out utility files. */
      const matches = vf.path.match( /\/([\w-]*)\/src\/([\w-]*)\.js/ );
      return matches[1] !== matches[2];
    } ) )
    .pipe( vinylNamed() )
    .pipe( gulpRename( path => {
      tmp[path.basename] = path;
    } ) )
    .pipe( webpackStream( webpackConfig.commonConf, webpack ) )
    .pipe( gulpRename( path => {
      path.dirname = tmp[path.basename].dirname.replace( '/src', '' );
      path.extname = '.min.js';
    } ) )
    .pipe( gulp.dest( 'packages' ) );
}

gulp.task( 'scripts:components', scriptsComponents );

gulp.task( 'scripts', gulp.parallel(
  'scripts:components'
) );
