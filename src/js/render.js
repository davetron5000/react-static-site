import path from "path";
import fs from "fs";

import logger from "./log";
import Page from "./Page";
import Renderer from "./Renderer";

const log = logger(path.basename(__filename));

export default function({ source_path, output_path }) {
  log(`Rendering from ${source_path} to ${output_path}`);

  const pages_path = path.join(source_path, "pages");
  const pages = fs
    .readdirSync(pages_path)
    .filter(Page.matcher())
    .map(Page.factory({ pages_path: pages_path }));
  const renderer = new Renderer({ output_path: output_path });
  const render_function = renderer.render_to_file.bind(renderer);

  pages.forEach(render_function);
}
