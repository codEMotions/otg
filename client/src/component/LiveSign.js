import React, { Component } from "react";

export class LiveSign extends Component {
  render() {
    return (
      <div id="live-sign" style={{ color: "red", display: this.props.show }}>
        LIVE
      </div>
    );
  }
}

export default LiveSign;
