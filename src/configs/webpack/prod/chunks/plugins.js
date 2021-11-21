const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const REGEX = require("../../constants");

module.exports = [
  new HtmlWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "main.[contenthash].css",
  }),
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin({}),
  new BundleAnalyzerPlugin({ openAnalyzer: false }),
  new CompressionPlugin({ algorithm: "gzip", test: REGEX.js }), // for gzip
];
