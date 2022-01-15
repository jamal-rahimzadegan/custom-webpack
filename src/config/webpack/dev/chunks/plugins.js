const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = [
  new HtmlWebpackPlugin({ template: "./public/index.html" }),
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin({}),
  new MiniCssExtractPlugin({
    filename: "main.[contenthash].css",
  }),
  new BundleAnalyzerPlugin({ openAnalyzer: false }),
  new webpack.DefinePlugin({
    "process.env": JSON.stringify(process.env),
  }),

  new WorkboxPlugin.GenerateSW({
    // these options encourage the ServiceWorkers to get in there fast
    // and not allow any straggling "old" SWs to hang around
    clientsClaim: true,
    skipWaiting: true,
  }),
];
