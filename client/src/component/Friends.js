import React, { Component } from 'react'
import FriendTile from './FriendTile';

export class Friends extends Component {

    createFriends = () => {

        let friendsArr = []

        //later get the friends star from db
        let friendsNames = ["FZ", "AA", "BF", "CA", "EF", "CS"]
        let friendsStarsSilver = [2, 5, 12, 7, 3, 4];
        let friendsStarsGolden = [1, 1, 3, 7, 3, 1];

        let bg;

        for (let index = 0; index < 6; index++) {
          bg = 'url("friend'+ index +'.png")'
            friendsArr.push(<FriendTile name={friendsNames[index]} silverstar={friendsStarsSilver[index]} goldenstar={friendsStarsGolden[index]} key={index} bg={bg}/>)
        }

        return friendsArr
    }






  render() {
    return (
      <div>
        <div id="friends-place" className="mn">
            <p id="friends-list-title">Friends List</p>
            {this.createFriends()}
            <p id="see-all">See all</p>
        </div>
      </div>
    )
  }
}

export default Friends
