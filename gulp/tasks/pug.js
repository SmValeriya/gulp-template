const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const data = require('../../content.json');
const env = process.env.NODE_ENV;

exports.pug = () => {
  return src('./src/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      data: data,
      pretty: env === 'dev'
    }))
    .pipe(plumber.stop())
    .pipe(dest('./build'));
};
