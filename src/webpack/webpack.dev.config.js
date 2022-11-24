const basicConfig = require("./modules/basic-configs");
const devServer = require("./modules/dev-server");
const resolve = require("./modules/resolve");
const plugins = require("./modules/plugins/plugins.dev");
const optimization = require("./modules/optimization");
const rules = require("./modules/rules");

module.exports = () => {
  const isDev = true;

  return {
    ...basicConfig(isDev),
    resolve,
    plugins,
    optimization: optimization(isDev),
    devServer: devServer(isDev),
    module: {
      rules: rules(isDev),
    },
  };
};
