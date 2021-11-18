'use strict';

import gulp from 'gulp';
import rm from 'gulp-rm';

export const clean = () => {
  return gulp.src('build/**/*', {read: false})
    .pipe(rm());
};
