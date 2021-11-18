'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import {data} from '../../content.js';
const env = process.env.NODE_ENV;

export const views = () => {
  return gulp.src('./src/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      data: data,
      pretty: env === 'dev'
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./build'));
};
