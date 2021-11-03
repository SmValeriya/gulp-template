const {series,parallel} = require('gulp');
const {clean} = require('./gulp/tasks/clean');
const {pug} = require('./gulp/tasks/pug');
const {styles} = require('./gulp/tasks/styles');
const {scripts} = require('./gulp/tasks/scripts');
const {serve} = require('./gulp/tasks/serve');

exports.pug = series(pug);
exports.styles = series(styles);
exports.scripts = series(scripts);
exports.clean = series(clean);
exports.serve = series(serve);

exports.default = series(
  clean,
  parallel(pug, styles, scripts),
  serve
);

exports.build = series(
  clean,
  parallel(pug, styles, scripts)
)
