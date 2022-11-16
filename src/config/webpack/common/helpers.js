const { ROOT_DIR } = require("./constants");

const generateDIR = (dir) => ROOT_DIR + dir; // pass the dir according to the root dir

module.exports = {
  generateDIR,
};
