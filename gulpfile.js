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

import gulp from 'gulp';

// Styles tasks
import autoprefixer from 'autoprefixer';
import gulpPostcss from 'gulp-postcss';
import gulpIgnore from 'gulp-ignore';
import gulpLess from 'gulp-less';
import gulpRename from 'gulp-rename';

/**
 * Compile all the individual component files so that users can `npm install`
 * a single component if they desire.
 *
 * @param {Function} done - the callback function for the end of the Promise.
 */
function stylesComponents(done) {
  gulp
    .src('packages/*/src/*.less')
    .pipe(
      gulpIgnore.exclude((vf) => {
        /* Exclude Less files that don't share the same name as the directory
         they're in. This filters out things like vars.less but still
         includes cfpb-core.less. */
        const matches = vf.path.match(/\/([\w-]*)\/src\/([\w-]*)\.less/);
        return matches[1] !== matches[2];
      })
    )
    .pipe(
      gulpLess({
        paths: ['node_modules/cfpb-*/src/'],
      })
    )
    .pipe(gulpPostcss([autoprefixer()]))
    .pipe(
      gulpRename((path) => {
        path.dirname = path.dirname.replace('/src', '');
        path.extname = '.css';
      })
    )
    .pipe(gulp.dest('packages'));
  done();
}

// Define default build task sequence.
gulp.task('build', gulp.parallel(stylesComponents, scriptsComponents));
