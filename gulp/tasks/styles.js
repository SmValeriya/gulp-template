'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import rev from 'gulp-rev';
const env = process.env.NODE_ENV;

export const styles = () => {
  return gulp.src('./src/assets/styles/*.pcss')
    .pipe(plumber())
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(postcss())
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulpif(env === 'prod', rev()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./build'))
    .pipe(gulpif(env === 'prod', rev.manifest('build/rev-manifest.json', {base: './build', merge: true})))
    .pipe(gulpif(env === 'prod', gulp.dest('./build')));
};
