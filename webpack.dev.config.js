const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const path = require('path');

const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].css',
  },

  devServer: {
    port: process.env.PORT || 3000,
    contentBase: path.join(process.cwd(), './dist'),
    watchContentBase: true,
    stats: 'none',
    quiet: false,
    open: true,
    historyApiFallback: {
      rewrites: [{ from: /./, to: '404.html' }],
    },
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'dist/**/*.js',
        'dist/**/*.css',
        'site/content/webpack.json',
      ],
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
