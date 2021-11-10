const {src, dest} = require('gulp');
const revReplace = require('gulp-rev-replace');

exports.revreplace = () => {
  const manifest = src('./build/rev-manifest.json');

  return src('build/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(dest('build'));
};
