import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path";
import fs from "fs";
import log from "./log";

export default class Renderer {
  constructor({ output_path }) {
    this.output_path = output_path;
  }

  render_to_file(page) {
    const output_file = path.join(this.output_path, page.output_file_name);

    log(`Rendering ${page} to ${output_file}`);

    const component = require(page.path_to_page_source).default;

    fs.writeFileSync(
      output_file,
      "<!DOCTYPE html>" +
        ReactDOMServer.renderToStaticMarkup(React.createElement(component, {}))
    );
  }
}
