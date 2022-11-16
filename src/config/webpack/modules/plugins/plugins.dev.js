const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

// Plugins are bound to the compiler and applied in the order specified --> Order is important
module.exports = [
  new HtmlWebpackPlugin({ template: "./public/index.html" }),
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin({}),
  new MiniCssExtractPlugin({
    filename: "main.[contenthash].css",
  }),
  new BundleAnalyzerPlugin({ openAnalyzer: false }),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("development"),
  }),
];
