import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfile } from "../actions/profileActions";

export class StarProfile extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    const { profile } = this.props.profile;

    return (
      <div>
        {profile.map(({ _id, silverstar, goldenstar }) => (
          <div key={_id} className="mn" id="star-profile">
            <div id="golden-star">
              <p>{goldenstar}</p>
            </div>

            <div id="silver-star">
              <p>{silverstar}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfile }
)(StarProfile);
