const glob = require( 'glob' );
const path = require( 'path' );

let extraCollect = {};

// If URLs aren't being specified on the command line, start the documentation
// website locally and run Lighthouse against all pages. Determine the list of
// URLs by finding all HTML files in the output documentation directory;
// this requires that the docs have already been built before this code is run.
const urlsSpecified = process.argv.some( arg => arg.startsWith( '--url=' ) );

if ( !urlsSpecified ) {
  const filenames = glob.sync( '**/*.html', {
    cwd: path.join( __dirname, 'docs/_site/design-system' ),
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

  extraCollect = {
    // Start the documentation site locally when Lighthouse runs.
    startServerCommand: 'yarn start-jekyll',
    startServerReadyPattern: '  Server running... press ctrl-c to stop.',

    // Run Lighthouse against every URL in the local site.
    url: filenames.map(
      filename => filename
        .replace( /index.html$/, '' )
        .replace( /.html$/, '' )
        .replace( /^/, 'http://localhost:4000/design-system/' )
    ).sort()
  };
}

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      settings: {
        emulatedFormFactor: 'desktop',
        onlyCategories: 'accessibility'
      },
      ...extraCollect
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
