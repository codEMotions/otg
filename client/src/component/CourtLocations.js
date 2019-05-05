import React, { Component } from 'react'

export class CourtLocations extends Component {
  render() {
    return (
      <div id="court-locations" className="mn">
        Nearby Sports Ground

        {/* get data from API */}
        <ul>
            <li><a href='#'>Grove Park - 1730 Oregon St, Berkeley</a></li>
            <li><a href='#'>Strawberry Creek Park - 1260 Allston Way, Berkeley</a></li>
            <li><a href='#'>San Pablo Park - 2800 Park St, Berkeley</a></li>
        </ul>
      </div>
    )
  }
}

export default CourtLocations
