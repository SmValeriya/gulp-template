'use strict';

import gulp from 'gulp';
import revRewrite from 'gulp-rev-rewrite';
import {readFileSync} from 'fs';
import {paths, buildDir, revManifest} from '../gulp.config.js';

export const reWriteDependencyNames = () => {
  const manifest = readFileSync(revManifest.path);
  return gulp.src(`${paths.views.dist}/*.html`)
    .pipe(revRewrite ({manifest: manifest}))
    .pipe(gulp.dest(buildDir));
};
