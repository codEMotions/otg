import React, { Component } from "react";
// import React from "react";

import axios from "axios";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import AppNavBar from "./component/AppNavBar";
import Profile from "./component/Profile";
// import Friends from "./component/Friends";
// import Sports from "./component/Sports";
// import NewsFeed from "./component/NewsFeed";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SetProfile from "./component/SetProfile";
import AthleteCV from "./component/AthleteCV";

import { Container } from "reactstrap";

import { loadUser } from "./actions/authActions";
import LeagueBoard from "./component/LeagueBoard";
// import { ScoreBoard } from "./component/OldScoreBoard";
import ScoreBoardGames from "./component/ScoreBoardGames";
import Friends from "./component/Friends";
import LiveMessage from "./component/LiveMessage";
import GameRecords from "./component/GameRecords";
import CourtLocations from "./component/CourtLocations";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0
    };
  }

  async componentDidMount() {
    store.dispatch(loadUser());

    var temperature;

    const getUserPosition = () => {
      // creating to variables, x representing the user's latitude and y representing the user's longtitude.
      var x, y;
      //API Key from the "open weather map" documentation "current weather data"
      var APIKey = "c853a4cc4fc8c7501716acbd26d1b50e";
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          x = position.coords.latitude;
          y = position.coords.longitude;
          console.log(x, y);

          //the get request for google's geolocation API. Concatenated the coordinates of user's current position using json parse, radius, the type of place being a park and the keyword being "basketball courts". This will return the nearest parks with a basketball court to the user location.
          axios
            .get(
              "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
                x +
                "," +
                y +
                "&radius=1500&type=park&keyword=basketball%20court&key=AIzaSyCzM__JkWwv3yQDfugZDCdqfY21F48PtyA"
            )
            .then((data) => {
              console.log(data);
              
              //This is the get request for the current weather data, once again concatenating the latitude and longtitude of the current user position.
              var queryURL =
                "https://api.openweathermap.org/data/2.5/weather?" +
                "lat=" +
                x +
                "&lon=" +
                y +
                "&units=imperial&appid=" +
                APIKey;

              axios
                .get(queryURL)
                .then((data) => {
                  console.log("weather");
                  console.log(data.data);
                  console.log(data.data.main.temp);

                  if (data.data.main.temp) {
                    temperature = data.data.main.temp;
                    console.log("this is the weather ", temperature);
                    this.setState({
                      temperature: temperature
                    })
                  }
                })

                .catch(function(error) {
                  console.log(error);
                });
            })
            .catch(function(error) {
              console.log(error);
            });
            if(temperature){
              console.log("=-=-=-=-=-=-=-==-=", temperature)
            }
            
            return temperature
        });
      } else {
        alert("Geolocation is not supported by this browser");
      }

      return temperature;
    };

    await getUserPosition();

  }

  

  render() {
    console.log(this.state);
    // console.log(this.getUserPosition, " -=-= =-= =-= -= ")

    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar temp={this.state.temperature}/>
          <Container>
            <Router>
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <div id="article-one">
                      <Profile />
                      <Friends />
                      <CourtLocations />
                    </div>
                    <div id="article-two">
                      <LeagueBoard />
                      <LiveMessage />
                    </div>
                    <div id="article-three">
                      <ScoreBoardGames />
                      <GameRecords />
                    </div>
                  </div>
                )}
              />

              <Route path="/setprofile" component={SetProfile} />

              <Route path="/athletecv" component={AthleteCV} />
            </Router>
          </Container>

          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
