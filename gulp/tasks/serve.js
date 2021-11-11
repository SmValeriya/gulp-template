const {watch, series} = require('gulp');
const browserSync = require('browser-sync').create();

exports.serve = (done) => {
  browserSync.init({
    server: {
      baseDir: "./build"
    },
    open: false,
    notify: false,
    cors: true
  });
  watch('./src/pages/**/*.pug', series('pug', reload));
  watch('./src/assets/styles/**/*.pcss', series('styles', reload));
  watch('./src/assets/scripts/**/*.js', series('scripts', reload));
  watch('./src/assets/fonts/**/*.{woff,woff2}', series('fonts', reload));
  watch('./src/assets/images/**/*.{jpg,jpeg,png,gif,svg}', series('images', reload));
  watch('./src/assets/images/icons/**/*.svg', series('sprite', reload));

  return done();
};

function reload(done) {
  browserSync.reload();
  done();
}
