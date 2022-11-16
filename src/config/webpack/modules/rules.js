const { REGEX } = require("../common/constants");

// Order of webpack loaders matters!
module.exports = [
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
    test: REGEX.styles,
    use: ["style-loader", "css-loader", "sass-loader"],
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
