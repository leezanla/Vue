const terserWebpackPlugin = require('terser-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('base.config');
module.exports = webpackMerge(baseConfig, {
  // plugins: [
  //   // new htmlWebpackPlugin({
  //   //   template: '../index.html'
  //   // }),
  //   new terserWebpackPlugin()
  // ]
})