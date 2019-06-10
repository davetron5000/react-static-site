import React from "react";

export default class ImageFigureCaption extends React.Component {
  render() {
    return(
      <figcaption className="ma0 pa0 helvetica f7 fw3 i">
        { this.props.children }
      </figcaption>
    );
  }
}
