const path = require("path");
const { devServer } = require("./chunks/dev-server");
const rules = require("./chunks/rules");
const plugins = require("./chunks/plugins");
const { optimization } = require("./chunks/optimization");

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
    // Utils: path.resolve(__dirname, "../../../../utils/"),
  },
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
