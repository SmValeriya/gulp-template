const {src, dest} = require('gulp');
const gulpif = require('gulp-if');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const env = process.env.NODE_ENV;

exports.images = () => {
  return src('./src/assets/images/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(plumber())
    .pipe(changed('build/images', {hasChanged: changed.compareContents}))
    .pipe(gulpif(env === 'prod', imagemin([
      imagemin.gifsicle({
        optimizationLevel: 3
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.mozjpeg({
        quality: 75
      }),
      imagemin.svgo({
        plugins: [
          {cleanupListOfValues: {floatPrecision: 0}},
          {removeAttrs: {attrs: 'style|data.*'}},
          {
            removeAttributesBySelector: {
              selectors: [
                {selector: ':not([fill="none"])', attributes: ['fill']},
                {selector: '*', attributes: ['stroke'],}
              ]
            },
          },
          {removeDimensions: true},
        ]
      })
    ])))
    .pipe(plumber.stop())
    .pipe(dest('./build/images'));
};
