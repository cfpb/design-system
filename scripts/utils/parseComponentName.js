const minimalist = require( 'minimist' );
const argv = minimalist( process.argv.slice( 2 ) );
const component = argv.component || argv.c;

module.exports = component;
