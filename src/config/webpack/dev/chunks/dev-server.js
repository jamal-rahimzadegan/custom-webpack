const { generateDIR } = require("../../helpers");

module.exports = {
  contentBase: generateDIR("build"),
  compress: true,
  port: 3000,
  hot: true,
  inline: true,
  liveReload: true,
  stats: true,
};
