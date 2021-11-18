'use strict';

import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import plumber from 'gulp-plumber';

const env = process.env.NODE_ENV;

export const images = () => {
  return gulp.src('./src/assets/images/**/*')
    .pipe(plumber())
    .pipe(gulpif(env === 'prod', imagemin([
      gifsicle({
        optimizationLevel: 3
      }),
      optipng({
        optimizationLevel: 5
      }),
      mozjpeg({
        quality: 75
      }),
      svgo({
        plugins: [
          {
            name: 'cleanupListOfValues',
            params: {floatPrecision: 0}
          },
          {
            name: 'removeAttrs',
            params: {attrs: 'style|data.*'}
          },
          {
            name: 'removeAttributesBySelector',
            params: {
              selectors: [
                {selector: ':not([fill="none"])', attributes: ['fill']},
                {selector: '*', attributes: ['stroke'],}
              ]
            },
          },
          {
            name: 'removeDimensions',
            active: true
          },
        ]
      })
    ])))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./build/images'));
};
