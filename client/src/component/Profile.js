import React, { Component } from "react";
import { Link } from "react-router-dom";
import NameDisplay from "./NameDisplay";
import StarProfile from "./StarProfile";
import SportIcon from "./SportIcon";
export class Profile extends Component {
  render() {
    return (
      <div>
        <div
          id="profile"
          style={{ backgroundImage: 'url("sportwill.png")' }}
          className="mn"
        >
          <StarProfile />

          <div id="cleardiv">
            <Link
              style={{ backgroundImage: 'url("gear-settings.png")' }}
              id="profile-settings-link"
              to="/setprofile"
            >
              <img width="18px" alt="" src="holder-sq.png" />
            </Link>

            {/* <Link id="cv-athelte-link" to="/athletecv">
              cv
            </Link> */}
            <NameDisplay />
            <SportIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
