const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    publicPath: "build",
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "static"),
          to: path.join(__dirname, "build"),
        },
      ],
    }),
  ],
};
