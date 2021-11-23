'use strict';

import gulp from 'gulp';
import rm from 'gulp-rm';
import {buildDir} from '../gulp.config.js';

export const clean = () => {
  return gulp.src(`${buildDir}/**/*`, {read: false})
    .pipe(rm());
};
