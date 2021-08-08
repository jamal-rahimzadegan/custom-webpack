const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackObfuscator = require("webpack-obfuscator"); //add me
const JavaScriptObfuscator = require("webpack-obfuscator");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

//  files regex ---------------------------------------------------------
const jsRegex = /\.(js|jsx|ts|tsx)$/;
const htmlRegex = /\.html$/;
const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;

//  base confs of webpack goes here ----------------------------------------------
const basics = {
  mode: "development",
  entry: "/src/index.js",
  output: {
    path: path.resolve("build"),
    filename: "[name].[contentHash].js",
    publicPath: "/",
  },
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
    test: jsRegex,
    exclude: /node_modules/,
    use: "babel-loader",
  },
  {
    test: htmlRegex,
    use: "html-loader",
  },
  /*Choose only one of the following two: if you're using
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
  {
    test: cssRegex,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  },
  {
    test: sassRegex,
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
  console.log(`--- argv ----> `, argv);

  const mode = argv.mode || "development"; // dev mode by default

  return {
    ...basics,
    devServer,
    resolve,
    module: {
      rules,
    },
    plugins: plugins(env, argv, mode),
    optimization,
  };
};
