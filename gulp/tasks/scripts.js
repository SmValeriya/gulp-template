const {src, dest} = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../../webpack.config');
const gulpif = require('gulp-if');
const env = process.env.NODE_ENV;
const rev = require('gulp-rev');

webpackConfig.mode = env === 'prod' ? 'production' : 'development';
webpackConfig.devtool = env === 'prod' ? false : 'source-map';

exports.scripts = () => {
  return src('./src/assets/scripts/*.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulpif(env === 'prod', rev()))
    .pipe(dest('./build'))
    .pipe(gulpif(env === 'prod', rev.manifest('build/rev-manifest.json', {base: './build', merge: true})))
    .pipe(dest('./build'));
};
