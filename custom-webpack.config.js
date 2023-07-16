const { EnvironmentPlugin } = require("webpack");
const SriPlugin = require("webpack-subresource-integrity");

require("dotenv").config();

module.exports = {
  output: {
    crossOriginLoading: "anonymous",
  },
  plugins: [
    new SriPlugin({
      hashFuncNames: ["sha384"],
      enabled: true,
    }),
    new EnvironmentPlugin(["API_KEY"]),
  ],
};
