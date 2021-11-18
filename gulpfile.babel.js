import gulp from 'gulp';
import {clean} from './gulp/tasks/clean.js';
import {views} from './gulp/tasks/views.js';
import {styles} from './gulp/tasks/styles.js';
import {scripts} from './gulp/tasks/scripts.js';
import {fonts} from './gulp/tasks/fonts.js';
import {images} from './gulp/tasks/images.js';
import {sprite} from './gulp/tasks/sprite.js';
import {revreplace} from './gulp/tasks/revreplace.js';
import {serve} from './gulp/tasks/serve.js';

export {clean, views, styles, scripts, fonts, images, sprite, revreplace, serve};

export default gulp.series(
  clean,
  gulp.parallel(views, styles, scripts, fonts, images),
  serve
);

export const build = gulp.series(
  clean,
  gulp.parallel(views, styles, scripts, fonts, images),
  revreplace
)
