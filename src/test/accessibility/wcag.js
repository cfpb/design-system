const finalhandler = require( 'finalhandler' );
const fs = require( 'fs' );
const http = require( 'http' );
const serveStatic = require( 'serve-static' );
const path = require( 'path' );
const wcag = require( 'wcag' );
const logSymbols = require( 'log-symbols' );

if ( !process.env.ACHECKER_ID ) {
  throw new Error( 'Please export an ACHECKER_ID environment variable.' );
}

fs.readdir( path.join( __dirname, '..', '..', '/tmp' ), ( err, dirs ) => {
  if ( err ) {
    throw new Error( 'Didn\'t read directory.' );
  }
  dirs.forEach( function( component ) {
    if ( component.indexOf( 'cf-' ) !== 0 ) return;
    startServer( component, testComponent );
  } );
} );

/**
 * Start server to run tests.
 * @param {string} component  - The Capital Framework compontent to serve up.
 * @param {function} cb - The callback
 */
function startServer( component, cb ) {
  const serve = serveStatic( path.join( __dirname, '/tmp/' + component ) );
  const server = http.createServer( ( req, res ) => {
    const done = finalhandler( req, res );
    serve( req, res, done );
  } );

  /* Listen on a random port
     TODO: This doesn't verify the port is available. We might get collisions. */

  server.listen( 0 );

  server.on( 'listening', () => {
    const port = server.address().port;
    cb( component, server, port );
  } );
}

/**
 * Test an individual component
 * @param {string} component  - The Capital Framework compontent to test.
 * @param {object} server - The server that called this function
 * @param {string} port - The port the server is listening to
 */
function testComponent( component, server, port ) {
  const options = {
    id: process.env.ACHECKER_ID,
    uri: 'http://localhost:' + port + '/usage.html',
    guide: '508'
  };

  wcag( options, ( error, data ) => {
    if ( error ) return console.error( error );
    if ( data.status === 'PASS' ) {
      console.error(
        logSymbols.success, ' ' + options.guide + ': ' + component
      );
    } else {
      console.error(
        logSymbols.error, ' ' + options.guide + ': ' + component
      );
      console.error( data.errors );

      /* TODO: Rather than immediately exiting we should collect the names of
         all failed components and display them at the end. */
      process.exit( 1 );
    }
    return server.close();
  } );
}
