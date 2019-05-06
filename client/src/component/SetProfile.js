import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProfile, getProfile, deleteProfile } from "../actions/profileActions";
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
      silverstar: 0,
      goldenstar: 0,

      displayChanges: "block"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSel = this.handleChangeSel.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getProfile();
  }

  async handleChangeSel(event) {
    await this.setState({ favoritesport: event.target.value });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }


  onMakeChangesClick = (id, firstname, lastname, nickname, displayname, favoritesport, goldenstar, silverstar) => {

    const newItem = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      nickname: this.state.nickname,
      displayname: this.state.displayname,
      favoritesport: this.state.favoritesport,
      silverstar: silverstar,
      goldenstar: goldenstar,
    };

    //add item via actions
    this.props.addProfile(newItem);

    this.props.deleteProfile(id)
    console.log("workskks")
  }

  render() {
    const { profile } = this.props.profile;

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
        <h2>Your Profile</h2>
        <form onSubmit={this.onSubmit}>
          <input
            className="input-set-profile"
            type="text"
            name="firstname"
            ref="firstname"
            placeholder="First name"
            onChange={this.handleChange}
          />
          <br/>
          <input
            className="input-set-profile"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name"
            onChange={this.handleChange}
          />
          <br/>
          <input
            className="input-set-profile"
            type="text"
            name="nickname"
            id="nickname"
            placeholder="Nickname"
            onChange={this.handleChange}
          />
          <div className="input-set-profile" onChange={this.handleChange}>
            <input className="radio-set-profile" type="radio" name="displayname" value="firstname" /> First
            Name
            <input className="radio-set-profile" type="radio" name="displayname" value="lastname" /> Last
            Name
            <input className="radio-set-profile" type="radio" name="displayname" value="nickname" /> Nick
            Name
          </div>
          <select
            className="input-set-profile"
            value={this.state.favoritesport}
            onChange={this.handleChangeSel}
          >
            <option option="choose">Choose from list</option>
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
          
        </form>
        
        <div id="displayChanges" style={{ display: this.state.displayChanges }}>
          <p>Changes: </p>


          {profile.map(({ _id, firstname, lastname, nickname, displayname, favoritesport, silverstar, goldenstar }) => (
           
           <div key={_id}>
              <button onClick={this.onMakeChangesClick.bind(this, _id, firstname, lastname, nickname, displayname, favoritesport, goldenstar, silverstar)}>Make Changes</button>

              <br />
              <br />

              Name:{" "}{firstname}
              <br />
              Last Name:{" "}{lastname}
              <br />
              Nick Name:{" "}{nickname}
              <br />
              Display Name:{" "}{nameToDisplay}
              <br />
              Favorite Sport:{" "}{favoritesport}
              <br />

            </div>

          ))}
          
        </div>

        <Link to="/">Back</Link>
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
  { addProfile, getProfile, deleteProfile }
)(SetProfile);
