import React from "react";
const ReactDOMServer = require("react-dom/server");
const Test = require("./Test");

module.exports = function() {
  console.log(ReactDOMServer.renderToStaticMarkup(<Test name="Bob"/>));
}
