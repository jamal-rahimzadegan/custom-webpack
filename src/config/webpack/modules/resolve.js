const { generateDIR } = require("../common/helpers");

module.exports = {
  alias: {
    "@utils": generateDIR("src\\utils"),
  },
};
