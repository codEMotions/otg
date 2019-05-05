import React, { Component } from 'react'

export class FriendsName extends Component {
  render() {
    return (
      <div className="friends-names">
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default FriendsName
