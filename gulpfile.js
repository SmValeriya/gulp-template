const {series,parallel} = require('gulp');
const {pug} = require('./gulp/tasks/pug');

exports.html = series(pug);

exports.default = series(
  parallel(pug)
);

exports.build = series(
  parallel(pug)
)
