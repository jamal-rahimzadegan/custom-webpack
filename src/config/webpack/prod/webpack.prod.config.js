const basicConfig = require("./modules/basic-configs");
const devServer = require("./modules/dev-server");
const resolve = require("./modules/resolve");
const plugins = require("./modules/plugins");
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
