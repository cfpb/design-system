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
         they're in. This filters out things like cf-vars.less but still
         includes cf-core.less. */
      const matches = vf.path.match( /\/([\w-]*)\/src\/([\w-]*)\.less/ );
      // We also exclude cf-grid. It needs its own special task. See below.
      return matches[2] === 'cf-grid' || matches[1] !== matches[2];
    } ) )
    .pipe( gulpLess( {
      paths: [ 'node_modules/cf-*/src/' ],
      compress: true
    } ) )
    .pipe( gulpPostcss( [
      autoprefixer( {
        browsers: BROWSER_LIST.LAST_2_PLUS_IE_8_AND_UP
      } )
    ] ) )
    .pipe( gulpRename( path => {
      path.dirname = component || path.dirname;
      path.dirname = path.dirname.replace( '/src', '' );
      path.extname = '.min.css';
    } ) )
    .pipe( gulp.dest( 'packages' ) );
}

/**
 * cf-grid needs to compile cf-grid-generated.less.
 * @returns {PassThrough} A source stream.
 */
function stylesGrid() {
  return gulp.src( 'packages/cf-grid/src-generated/*.less' )
    .pipe( gulpLess( {
      paths: [ 'node_modules/cf-*/src/' ],
      compress: true
    } ) )
    .pipe( gulpPostcss( [
      autoprefixer( {
        grid: true,
        browsers: BROWSER_LIST.LAST_2_PLUS_IE_8_AND_UP
      } )
    ] ) )
    .pipe( gulpRename( {
      basename: 'cf-grid',
      extname: '.min.css'
    } ) )
    .pipe( gulp.dest( 'packages/cf-grid' ) );
}

/**
 * Process CSS for the docs.
 * @returns {PassThrough} A source stream.
 */
function stylesDocs() {
  return gulp.src( 'docs/src/css/main.less' )
    .pipe( gulpLess( {
      paths: [ 'node_modules/cf-*/src/' ],
      compress: true
    } ) )
    .pipe( gulpPostcss( [
      autoprefixer( {
        browsers: BROWSER_LIST.LAST_2_PLUS_IE_8_AND_UP
      } )
    ] ) )
    .pipe( gulp.dest( 'docs/dist/css/' ) );
}

gulp.task( 'styles:components', stylesComponents );
gulp.task( 'styles:grid', stylesGrid );
gulp.task( 'styles:docs', stylesDocs );

gulp.task( 'styles', gulp.parallel(
  'styles:components',
  'styles:grid',
  'styles:docs'
) );
