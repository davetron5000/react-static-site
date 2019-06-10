const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = [
  new CopyWebpackPlugin(
    [
      { from: './site/images/**/*', to: './images', flatten: true, ignore: [ "Icon.pxm", "Icon.png" ] },
      { from: './site/images/favicon.ico', to: '.', flatten: true }
    ],
    {
      debug: true
    }
  )
];
