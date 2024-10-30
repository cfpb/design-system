const glob = require('glob');
const path = require('path');

let extraCollect = {};

// If URLs aren't being specified on the command line, start the documentation
// website locally and run Lighthouse against all pages. Determine the list of
// URLs by finding all HTML files in the output documentation directory;
// this requires that the docs have already been built before this code is run.
const urlsSpecified = process.argv.some((arg) =>
  arg.match(/^--(collect\.)?url=/),
);

if (!urlsSpecified) {
  const filenames = glob.sync('**/*.html', {
    cwd: path.join(__dirname, 'docs/_site/design-system'),
    ignore: 'admin/**',
    nonull: false,
  });

  if (!filenames.length) {
    // eslint-disable-next-line no-console
    console.error(
      "No HTML files found; build the docs first with 'yarn build-decap'.",
    );

     
    process.exit(1);
  }

  extraCollect = {
    // Serve the documentation site locally when Lighthouse runs. Serve the
    // already-built HTML files using the Node http-server package, which
    // defaults to port 8080 and is simpler and reliably faster than using the
    // Jekyll server.
    startServerCommand: 'yarn serve-html',
    startServerReadyPattern: 'Hit CTRL-C to stop the server',

    // Run Lighthouse against every URL in the local site.
    url: filenames
      .map((filename) =>
        filename
          .replace(/index.html$/, '')
          .replace(/.html$/, '')
          .replace(/^/, 'http://localhost:8080/design-system/'),
      )
      .sort(),
  };
}

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      settings: {
        formFactor: 'desktop',
        screenEmulation: { mobile: false },
        onlyCategories: 'accessibility',
      },
      ...extraCollect,
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
