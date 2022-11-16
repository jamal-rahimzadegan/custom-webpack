const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  usedExports: true,
  minimize: true,
  minimizer: [new CssMinimizerPlugin()],
};
