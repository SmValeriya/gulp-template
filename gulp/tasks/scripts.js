const {src, dest} = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../../webpack.config');
const env = process.env.NODE_ENV;

webpackConfig.mode = env === 'prod' ? 'production' : 'development';
webpackConfig.devtool = env === 'prod' ? false : 'source-map';

exports.scripts = () => {
  return src('./src/assets/scripts/*.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(dest('./build'));
};
