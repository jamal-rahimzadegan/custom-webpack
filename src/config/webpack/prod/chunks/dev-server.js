const { generateDIR } = require("../../helpers");

module.exports = {
  contentBase: generateDIR("build"),
  compress: true,
  port: 8000,
  hot: true,
  inline: true,
  liveReload: true,
  stats: true,
};
