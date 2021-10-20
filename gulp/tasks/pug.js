const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const data = require('../../content.json');

exports.pug = () => {
  return src('./src/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      data: data
    }))
    .pipe(plumber.stop())
    .pipe(dest('./build'));
};
