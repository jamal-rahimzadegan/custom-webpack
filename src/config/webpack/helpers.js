const { BASE_DIR } = require("./constants");

const generateDIR = (dir) => BASE_DIR + dir; // pass the dir according to the root dir

module.exports = {
  generateDIR,
};
