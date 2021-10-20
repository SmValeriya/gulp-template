const {series,parallel} = require('gulp');
const {pug} = require('./gulp/tasks/pug');
const {styles} = require('./gulp/tasks/styles');

exports.html = series(pug);
exports.styles = series(styles);

exports.default = series(
  parallel(pug, styles)
);

exports.build = series(
  parallel(pug, styles)
)
