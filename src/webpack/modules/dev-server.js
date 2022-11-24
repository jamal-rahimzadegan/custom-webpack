const { generateDIR } = require("../common/helpers");
const { isDev } = require("../common/constants");

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

module.exports = (isDev) => (isDev ? devConfig : prodConfig);
