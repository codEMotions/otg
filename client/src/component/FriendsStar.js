import React, { Component } from "react";

export class FriendsStar extends Component {
  render() {
    return (
      <div className="friends-star">
        <div className="friends-star-golden">
          <h3>{this.props.goldenstar}</h3>
        </div>
        <div className="friends-star-silver">
          <h3>{this.props.silverstar}</h3>
        </div>
      </div>
    );
  }
}

export default FriendsStar;
