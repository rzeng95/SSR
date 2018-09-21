const webpack = require('webpack');
const path = require('path');

const clientConfig = {
  mode: 'development',
  entry: {
    client: ['webpack-hot-middleware/client', './src/client'],
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = clientConfig;
