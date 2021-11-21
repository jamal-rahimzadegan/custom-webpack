const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  minimize: true,
  minimizer: [new CssMinimizerPlugin()],
};
