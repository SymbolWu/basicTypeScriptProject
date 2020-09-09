const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const baseConfig = require("./webpack.base.conf.js");

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          MiniCssExtractPlugin.loader,
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
    new TerserPlugin({
      terserOptions: {
        mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的，具体看后面的链接
        compress: {
          drop_console: true, // 传true就是干掉所有的console.*这些函数的调用.
          drop_debugger: true, // 干掉那些debugger;
          pure_funcs: ["console.log"], // 如果你要干掉特定的函数比如console.info ，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
        },
      },
    }),
    new OptimizeCSSAssetsPlugin({}),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
    new MiniCssExtractPlugin({
      filename: "css/index.[hash].css",
    }),
  ],
  mode: "production",
  devtool: false,
  stats: "errors-only",
  performance: {
    hints: "warning" /*或者直接关闭hints:false*/,
    //入口起点的最大体积
    maxEntrypointSize: 50000000,
    //生成文件的最大体积
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js");
    },
  },
});
