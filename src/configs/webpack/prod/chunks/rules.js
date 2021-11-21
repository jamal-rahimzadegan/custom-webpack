const { REGEX } = require("../../constants").contstans;

module.exports = [
  {
    test: REGEX.js,
    exclude: /node_modules/,
    use: "babel-loader",
  },
  {
    test: REGEX.html,
    use: "html-loader",
  },
  {
    test: REGEX.styles,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
];
