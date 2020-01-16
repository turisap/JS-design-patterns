const path = require("path");
const webpack = require("webpack");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return {
    mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "lib"),
      filename: "s.js"
    },
    resolve: {
      extensions: [".js"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        }
      ]
    }
  };
};
