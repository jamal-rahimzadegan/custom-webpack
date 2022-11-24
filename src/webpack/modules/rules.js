const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { REGEX } = require("../common/constants");

const BASE_RULES = [
  {
    test: REGEX.JS,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  },
  {
    test: REGEX.HTML,
    use: "html-loader",
  },
  {
    test: REGEX.IMG,
    type: "asset/resource",
  },
  {
    test: REGEX.FONTS,
    type: "asset/resource",
  },
];

const prodConfig = [
  ...BASE_RULES,
  {
    test: REGEX.STYLES,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  },
];

const devConfig = [
  ...BASE_RULES,
  {
    test: REGEX.STYLES,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
];

module.exports = (isDev) => (isDev ? devConfig : prodConfig);
