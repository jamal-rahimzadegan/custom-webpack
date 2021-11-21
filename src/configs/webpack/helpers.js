const { BASE_DIR } = require("./constants");

function generateDIR(routePath) {
  return BASE_DIR + routePath;
}

module.exports = {
  generateDIR,
};
