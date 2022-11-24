const { generateDIR } = require("../common/helpers");
const { isDev } = require("../common/constants");

const prodConfig = {
  mode: "production",
  entry: "./src/index.js",
  target: ["web", "es5"],
  output: {
    path: generateDIR("build"),
    filename: "[name].[contenthash].js",
    publicPath: "/static/",
    clean: true,
  },
};

const devConfig = {
  mode: "development",
  entry: "/src/index.js",
  target: ["web", "es5"],
};

module.exports = (isDev) => (isDev ? devConfig : prodConfig);
