import React from "react";

class Loader extends React.Component<any | JSX.Element> {
  constructor(props: any | JSX.Element) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{this.props.message}</div>
      </div>
    );
  }
}

export default Loader;
