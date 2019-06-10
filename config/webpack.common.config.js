const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs                   = require("fs");
const path                 = require("path");
const html_files           = require("./html_files");
const copy_images           = require("./copy_images");


module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: html_files({}).concat(copy_images),
  entry: './site/js/index.js',
  mode: 'none'
};
