const webpack = require("webpack");
const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//-- Regex of Files goes here ---------------------------------------------------------
const FILE_REGEX = {
  js: /\.(js|jsx|ts|tsx)$/,
  html: /\.html$/,
  styles: /.s?css$/,
};

//-- Base configs of webpack goes here ----------------------------------------------
const setBasicConfig = (env, argv, mode) => {
  return {
    mode,
    entry: {
      // using multiple entries and dependOn for code splitting
      "first-bundle": {
        import: "./src/index.js",
        dependOn: "shared",
      },
      "second-bundle": {
        import: "./src/another.js",
        dependOn: "shared",
      },
      shared: "axios", // common lib for preventing duplication
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      publicPath: "/",
    },
  };
};

//-- Config that is related to the local development server------------------------------
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

//-- Aliases configs (for shorter path in imports)-------------------------------------------------------------
const resolve = {
  alias: {
    Utils: path.resolve(__dirname, "src/utils/"),
  },
};

//-- Webpack Rules -----------------------------------------------------------------
const rules = [
  {
    test: FILE_REGEX.js,
    exclude: /node_modules/,
    use: "babel-loader",
  },
  {
    test: FILE_REGEX.html,
    use: "html-loader",
  },
  {
    test: FILE_REGEX.styles,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  },
];

//-- Webpack plugins ----------------------------------------------------------------
const plugins = (env, argv, mode) => {
  return [
    new HTMLWebpackPlugin({
      filename: "index.html",
      chunks: ["first-bundle"], // same as entry point name
      title: "first-bundle",
    }),
    new HTMLWebpackPlugin({
      filename: "second-page.html",
      chunks: ["second-bundle"], // same as entry point name
      title: "second-bundle",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(mode),
    }),
  ];
};

//-- Optimization -----------------------------------------------------------------
const optimization = {
  splitChunks: {
    chunks: "all", // for extracting common dependencies
    minSize: 20000, // min size of file to split
    automaticNameDelimiter: "_", // This option lets you specify the delimiter to use for the generated names.
  },
  runtimeChunk: "single", // If we're going to use multiple entry points on a single HTML page (code-splitting)
  minimize: true,
  minimizer: [new CssMinimizerPlugin(), new TerserPlugin({})],
};

//-- Main Webpack object ----------------------------------------------------------
module.exports = (env, argv) => {
  const mode = "production";

  return {
    ...setBasicConfig(env, argv, mode),
    plugins: plugins(env, argv, mode),
    devServer,
    resolve,
    optimization,
    module: {
      rules,
    },
  };
};
