import webpack from 'webpack';
import {resolve} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  
  entry: 
  {
    root: ["webpack-hot-middleware/client", resolve(__dirname, 'src', 'components','root.jsx')],
    blog: ["webpack-hot-middleware/client", resolve(__dirname, 'src', 'components','blog.jsx')],
    about: ["webpack-hot-middleware/client", resolve(__dirname, 'src', 'components','about.jsx')],
  },

  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name]/bundle.js',
    publicPath: '/',
  },

  resolve: {
		extensions: ['.js', '.jsx']
	},

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader/useable',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
};