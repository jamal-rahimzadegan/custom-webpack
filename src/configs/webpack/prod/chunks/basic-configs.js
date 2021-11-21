const { generateDIR } = require("../../helpers");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: generateDIR("build"),
    filename: "[name].js",
    publicPath: "/static/",
  },
};
