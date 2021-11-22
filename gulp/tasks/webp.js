'use strict';

import gulp from 'gulp';
import gwebp from 'gulp-webp';
import changed from 'gulp-changed';
import gulpif from "gulp-if";

const env = process.env.NODE_ENV;
const gwebpOptions = env === 'prod' ? {lossless: true} : {};

export const webp = () => {
  return gulp.src('./src/assets/images/**/*.{jpg,jpeg,png,tiff,webp}')
    .pipe(gulpif(env === 'dev'), changed('./build/images'))
    .pipe(gwebp(gwebpOptions))
    .pipe(gulp.dest('./build/images'))
};
