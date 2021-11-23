import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import plumber from 'gulp-plumber';
import gulpif from 'gulp-if';
import rev from 'gulp-rev';
import webpackConfig from '../../webpack.config.babel.js';
import {isProdMode, paths, revManifest} from '../gulp.config.js';

export const scripts = () => {
  return gulp.src(paths.scripts.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulpif(isProdMode, rev()))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.scripts.dist))
    .pipe(gulpif(isProdMode, rev.manifest(revManifest.path, revManifest.options)))
    .pipe(gulpif(isProdMode, gulp.dest(revManifest.options.base)));
};
