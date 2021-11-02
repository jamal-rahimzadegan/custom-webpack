const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { devServer } = require("./webpack/dev-server");
const rules = require("./webpack/rules");
const plugins = require("./webpack/plugins");

//-- Base configs of webpack goes here ----------------------------------------------
const basics = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../../build"),
    filename: "[name].js",
    publicPath: "/static/",
  },
};

//-- Aliases configs---------------------------------------------------------------
const resolve = {
  alias: {
    Utils: path.resolve(__dirname, "../utils/"),
  },
};

//-- Optimization -----------------------------------------------------------------
const optimization = {
  minimize: true,
  minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
};

//-- Main Webpack object ----------------------------------------------------------
module.exports = (env, argv) => {
  return {
    ...basics,
    devServer,
    resolve,
    module: {
      rules,
    },
    plugins,
    optimization,
  };
};
