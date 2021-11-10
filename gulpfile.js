const {series,parallel} = require('gulp');
const {clean} = require('./gulp/tasks/clean');
const {pug} = require('./gulp/tasks/pug');
const {styles} = require('./gulp/tasks/styles');
const {scripts} = require('./gulp/tasks/scripts');
const {fonts} = require('./gulp/tasks/fonts');
const {sprite} = require('./gulp/tasks/sprite');
const {serve} = require('./gulp/tasks/serve');

exports.pug = series(pug);
exports.styles = series(styles);
exports.scripts = series(scripts);
exports.fonts = series(fonts);
exports.sprite = series(sprite);
exports.clean = series(clean);
exports.serve = series(serve);

exports.default = series(
  clean,
  parallel(pug, styles, scripts, fonts),
  serve
);

exports.build = series(
  clean,
  parallel(pug, styles, scripts, fonts)
)
