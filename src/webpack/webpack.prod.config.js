const basicConfig = require("./modules/basic-configs");
const devServer = require("./modules/dev-server");
const resolve = require("./modules/resolve");
const plugins = require("./modules/plugins/plugins.prod");
const optimization = require("./modules/optimization");
const rules = require("./modules/rules");

module.exports = () => {
  const isDev = false;

  return {
    ...basicConfig(isDev),
    resolve,
    plugins,
    devServer: devServer(isDev),
    optimization: optimization(isDev),
    module: {
      rules: rules(isDev),
    },
  };
};
