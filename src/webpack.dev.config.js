const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
  devServer: {
    proxy: {
      '**': 'http://localhost:1313',
    },
  },
});
