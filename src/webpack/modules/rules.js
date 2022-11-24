const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { REGEX } = require("../common/constants");

// Order of webpack loaders matters!

const BASE_CONFIG = [
  {
    test: REGEX.js,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  },

  {
    test: REGEX.html,
    use: "html-loader",
  },
  {
    test: REGEX.img,
    type: "asset/resource",
  },
  {
    test: REGEX.fonts,
    type: "asset/resource",
  },
];

const prodConfig = [
  ...BASE_CONFIG,
  {
    test: REGEX.styles,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  },
];

const devConfig = [
  ...BASE_CONFIG,
  {
    test: REGEX.styles,
    use: [
      { loader: "style-loader", options: { injectType: "styleTag" } },
      "css-loader",
      "sass-loader",
    ],
  },
];

module.exports = (isDev) => (isDev ? devConfig : prodConfig);
