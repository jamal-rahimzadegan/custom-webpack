const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (isDev) => {
  const prodConfig = {
    usedExports: true,
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  };

  const devConfig = {
    usedExports: true,
  };

  return isDev ? devConfig : prodConfig;
};
