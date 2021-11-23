import gulp from 'gulp';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import rev from 'gulp-rev';
import {isProdMode, paths, revManifest} from '../gulp.config.js';

export const styles = () => {
  return gulp.src(paths.styles.src)
    .pipe(plumber())
    .pipe(postcss())
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulpif(isProdMode, rev()))
    .pipe(plumber.stop())
    .pipe(gulp.dest(paths.styles.dist))
    .pipe(gulpif(isProdMode, rev.manifest(revManifest.path, revManifest.options)))
    .pipe(gulpif(isProdMode, gulp.dest(revManifest.options.base)));
};
