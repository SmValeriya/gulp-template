import gulp from 'gulp';
import gwebp from 'gulp-webp';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import {paths} from '../gulp.config.js';

export const webp = () => {
  return gulp.src(paths.images.src)
    .pipe(plumber())
    .pipe(changed(paths.images.dist))
    .pipe(gwebp())
    .pipe(rename({dirname: ''}))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.images.dist))
};
