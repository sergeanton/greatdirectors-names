/* eslint-disable no-unused-vars */
const webpack = require("webpack");
const path = require("path");

let config = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./dist"),
      libraryTarget: 'umd',
      library: 'greatdirectorsNames',
    },
    devtool: 'source-map',
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }]
      }
  }
  
  module.exports = config;