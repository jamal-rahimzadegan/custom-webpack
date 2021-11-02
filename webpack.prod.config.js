const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//-- Regex of Files goes here ---------------------------------------------------------
const REGEX = {
  js: /\.(js|jsx|ts|tsx)$/,
  html: /\.html$/,
  styles: /.s?css$/,
};

//-- Base configs of webpack goes here ----------------------------------------------
const setBasicConfig = (env, argv, mode) => {
  return {
    mode,
    entry: "/src/index.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].js",
      publicPath: "/static/",
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
  // redirect all calls from http://0.0.0.0:2006/api/* to http://0.0.0.0:8080/*  (proxy)
  proxy: {
    "/api": {
      target: {
        host: "0.0.0.0",
        protocol: "http:",
        port: 8080,
      },
      pathRewrite: {
        "^/api": "",
      },
    },
  }, // Adds headers to all responses ==> eg. CORS
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
    test: REGEX.js,
    exclude: /node_modules/,
    use: "babel-loader",
  },
  {
    test: REGEX.html,
    use: "html-loader",
  },
  {
    test: REGEX.styles,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
];

//-- Webpack plugins ----------------------------------------------------------------
const plugins = (env, argv, mode) => {
  return [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(mode),
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new CompressionPlugin({ algorithm: "gzip", test: REGEX.js }), // for gzip
  ];
};

//-- Optimization -----------------------------------------------------------------
const optimization = {
  minimize: true,
  minimizer: [new CssMinimizerPlugin(), new TerserPlugin({})],
};

//-- Main Webpack object ----------------------------------------------------------
module.exports = (env, argv) => {
  const mode = "production";

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
