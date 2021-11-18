'use strict';

import gulp from 'gulp';
import svgo from 'gulp-svgo';
import svgSprite from 'gulp-svg-sprite';

export const sprite = () => {
  return gulp.src('./src/assets/images/icons/**/*.svg')
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
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest('./build'));
};
