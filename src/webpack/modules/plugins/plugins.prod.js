const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { REGEX } = require("../../common/constants");

// Plugins are bound to the compiler and applied in the order specified --> Order is important
module.exports = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({ template: "./public/index.html" }),
  new MiniCssExtractPlugin({
    filename: "main.[contenthash].css"
  }),
  new CompressionPlugin({
    algorithm: "gzip",
    test: REGEX.js
  }),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production")
  })
];
