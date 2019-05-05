import React, { Component } from "react";
import FriendsStar from "./FriendsStar";
import FriendsName from "./FriendsName";

export class FriendTile extends Component {
  render() {
    return (
      <div>
        <div
          className="friend-tile mn"
          style={{ backgroundImage: this.props.bg }}
        >
          <FriendsName name={this.props.name}/>
          <FriendsStar
            silverstar={this.props.silverstar}
            goldenstar={this.props.goldenstar}
          />
        </div>
      </div>
    );
  }
}

export default FriendTile;
