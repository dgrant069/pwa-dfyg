const path = require('path')
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  // This tells Webpack to create source map files.
  devtool: 'eval-source-map',

  // Config for Webpack Dev Server
  devServer: {
    contentBase: path.resolve(__dirname, "devServer"),
    inline: true,
    port: 4000,
    historyApiFallback: true
  }
});
