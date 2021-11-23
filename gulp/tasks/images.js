'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import changed from 'gulp-changed';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import {paths, isProdMode, svgoPlugins} from '../gulp.config.js';

export const images = () => {
  return gulp.src(paths.images.src)
    .pipe(plumber())
    .pipe(changed(paths.images.dist))
    .pipe(gulpif(isProdMode, imagemin([
      gifsicle({
        optimizationLevel: 3
      }),
      optipng({
        optimizationLevel: 5
      }),
      mozjpeg({
        quality: 75
      }),
      svgo(svgoPlugins)
    ])))
    .pipe(rename({dirname: ''}))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.images.dist));
};
