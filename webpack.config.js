const webpack = require("webpack");
const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//-- Regex List ---------------------------------------------------------
const JS_REGEX = /\.(js|jsx|ts|tsx)$/;
const HTML_REGEX = /\.html$/;
const STYLES_REGEX = /.s?css$/;

//-- Base configs of webpack goes here ----------------------------------------------
const setBasicConfig = (env, argv, mode) => {
  return {
    mode,
    entry: "/src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      publicPath: "/",
      // publicPath: "/build", //the default is "/"
    },
  };
};

//-- Configs related to the local development server------------------------------
const devServer = {
  contentBase: path.join(__dirname, "build"),
  compress: true,
  port: 2006,
  hot: true,
  inline: true,
  liveReload: true,
  stats: true,
  // Adds headers to all responses ==> eg. CORS
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

//-- Aliases configs---------------------------------------------------------------
const resolve = {
  alias: {
    Utils: path.resolve(__dirname, "src/utils/"),
  },
};

//-- Webpack Rules -----------------------------------------------------------------
const rules = [
  {
    test: JS_REGEX,
    exclude: /node_modules/,
    use: "babel-loader",
  },
  {
    test: HTML_REGEX,
    use: "html-loader",
  },
  {
    test: STYLES_REGEX,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  },
];

//-- Webpack plugins ----------------------------------------------------------------
const plugins = (env, argv, mode) => {
  return [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({}),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(mode),
    }),
  ];
};

//-- Optimization -----------------------------------------------------------------
const optimization = {
  minimize: true,
  minimizer: [new CssMinimizerPlugin(), new TerserPlugin({})],
};

//-- Main Webpack object ----------------------------------------------------------
module.exports = (env, argv) => {
  const mode = env.WEBPACK_SERVE ? "development" : "production";

  return {
    ...setBasicConfig(env, argv, mode),
    devServer,
    resolve,
    module: {
      rules,
    },
    plugins: plugins(env, argv, mode),
    optimization,
  };
};
