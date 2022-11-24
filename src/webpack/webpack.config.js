const basicConfig = require("./modules/basic-configs");
const devServer = require("./modules/dev-server");
const resolve = require("./modules/resolve");
const plugins = require("./modules/plugins");
const optimization = require("./modules/optimization");
const rules = require("./modules/rules");

module.exports = (params) => {
  const isDev = params.NODE_ENV === "development";

  return {
    ...basicConfig(isDev),
    resolve,
    plugins: plugins(isDev),
    optimization: optimization(isDev),
    devServer: devServer(isDev),
    module: {
      rules: rules(isDev),
    },
  };
};
