const { generateDIR } = require("../../helpers");

module.exports = {
  static: generateDIR("build"),
  compress: true,
  port: 3000,
  liveReload: true,
};
