const {src, dest} = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const env = process.env.NODE_ENV;

exports.styles = () => {
  return src('./src/assets/styles/*.pcss')
    .pipe(plumber())
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(postcss())
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(plumber.stop())
    .pipe(dest('./build'));
};
