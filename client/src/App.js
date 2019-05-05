import React, { Component } from "react";
// import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import AppNavBar from "./component/AppNavBar";
import Profile from "./component/Profile";
// import Friends from "./component/Friends";
import Sports from "./component/Sports";
import NewsFeed from "./component/NewsFeed";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SetProfile from "./component/SetProfile";
import AthleteCV from "./component/AthleteCV";

import { Container } from "reactstrap";

import { loadUser } from "./actions/authActions";
import LeagueBoard from "./component/LeagueBoard";
import { ScoreBoard } from "./component/OldScoreBoard";
import ScoreBoardGames from "./component/ScoreBoardGames";
import Friends from "./component/Friends";
import LiveMessage from "./component/LiveMessage";
import GameRecords from "./component/GameRecords";
import CourtLocations from "./component/CourtLocations";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
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
