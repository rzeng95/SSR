const path = require('path');

const clientConfig = {
  mode: 'production',
  entry: {
    client: './src/client',
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
};

module.exports = clientConfig;
