const {series,parallel} = require('gulp');
const {clean} = require('./gulp/tasks/clean');
const {pug} = require('./gulp/tasks/pug');
const {styles} = require('./gulp/tasks/styles');

exports.html = series(pug);
exports.styles = series(styles);
exports.clean = series(clean);

exports.default = series(
  clean,
  parallel(pug, styles)
);

exports.build = series(
  clean,
  parallel(pug, styles)
)
