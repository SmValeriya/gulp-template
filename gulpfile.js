const {series,parallel} = require('gulp');
const {clean} = require('./gulp/tasks/clean');
const {pug} = require('./gulp/tasks/pug');
const {styles} = require('./gulp/tasks/styles');
const {scripts} = require('./gulp/tasks/scripts');
const {fonts} = require('./gulp/tasks/fonts');
const {images} = require('./gulp/tasks/images');
const {sprite} = require('./gulp/tasks/sprite');
const {revreplace} = require('./gulp/tasks/revreplace')
const {serve} = require('./gulp/tasks/serve');

exports.pug = series(pug);
exports.styles = series(styles);
exports.scripts = series(scripts);
exports.fonts = series(fonts);
exports.images = series(images);
exports.sprite = series(sprite);
exports.revreplace = series(revreplace);
exports.clean = series(clean);
exports.serve = series(serve);

exports.default = series(
  clean,
  parallel(pug, styles, scripts, fonts, images),
  serve
);

exports.build = series(
  clean,
  parallel(pug, styles, scripts, fonts, images),
  revreplace
)
