const {src} = require('gulp');
const rm = require('gulp-rm');

exports.clean = () => {
  return src('build/**/*', {read: false})
    .pipe(rm());
};
