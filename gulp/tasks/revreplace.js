'use strict';

import gulp from 'gulp';
import revReplace from 'gulp-rev-replace';

export const revreplace = () => {
  const manifest = gulp.src('./build/rev-manifest.json');

  return gulp.src('build/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('build'));
};
