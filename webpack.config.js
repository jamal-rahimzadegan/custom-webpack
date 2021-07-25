const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const basics = {
  mode: "development",
  entry: "/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("build"),
    publicPath: "/",
  },
};

const devServer = {
  contentBase: path.join(__dirname, "build"),
  compress: true,
  port: 2006,
  hot: true,
  inline: true,
  liveReload: true,
};

const resolve = {
  alias: {
    Utils: path.resolve(__dirname, "src/utils/"),
  },
};

const rules = [
  {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: "babel-loader",
  },
  {
    test: /\.html$/,
    use: "html-loader",
  },
  /*Choose only one of the following two: if you're using
    plain CSS, use the first one, and if you're using a
    preprocessor, in this case SASS, use the second one*/
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  },
  {
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
];

const plugins = [
  new MiniCssExtractPlugin({}),
  new HTMLWebpackPlugin({
    template: "./public/index.html",
  }),
  new webpack.HotModuleReplacementPlugin({}),
];

module.exports = {
  ...basics,
  devServer,
  resolve,
  module: {
    rules,
  },
  plugins,
};
