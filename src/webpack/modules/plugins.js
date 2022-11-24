const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { REGEX } = require("../common/constants");

const generateBasePlugins = (currentEnv) => {
  dotenv.config();

  return [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
      "process.env.NODE_ENV": JSON.stringify(currentEnv),
    }),
  ];
};

const prodConfig = [
  ...generateBasePlugins("production"),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: "main.[contenthash].css",
  }),
  new CompressionPlugin({
    algorithm: "gzip",
    test: REGEX.JS,
  }),
];

const devConfig = [
  ...generateBasePlugins("development"),
  new webpack.HotModuleReplacementPlugin({}),
  new BundleAnalyzerPlugin({ openAnalyzer: false }),
];

module.exports = (isDev) => (isDev ? devConfig : prodConfig);
