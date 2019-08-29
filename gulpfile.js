/*
  gulpfile.js
  ===========

  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file the gulp/tasks directory.
  gulp/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

const requireDir = require( 'require-dir' );
const gulp = require( 'gulp' );

// Require all tasks in gulp/tasks, including subfolders
requireDir( './scripts/gulp/', { recurse: true } );

// Define default build task sequence.
gulp.task( 'build',
  gulp.parallel(
    'styles:components',
    'scripts:components',
    'styles:grid'
  )
);

// Define the default documentation task sequence.
gulp.task( 'docs',
  gulp.parallel(
    'styles:docs',
    'docs:copy'
  )
);

gulp.task( 'default',
  gulp.series(
    'build',
    'test',
    'docs'
  )
);
