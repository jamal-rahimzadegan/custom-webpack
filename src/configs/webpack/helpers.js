const { BASE_DIR } = require("./constants");

// pass the dir according to the root dir
function generateDIR(dir) {
  return BASE_DIR + dir;
}

module.exports = {
  generateDIR,
};
