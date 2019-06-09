import React from "react";
import Test from "../components/Test";

export default function(props) {
  return (
<html lang="en">
  <head>
  </head>
  <body>
    <main className="mt0 bg-future-blue near-black">
      <Test name="Bob" />
      <div className="tc pt4">
        <a href="/install.html" className="dib link ba br3 pa3 ph4 f3 futura light-yellow bg-dark-gray b--light-yellow grow">
          Get Started
        </a>
      </div>
    </main>
  </body>
</html>
  );
};
