import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, getProfile } from "../actions/profileActions";
import { getItems } from "../actions/itemActions";
// import uuid from "uuid";

export class SetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      nickname: "",
      displayname: "",
      favoritesport: "",

      displayChanges: "none"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSel = this.handleChangeSel.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getProfile();
    this.props.getItems();
  }

  async handleChangeSel(event) {
    await this.setState({ favoritesport: event.target.value });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      nickname: this.state.nickname,
      displayname: this.state.displayname,
      favoritesport: this.state.favoritesport
    };

    //add item via actions
    this.props.updateProfile(newItem);

    this.setState({
      displayChanges: "block"
    });
  };

  renderProfiles() {
    if (this.props.profile.length) {
      // return <Loading/>
    }
  }

  render() {
    // const { profile } = this.props.profile;

    // console.log(
    //   this.props.profile.profile &&
    //     this.props.profile.profile[0] &&
    //     this.props.profile.profile[0].firstname
    // );

    let nameToDisplay = "";

    const tppp = this.props.profile.profile;

    if (tppp && tppp[0] && tppp[0].displayname === "firstname") {
      nameToDisplay = "First Name"
    } else if (tppp && tppp[0] && tppp[0].displayname === "lastname") {
      nameToDisplay = "Last Name"
    } else {
      nameToDisplay = "Nick Name"
    }



    return (
      <div>
        set SetProfile
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="firstname"
            ref="firstname"
            placeholder="First name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="nickname"
            id="nickname"
            placeholder="Nickname"
            onChange={this.handleChange}
          />
          <div onChange={this.handleChange}>
            <input type="radio" name="displayname" value="firstname" /> First
            Name
            <input type="radio" name="displayname" value="lastname" /> Last
            Name
            <input type="radio" name="displayname" value="nickname" /> Nick
            Name
          </div>
          <select
            value={this.state.favoritesport}
            onChange={this.handleChangeSel}
          >
            <option option="choose">choose from list</option>
            <option option="Basketball">Basketball</option>
            <option option="Football">Football</option>
            <option option="Soccer">Soccer</option>
            <option option="Baseball">Baseball</option>
            <option option="Tennis">Tennis</option>
            <option option="Volleyball">Volleyball</option>
            <option option="Rugby">Rugby</option>
            <option option="Golf">Golf</option>
            <option option="Other">Other</option>
          </select>
          <button>Change</button>
        </form>
        <Link to="/">Home</Link>
        <div id="displayChanges" style={{ display: this.state.displayChanges }}>
          <p>Changes: </p>
          Name:{" "}
          {this.props.profile.profile &&
            this.props.profile.profile[0] &&
            this.props.profile.profile[0].firstname}
          <br />
          Last Name:{" "}
          {this.props.profile.profile &&
            this.props.profile.profile[0] &&
            this.props.profile.profile[0].lastname}
          <br />
          Nick Name:{" "}
          {this.props.profile.profile &&
            this.props.profile.profile[0] &&
            this.props.profile.profile[0].nickname}
          <br />
          Display Name:{" "}
          {nameToDisplay}
          <br />
          Favorite Sport:{" "}
          {this.props.profile.profile &&
            this.props.profile.profile[0] &&
            this.props.profile.profile[0].favoritesport}
        </div>
        {/* {profile.map(({ _id, firstname, favoritesport }) => (
          <ul>
            <li>
              {firstname}, {favoritesport}
            </li>
          </ul>
        ))} */}
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
  { updateProfile, getProfile, getItems }
)(SetProfile);
