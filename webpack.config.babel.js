import TerserPlugin from 'terser-webpack-plugin';
import {isProdMode} from './gulp/gulp.config.js';

export default {
  entry: {
    index: './src/scripts/index.js',
    about: './src/scripts/about.js',
  },

  output: {
    filename: '[name].min.js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  mode: isProdMode ? 'production' : 'development',
  devtool: isProdMode ? false : 'source-map',
  optimization: {
    minimize: isProdMode,
    minimizer: [
      new TerserPlugin(),
    ]
  }
};
