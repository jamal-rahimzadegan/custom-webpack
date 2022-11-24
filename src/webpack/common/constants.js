const path = require("path");

const REGEX = {
  JS: /\.(js|jsx|ts|tsx)$/,
  HTML: /\.html$/,
  STYLES: /.s?css$/,
  FONTS: /\.(woff|woff2|eot|ttf|otf)$/i,
  IMG: /\.(png|svg|jpg|jpeg|gif)$/i,
};

const ROOT_DIR = path.resolve(__dirname, "../../../") + "\\";

module.exports = {
  REGEX,
  ROOT_DIR,
};
