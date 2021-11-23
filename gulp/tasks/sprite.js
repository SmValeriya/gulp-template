'use strict';

import gulp from 'gulp';
import svgo from 'gulp-svgo';
import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';
import {paths, svgoPluginsSprite} from '../gulp.config.js';

export const sprite = () => {
  return gulp.src(paths.sprite.src)
    .pipe(plumber())
    .pipe(svgo(svgoPluginsSprite))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.sprite.dist));
};
