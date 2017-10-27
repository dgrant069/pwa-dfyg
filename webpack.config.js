const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack= require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    serviceWorker: './src/serviceWorker.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  // This tells Webpack to create source map files.
  devtool: 'eval-source-map',

  module: {
    rules: [
      // JS
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      // CSS
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      },

      // JSON Loader
      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      // Fonts. Need for font-awesome
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },

      // Images
      {
        test: /\.(svg|png|jpg|gif)(\?.*)?/,
        loader: 'url-loader'
      },
    ]
  },

  // Config for Webpack Dev Server
  devServer: {
    contentBase: path.resolve(__dirname, "devServer"),
    inline: true,
    port: 4000,
    historyApiFallback: true
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  externals: {
    'window': 'window'
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src/config'),
      to: path.resolve(__dirname, 'dist'),
    }]),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs')
    }),

    new ExtractTextPlugin({
      filename: 'styles.css'
    }),
  ],
};
