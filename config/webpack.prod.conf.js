const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const baseConfig = require("./webpack.base.conf.js");
module.exports = merge(baseConfig, {
  mode: "production",
  productionSourceMap: false,
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        warnings: false,
        drop_console: true,
        pure_funcs: ["console.log"],
      },
    }),
    new CleanWebpackPlugin(),
  ],
});
