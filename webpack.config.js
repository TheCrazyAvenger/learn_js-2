const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
    ],
  },
};
