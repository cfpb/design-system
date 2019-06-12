module.exports = () => {
  const args = Array.prototype.slice.call( arguments );
  let exitProcessParam = false;
  let errorParam = args[0] || {};

  if ( errorParam.exitProcess ) {
    exitProcessParam = errorParam.exitProcess;
    errorParam = args[1];
  }

  if ( exitProcessParam === true ) {
    process.exit( 1 );
  } else {
    // Keep gulp from hanging on this task.
    this.process.emit( 'end' );
  }
};
