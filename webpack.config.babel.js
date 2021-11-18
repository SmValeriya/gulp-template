import TerserPlugin from 'terser-webpack-plugin';

const env = process.env.NODE_ENV;

export default {
  entry: {
    index: './src/assets/scripts/index.js',
    about: './src/assets/scripts/about.js',
  },

  output: {
    filename: '[name].min.js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  mode: env === 'prod' ? 'production' : 'development',
  devtool: env === 'prod' ? false : 'source-map',
  optimization: {
    minimize: env === 'prod',
    minimizer: [
      new TerserPlugin(),
    ]
  }
};
