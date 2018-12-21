/* eslint-disable import/no-extraneous-dependencies */
const glob = require("glob");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { join } = require("path");

module.exports = {
  entry: glob.sync(join(__dirname, "src/10_apps/*/app.js")),

  plugins: [new VueLoaderPlugin()],

  devServer: {
    disableHostCheck: true
  },

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
