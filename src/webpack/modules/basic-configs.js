const { generateDIR } = require("../common/helpers");
const { isDev } = require("../common/constants");

module.exports = (isDev) => {
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
    output: {
      path: generateDIR("build"),
      filename: "[name].js",
      publicPath: "/",
    },
  };

  return isDev ? devConfig : prodConfig;
};
