'use strict';

const webpack = require('webpack'); // eslint-disable-line no-unused-vars

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/js/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        target: 'node',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        }
      }
    ]
  },
  node: {
    fs: "empty"
  }
};