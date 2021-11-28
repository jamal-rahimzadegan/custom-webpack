const { generateDIR } = require("../../helpers");

module.exports = {
  mode: "development",
  entry: "/src/index.js",
  output: {
    path: generateDIR("build"),
    filename: "[name].js",
    publicPath: "/",
  },
};
