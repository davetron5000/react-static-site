const React = require("react");

class Test extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

module.exports = Test;
