const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const prodConfig = {
  usedExports: true,
  minimizer: [new CssMinimizerPlugin()],
};

const devConfig = {
  usedExports: true,
};

module.exports = (isDev) => (isDev ? devConfig : prodConfig);
