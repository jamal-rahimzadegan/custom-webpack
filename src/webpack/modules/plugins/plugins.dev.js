const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Plugins are bound to the compiler and applied in the order specified --> Order is important
module.exports = [
  new HtmlWebpackPlugin({ template: "./public/index.html" }),
  new webpack.HotModuleReplacementPlugin({}),
  new BundleAnalyzerPlugin({ openAnalyzer: false }),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("development")
  })
];
