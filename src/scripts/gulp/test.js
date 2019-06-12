const fancyLog = require( 'fancy-log' );
const fsHelper = require( '../utils/fs-helper' );
const gulp = require( 'gulp' );
const minimist = require( 'minimist' );
const spawn = require( 'child_process' ).spawn;

/**
 * Run JavaScript unit tests.
 * @param {Function} cb - Callback function to call on completion.
 * @returns {ChildProcess} - Process to hand back to the gulp stream.
 */
function testUnit( cb ) {
  const params = minimist( process.argv.slice( 3 ) ) || {};

  /* If --specs=path/to/js/spec flag is added on the command-line,
     pass the value to mocha to test individual unit test files. */
  let specs = params.specs;

  // Set regex defaults.
  let fileTestRegex = 'unit-test/';
  let fileSrcPath = '';

  // If --specs flag is passed, adjust regex defaults.
  if ( specs ) {
    fileSrcPath += specs;
    // If the --specs argument is a file, strip it off.
    if ( specs.slice( -3 ) === '.js' ) {
      // TODO: Perform a more robust replacement here.
      fileSrcPath = fileSrcPath.replace( '-spec', '' );
      fileTestRegex += specs;
    } else {

      // Ensure there's a trailing slash.
      if ( specs.slice( -1 ) !== '/' ) {
        specs += '/';
        fileSrcPath += '/';
      }

      fileSrcPath += '**/*.js';
      fileTestRegex += specs + '.*-spec.js';
    }
  } else {
    fileSrcPath += '**/*.js';
    fileTestRegex += '.*-spec.js';
  }

  const testProcess = spawn(
    fsHelper.getBinary( 'jest-cli', 'jest.js', '../bin' ),
    [
      '--config=jest.config.js',
      `--collectCoverageFrom=${ fileSrcPath }`,
      `--testRegex=${ fileTestRegex }`,
      '--detectOpenHandles'
    ],
    { stdio: 'inherit' }
  );

  testProcess.once( 'close', code => {
    if ( code ) {
      fancyLog( 'Unit tests exited with code ' + code );
      process.exit( 1 );
    }
    fancyLog( 'Unit tests done!' );
    cb();
  } );

  return testProcess;
}

gulp.task( 'test:unit', testUnit );

gulp.task( 'test', gulp.parallel(
  'test:unit'
) );
