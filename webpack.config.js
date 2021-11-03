const TerserPlugin = require('terser-webpack-plugin');
const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    index: './src/assets/scripts/index.js',
    about: './src/assets/scripts/about.js',
  },

  output: {
    filename: '[name].min.js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  optimization: {
    minimize: env === 'prod',
    minimizer: [
      new TerserPlugin(),
    ]
  }
};
