const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // 리액트 파일이 시작하는 곳(webpack4부터 생략가능 === 기본이 ./src/index.js)
  output: {
    path: __dirname + "/build",
    filename: "bundle.[hash].js", // [hash]는 컴파일될 때마다 웹팩에서 생성된 해시로 변경해주어 캐싱에 도움
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "[hash]-[name].[ext]",
              publicPath: "/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
};
