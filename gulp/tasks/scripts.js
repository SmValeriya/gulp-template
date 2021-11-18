'use strict';

import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import plumber from 'gulp-plumber';
import webpackConfig from '../../webpack.config.babel.js';
import gulpif from 'gulp-if';
import rev from 'gulp-rev';

const env = process.env.NODE_ENV;

export const scripts = () => {
  return gulp.src('./src/assets/scripts/*.js')
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulpif(env === 'prod', rev()))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./build'))
    .pipe(gulpif(env === 'prod', rev.manifest('build/rev-manifest.json', {
      base: './build',
      merge: true
    })))
    .pipe(gulpif(env === 'prod', gulp.dest('./build')));
};
