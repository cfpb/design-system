const glob = require( 'glob' );
const path = require( 'path' );

const filenames = glob.sync( '**/*.html', {
  cwd: path.join( __dirname, 'docs/_site' ),
  ignore: 'admin/**',
  nonull: false
} );

if ( !filenames.length ) {
  // eslint-disable-next-line no-console
  console.error(
    "No HTML files found; build the docs first with 'yarn build-netlify'."
  );

  // eslint-disable-next-line no-process-exit
  process.exit( 1 );
}

const urls = filenames.map( function( filename ) {
  return filename
    .replace( /index.html$/, '' )
    .replace( /.html$/, '' )
    .replace( /^/, 'http://localhost:4000/design-system/' );
} ).sort();

module.exports = {
  ci: {
    collect: {
      emulatedFormFactor: 'desktop',
      numberOfRuns: 1,
      settings: {
        onlyCategories: 'accessibility'
      },
      startServerCommand:
        'bundle exec jekyll serve --host=localhost --port=4000',
      startServerReadyPattern: '  Server running... press ctrl-c to stop.',
      url: urls
    },
    assert: {
      assertions: {
        'categories:accessibility': [ 'error', { minScore: 1 } ]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
