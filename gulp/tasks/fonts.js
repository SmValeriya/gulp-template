'use strict';

import gulp from 'gulp';
import {paths} from '../gulp.config.js';

export const fonts = () => {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dist));
};
