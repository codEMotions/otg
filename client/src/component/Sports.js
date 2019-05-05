import React, { Component } from 'react'
import NewGame from './NewGame'
import NewLeague from './NewLeague';

import { connect } from "react-redux";

import { getItems } from '../actions/itemActions'
import ScoreBoard from './OldScoreBoard';

export class Sports extends Component {


  componentDidMount(){
    this.props.getItems();
}

  render() {

    // const { items } = this.props.item
    
    return (
      <div>
        <div id="sports-hut" className="mn">
          <NewGame />
          <ScoreBoard />
          <NewLeague />

          {/* {items.map(({ firstname }) => (

            <ul>
              <li>{firstname}</li>
            </ul>
            
          ))} */}

          
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  item: state.item,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getItems }
)(Sports);
