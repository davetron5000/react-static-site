import path from "path";
import log from "./log";

export default class Page {
  constructor(path_to_page_source) {
    this.path_to_page_source = path_to_page_source;
    this.output_file_name = path.basename(path_to_page_source, ".jsx");
  }

  static matcher() {
    return function(file) {
      if (file.match(/\.html\.jsx$/)) {
        return true;
      }
      else {
        log(`${file} is not a .jsx. Ignoring...`);
        return false
      }
    }
  }

  static factory({ pages_path }) {
    return function(file) {
      return new Page(path.join(pages_path, file));
    }
  }

  get [Symbol.toStringTag]() {
    return `{ Page path_to_page_source=${this.path_to_page_source} output_file_name=${this.output_file_name} }`;
  }
};
