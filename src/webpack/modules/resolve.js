const { generateDIR } = require("../common/helpers");

module.exports = {
  extensions: [".js", ".css", ".html"],
  alias: {
    "@utils": generateDIR("src\\utils"),
  },
};
