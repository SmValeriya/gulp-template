const {src, dest} = require('gulp');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');

exports.sprite = () => {
  return src('./src/assets/images/icons/**/*.svg')
    .pipe(svgo({
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
    }))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      }
    }))
    .pipe(dest('./build'));
};
