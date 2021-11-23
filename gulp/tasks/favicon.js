import gulp from 'gulp';
import favicons from 'gulp-favicons';
import {paths} from '../gulp.config.js';

export const favicon = () => {
  return gulp.src(paths.favicon.src)
    .pipe(favicons({
      icons: {
        appleIcon: true,
        favicons: true,
        online: false,
        appleStartup: false,
        android: false,
        firefox: false,
        yandex: false,
        windows: false,
        coast: false
      }
    }))
    .pipe(gulp.dest(paths.favicon.dist))
};
