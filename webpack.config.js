const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// console.log("🚀 ~ file: webpack.config.js:8 ~ __dirname", __dirname); //!

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new HtmlWebpackInlineSVGPlugin({runPreEmit: true}),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  //   optimization: {
  //     runtimeChunk: "single",
  //   },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    }, //!!
    client: {
      logging: "error",
    },
    static: {
      directory: path.join(__dirname, "dist"),
      //   directory: path.join(__dirname, "./"),
    },

    liveReload: true,

    static: "./dist",
    open: true,
    port: 7777,
  },
};
