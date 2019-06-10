const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

module.exports = function(plugin_config) {
  const plugins = [];
  const htmlFiles = fs.readdirSync(path.join(__dirname,"..","site","rendered_html"));
  for (let i = 0; i < htmlFiles.length; i++) {
    const htmlFile = htmlFiles[i];
    if (path.extname(htmlFile) === ".html") {
      plugins.push(
        new HtmlPlugin(
          Object.assign(
            plugin_config,
            {
              template: "./site/rendered_html/" + htmlFile,
              publishDate: (new Date()).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
              filename: htmlFile
            }
          )
        )
      );
    }
  }
  return plugins;
}
