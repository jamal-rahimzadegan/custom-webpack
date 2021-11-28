const basicConfig = require("./chunks/basic-configs");
const devServer = require("./chunks/dev-server");
const resolve = require("./chunks/resolve");
const plugins = require("./chunks/plugins");
const optimization = require("../shared/optimization");
const rules = require("../shared/rules");

module.exports = () => {
  return {
    ...basicConfig,
    devServer,
    resolve,
    plugins,
    optimization,
    module: {
      rules,
    },
  };
};
