const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { REGEX } = require("../../constants");

module.exports = [
  new HtmlWebpackPlugin({ template: "./public/index.html" }),
  new MiniCssExtractPlugin({
    filename: "main.[contenthash].css",
  }),
  new CleanWebpackPlugin(),
  new CompressionPlugin({ algorithm: "gzip", test: REGEX.js }), // for gzip
];
