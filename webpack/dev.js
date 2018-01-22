const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?noIfno=true&reload=true',
    resolve(__dirname, '..', 'src', 'index.jsx'),
  ],

  output: {
    path: resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  devServer: {
    contentBase: resolve(__dirname, '..', 'build'),
    inline: true,
    host: '0.0.0.0',
    hot: true,
    open: true,
    openPage: '', // https://github.com/webpack/webpack-dev-server/issues/960
    publicPath: '/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'src', 'index.ejs'),
      title: 'react-template',
    }),
  ],

  performance: {
    hints: false,
  },
};
