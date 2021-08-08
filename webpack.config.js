const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackObfuscator = require("webpack-obfuscator"); // todo: add me to the app
const JavaScriptObfuscator = require("webpack-obfuscator");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

//  files regex ---------------------------------------------------------
const JS_REGEX = /\.(js|jsx|ts|tsx)$/;
const HTML_REGEX = /\.html$/;
const CSS_REGEX = /\.css$/;
const SASS_REGEX = /\.(scss|sass)$/;

//  base configs of webpack goes here ----------------------------------------------
const setBasicConfig = (env, argv, mode) => {
  return {
    mode,
    entry: "/src/index.js",
    output: {
      path: path.resolve("build"),
      filename: "[name].[contenthash].js",
      publicPath: "/",
    },
  };
};

//-------- confs related to the local development server---------------------------
const devServer = {
  contentBase: path.join(__dirname, "build"),
  compress: true,
  port: 2006,
  hot: true,
  inline: true,
  liveReload: true,
  stats: true,
};

//----- Aliases configs------------------------------------------------------------
const resolve = {
  alias: {
    Utils: path.resolve(__dirname, "src/utils/"),
  },
};

//----- Rules of webpack ----------------------------------------------------------

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
  /*Choose only one of the following two: if you're using
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
  {
    test: CSS_REGEX,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  },
  {
    test: SASS_REGEX,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
];

//---- webpack plugins- ----------------------------------------------------------
const plugins = (env, argv, mode) => {
  return [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new CssMinimizerPlugin(),
    new MiniCssExtractPlugin({}),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(mode),
    }),
  ];
};

//----- Optimization -------------------------------------------------------------
const optimization = {
  minimize: true,
  minimizer: [new TerserPlugin()],
};

//----- main object of webpack ----------------------------------------------------
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
