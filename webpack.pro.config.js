const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./src/package/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
    library: {
      name: "@zrcode/zero",
      type: "umd",
    },
  },

  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    // 添加 BundleAnalyzerPlugin 插件
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};
