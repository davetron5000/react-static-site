import React from "react";

export default class ImageFigure extends React.Component {
  render() {
    return(
      <figure className="fl mw-100 w-third-ns w-50 ma0 pa0  mr3 mt2 mb2">
      { this.props.children }
      </figure>
    );
  }
}
