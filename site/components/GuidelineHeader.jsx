import React from "react";

export default class GuidelineHeader extends React.Component {
  render() {
    return(
      <h1 className="helvetica f4">
        { this.props.title }
        { " " } <aside className="mt0 fw3 dib f7"><a href={ "#" + this.props.slug }>Permalink</a></aside>
      </h1>
    );
  }
}
