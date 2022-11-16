const path = require("path");

const REGEX = {
  js: /\.(js|jsx|ts|tsx)$/,
  html: /\.html$/,
  styles: /.s?css$/,
  fonts: /\.(woff|woff2|eot|ttf|otf)$/i,
  img: /\.(png|svg|jpg|jpeg|gif)$/i,
};

const ROOT_DIR = path.resolve(__dirname, "../../../../") + "\\";

module.exports = {
  REGEX,
  ROOT_DIR,
};
