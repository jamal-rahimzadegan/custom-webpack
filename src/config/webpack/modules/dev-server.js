const { generateDIR } = require("../common/helpers");
const { isDev } = require("../common/constants");

module.exports = (isDev) => {
  const prodConfig = {
    static: generateDIR("build"),
    compress: true,
    port: 8000,
  };

  const devConfig = {
    compress: true,
    port: 3000,
    liveReload: true,
  };

  return isDev ? devConfig : prodConfig;
};
