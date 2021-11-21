const path = require("path");

const REGEX = {
  js: /\.(js|jsx|ts|tsx)$/,
  html: /\.html$/,
  styles: /.s?css$/,
};

const BASE_DIR = path.resolve(__dirname, "../../../") + "\\";

module.exports = {
  REGEX,
  BASE_DIR,
};
