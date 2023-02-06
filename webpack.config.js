const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log("🚀 ~ file: webpack.config.js:8 ~ __dirname", __dirname); //!

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
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  //   optimization: {
  //     runtimeChunk: "single",
  //   },
  devServer: {
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
