const {src, dest} = require('gulp');

exports.fonts = () => {
  return src('./src/assets/fonts/**/*.{woff,woff2}')
    .pipe(dest('./build'));
};
