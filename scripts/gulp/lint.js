const gulp = require( 'gulp' );
const gulpEslint = require( 'gulp-eslint' );
const handleErrors = require( '../utils/handle-errors' );
const gulpStylelint = require( 'gulp-stylelint' );
const minimist = require( 'minimist' );
const through2 = require( 'through2' );

/**
 * Generic lint a script source.
 * @param {string} src The path to the source JavaScript.
 * @returns {Object} An output stream from gulp.
 */
function _genericLintJs( src ) {
  // Pass all command line flags to ESLint.
  const options = minimist( process.argv.slice( 2 ) );
  let errorHandler = through2.obj();

  if ( options.travis ) {
    options.quiet = true;
    errorHandler = gulpEslint.failAfterError();
  }

  return gulp.src( src.concat( '!**/node_modules/**' ), { base: './' } )
    .pipe( gulpEslint( options ) )
    .pipe( gulpEslint.format() )
    .pipe( errorHandler )
    .pipe( gulp.dest( './' ) )
    .on( 'error', handleErrors );
}

/**
 * Lints the gulpfile for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintBuild() {
  return _genericLintJs( [
    'gulpfile.js',
    'scripts/gulp/**/*.js',
    'scripts/npm/prepublish/**/*.js'
  ] );
}

/**
 * Lints the test js files for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintTests() {
  return _genericLintJs( [
    'test/**/*.js',
    '!test/lib/**/*.js',
    '!test/unit-test-coverage/**/*.js'
  ] );
}

/**
 * Lints the source js files for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintScripts() {
  return _genericLintJs( [ 'packages/*/src/**/*.js' ] );
}

/**
 * Lints the source LESS files for errors.
 * @returns {Object} An output stream from gulp.
 */
function lintStyles() {
  // Pass all command line flags to Stylelint.
  const options = minimist( process.argv.slice( 2 ) );
  const willFix = options.fix || false;
  return gulp.src( [
    'packages/**/*.less',
    '!packages/cf-*/node_modules/**/*.less',
    '!packages/cf-grid/src-generated/*.less'
  ] )
    .pipe( gulpStylelint( {
      failAfterError: true,
      fix: willFix,
      reporters: [ { formatter: 'string', console: true } ]
    } ) )
    .pipe( gulp.dest( 'packages' ) );
}

gulp.task( 'lint:build', lintBuild );
gulp.task( 'lint:tests', lintTests );
gulp.task( 'lint:scripts', lintScripts );
gulp.task( 'lint:styles', lintStyles );

/**
 * Lints all the js files for errors
 */
gulp.task( 'lint', gulp.parallel(
  'lint:build',
  'lint:tests',
  'lint:scripts',
  'lint:styles'
) );
