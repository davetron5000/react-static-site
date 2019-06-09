require("@babel/register")({
  presets: [
    "@babel/preset-react"
  ],
  plugins: [
    "transform-es2015-modules-commonjs"
  ]
});

const path = require("path");

const render = require("./render").default;

render({
  source_path: path.join(__dirname, "..", "..", "html"),
  output_path: path.join(__dirname, "..", "..", "..", "site")
});
