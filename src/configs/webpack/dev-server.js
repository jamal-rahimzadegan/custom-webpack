const path = require("path");

module.exports = {
  contentBase: path.join(__dirname, "../../build"),
  compress: true,
  port: 2006,
  hot: true,
  inline: true,
  liveReload: true,
  stats: true,
  // redirect all calls from http://0.0.0.0:2006/api/* to http://0.0.0.0:8080/*  (proxy)
  proxy: {
    "/api": {
      target: {
        host: "0.0.0.0",
        protocol: "http:",
        port: 8080,
      },
      pathRewrite: {
        "^/api": "",
      },
    },
  }, // Adds headers to all responses ==> eg. CORS
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};
