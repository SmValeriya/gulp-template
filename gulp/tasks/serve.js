import gulp from 'gulp';
import {paths, browserSyncOptions} from '../gulp.config.js';
import browserSync from 'browser-sync';
const bs = browserSync.create();

export const serve = (done) => {
  bs.init(browserSyncOptions);
  gulp.watch(paths.views.watch, gulp.series('views', reload));
  gulp.watch(paths.styles.watch, gulp.series('styles', reload));
  gulp.watch(paths.scripts.watch, gulp.series('scripts', reload));
  gulp.watch(paths.fonts.watch, gulp.series('fonts', reload));
  gulp.watch(paths.images.watch, gulp.series('images', 'webp', reload));
  gulp.watch(paths.sprite.watch, gulp.series('sprite', reload));

  return done();
};

function reload(done) {
  bs.reload();
  done();
}
