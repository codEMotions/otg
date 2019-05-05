import React, { Component } from "react";
import { getProfile } from "../actions/profileActions";
import { connect } from "react-redux";

export class NameDisplay extends Component {
  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    // const { profile } = this.props.profile;
    // console.log(" -=-=-= =-=- =-= =-= ")
    // if(this.props.profile.length) {
    //   console.log(this.props.profile[0].firstname)
    // }
    let nameToDisplay = "";

    const tppp = this.props.profile.profile;

    if (tppp && tppp[0] && tppp[0].displayname === "firstname") {
      nameToDisplay =
        this.props.profile.profile &&
        this.props.profile.profile[0] &&
        this.props.profile.profile[0].firstname;
    } else if (tppp && tppp[0] && tppp[0].displayname === "lastname") {
      nameToDisplay =
        this.props.profile.profile &&
        this.props.profile.profile[0] &&
        this.props.profile.profile[0].lastname;
    } else {
      nameToDisplay =
        this.props.profile.profile &&
        this.props.profile.profile[0] &&
        this.props.profile.profile[0].nickname;
    }

    return (
      <div>
        <div id="profile-name">
          <h1 id="profile-name-value">{nameToDisplay}</h1>
        </div>
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
)(NameDisplay);
