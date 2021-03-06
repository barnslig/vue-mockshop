/* eslint-disable import/no-extraneous-dependencies */
const glob = require("glob");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { join } = require("path");

module.exports = {
  entry: glob.sync(join(__dirname, "src/10_apps/*/index.js")),

  plugins: [new VueLoaderPlugin()],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  }
};
