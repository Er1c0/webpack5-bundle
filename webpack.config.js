const path = require("path");

module.exports = {
  // 入口文件
  entry: "./index.js",
  // 输出文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // 配置loader
  module: {
    rules: [
      // style-loader和css-loader加载css文件
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
