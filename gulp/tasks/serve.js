'use strict';

import gulp from 'gulp';
import browsersync from "browser-sync";
// const browserSync = require('browser-sync').create();
const bs = browsersync.create();

export const serve = (done) => {
  bs.init({
    server: {
      baseDir: "./build"
    },
    open: false,
    notify: false,
    cors: true
  });
  gulp.watch('./src/pages/**/*.pug', gulp.series('views', reload));
  gulp.watch('./src/assets/styles/**/*.pcss', gulp.series('styles', reload));
  gulp.watch('./src/assets/scripts/**/*.js', gulp.series('scripts', reload));
  gulp.watch('./src/assets/fonts/**/*.{woff,woff2}', gulp.series('fonts', reload));
  gulp.watch('./src/assets/images/**/*.{jpg,jpeg,png,gif,svg}', gulp.series('images', reload));
  gulp.watch('./src/assets/images/icons/**/*.svg', gulp.series('sprite', reload));

  return done();
};

function reload(done) {
  bs.reload();
  done();
}
