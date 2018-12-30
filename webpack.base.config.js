const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const stencil = require('@stencil/webpack');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'index.js'),
  },

  output: {
    path: path.join(__dirname, 'dist'),
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js'],
    alias: {
      '@scss': path.resolve(__dirname, 'src', 'scss'),
      '@img': path.resolve(__dirname, 'src', 'img'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          noquotes: true,
        },
      },
    ],
  },
  plugins: [
    new AssetsPlugin({
      filename: 'webpack.json',
      path: path.join(process.cwd(), 'site/data'),
      prettyPrint: true,
    }),
    new stencil.StencilPlugin(),
  ],
};
