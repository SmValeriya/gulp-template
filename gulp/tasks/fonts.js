'use strict';

import gulp from 'gulp';

export const fonts = () => {
  return gulp.src('./src/assets/fonts/**/*.{woff,woff2}')
    .pipe(gulp.dest('./build'));
};
