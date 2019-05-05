import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProfile } from '../actions/profileActions'

export class SportIcon extends Component {
  render() {
    
    //console.log(this.props.profile.profile[0] && this.props.profile.profile[0].favoritesport)
    let favoriteSport = this.props.profile.profile[0] && this.props.profile.profile[0].favoritesport
    
    let sportsIcon;

      switch (favoriteSport) {
          case "Basketball":
              sportsIcon = "basketball.png" 
              break;
            case "Football":
              sportsIcon = "football.png" 
              break;
            case "Soccer":
              sportsIcon = "soccerball.png" 
              break;
            case "Tennis":
              sportsIcon = "tennis.png" 
              break;
            case "Volleyball":
              sportsIcon = "volleyball.png" 
              break;
      //
          default:
              break;
      }
    return (
      <div>
          <div style={{ backgroundImage: 'url('+ sportsIcon +')'}} id="sports-icon">
            
          </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
    item: state.item,
    profile: state.profile,
    game: state.game
  });
  
  export default connect(
    mapStateToProps,
    { getProfile }
  )(SportIcon);
  
