const autoprefixer = require( 'autoprefixer' );
const BROWSER_LIST = require( '../../config/browser-list-config' );
const component = require( '../utils/parseComponentName' );
const gulp = require( 'gulp' );
const gulpPostcss = require( 'gulp-postcss' );
const gulpIgnore = require( 'gulp-ignore' );
const gulpLess = require( 'gulp-less' );
const gulpRename = require( 'gulp-rename' );

/**
 * Compile all the individual component files so that users can `npm install`
 * a single component if they desire.
 * @returns {PassThrough} A source stream.
 */
function stylesComponents() {
  return gulp.src( 'packages/' + ( component || '*' ) + '/src/*.less' )
    .pipe( gulpIgnore.exclude( vf => {
      /* Exclude Less files that don't share the same name as the directory
         they're in. This filters out things like vars.less but still
         includes cfpb-core.less. */
      const matches = vf.path.match( /\/([\w-]*)\/src\/([\w-]*)\.less/ );
      // We also exclude grid. It needs its own special task. See below.
      return matches[2] === 'cfpb-grid' || matches[1] !== matches[2];
    } ) )
    .pipe( gulpLess( {
      paths: [ 'node_modules/cfpb-*/src/' ]
    } ) )
    .pipe( gulpPostcss( [
      autoprefixer( {
        browsers: BROWSER_LIST.LAST_2_PLUS_IE_8_AND_UP
      } )
    ] ) )
    .pipe( gulpRename( path => {
      path.dirname = component || path.dirname;
      path.dirname = path.dirname.replace( '/src', '' );
      path.extname = '.css';
    } ) )
    .pipe( gulp.dest( 'packages' ) );
}

gulp.task( 'styles:components', stylesComponents );

gulp.task( 'styles', gulp.parallel(
  'styles:components'
) );
