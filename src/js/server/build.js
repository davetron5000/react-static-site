require("@babel/register")({
  presets: [
    "@babel/preset-react"
  ],
  plugins: [
    "transform-es2015-modules-commonjs"
  ]
});

const path = require("path");
const fs = require("fs");
const render = require("./render").default;
const log = require("./log").default;

const source_path = path.join(__dirname, "..", "..", "..", "site");
const output_path = path.join(__dirname, "..", "..", "..", "site", "rendered_html");

log(`source_path is '${source_path}'`);
log(`output_path is '${output_path}'`);

fs.mkdirSync(output_path, { recursive: true });

log("Rendering");
render({
  source_path: source_path,
  output_path: output_path
});
