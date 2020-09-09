const merge = require("webpack-merge");
const webpack = require("webpack");
// const open = require("opn");
const baseConfig = require("./webpack.base.conf.js");
const ip = require("ip").address();
const chalk = require("chalk");

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path]_[local]_[hash:base64:5]",
              },
            },
          },
          {
            loader: "less-loader", // compiles Less to CSS,
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    //热更新,不是刷新
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    port: 8080,
    hot: true, //开启热更新
    host: "0.0.0.0",
    after() {
      console.log(chalk.cyan(`Local:  http://localhost:${this.port}`));
      console.log(chalk.cyan(`On Your Network:  http://${ip}:${this.port}`));
    },
  },
  mode: "development",
  stats: "errors-warnings",
  devtool: "inline-source-map",
});
