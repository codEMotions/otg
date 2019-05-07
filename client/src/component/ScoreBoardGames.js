import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getGameleague,
  deleteGameleague,
  addGameleague
} from "../actions/gameleagueActions";

import { addProfile, getProfile, deleteProfile } from "../actions/profileActions";

import { addRecord } from "../actions/recordActions";
import uuid from "uuid";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

export class ScoreBoardGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalS: false,
      modalNewGame: false,

      //add to new game loop
      team1: "",
      team2: "",
      leagueName: "",
      gameType: "",
      score1: 0,
      score2: 0,
      id: "",

      //add to new profile
        newId: "",
        newFirstname: "",
        newLastname: "",
        newNickname: "",
        newDisplayname: "",
        newFavoritesport: "",
        newSilverstar: 0,
        newGoldenstar: 0,

      //add to records db
      finalScore1: 0,
      finalScore2: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSel = this.handleChangeSel.bind(this);
  }

  componentDidMount() {
    this.props.getGameleague();
    this.props.getProfile();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleNewGame = () => {
    this.setState({
      modalNewGame: !this.state.modalNewGame
    });
  };

  async handleChangeSel(event) {
    await this.setState({ gameType: event.target.value });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  //this creates the radio buttons on Modal
  populateRadioBtns = () => {
    var arrBtn = [];
    var maxNumPlayers = 1;
    switch (this.state.gameType) {
      case "Basketball":
        maxNumPlayers = 5;
        break;
      case "Soccer":
        maxNumPlayers = 11;
        break;
      case "Tennis":
        maxNumPlayers = 2;
        break;
      case "Football":
        maxNumPlayers = 11;
        break;
      case "Volleyball":
        maxNumPlayers = 6;
        break;

      default:
        break;
    }

    for (let index = 0; index < maxNumPlayers; index++) {
      arrBtn.push(
        <FormGroup check key={index + 100}>
          <Label check>
            <Input type="radio" name="numberplayers" value={index + 1} />{" "}
            {index + 1}
          </Label>
        </FormGroup>
      );
    }
    return arrBtn;
  };

  //Create Modal Name Inputs According to the Number of Players
  getNames = () => {
    var arr = [];

    for (let index = 0; index < this.state.numberplayers; index++) {
      var playerName1 = "team1player" + (index + 1);
      var playerName2 = "team2player" + (index + 1);
      arr.push(
        <Row form key={index}>
          <Col md={6}>
            <FormGroup>
              <Label for="team1">Player {index + 1}</Label>
              <Input
                type="text"
                name={playerName1}
                id="team1"
                placeholder="Team 1"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="team2">Player {index + 1}</Label>
              <Input
                type="text"
                name={playerName2}
                id="team2"
                placeholder="Team 2"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
      );
    }

    return arr;
  };

  onDeleteClick = id => {
    this.props.deleteGameleague(id);
  };

  onEndGameClick = async (id, gameType, team1, team2, score1, score2) => {
    //add star
    this.onAddStar();

    //add to game records db
    const newRecord = {
      gameType: gameType,
      team1: team1,
      team2: team2,
      score1: score1,
      score2: score2
    };

    this.props.addRecord(newRecord);

    await this.props.deleteGameleague(id);
  };

  onSubmitScore = async e => {
    e.preventDefault();

    await this.props.deleteGameleague(this.state.id);
    //create a game
    const newGame = {
      team1: this.state.team1,
      team2: this.state.team2,
      leagueName: this.state.leagueName,
      gameType: this.state.gameType,
      score1: this.state.score1,
      score2: this.state.score2
    };

    await this.props.addGameleague(newGame);
    await console.log(this.state);

    this.toggleS();
  };

  toggleS = async (id, team1, team2, leagueName, gameType, score1, score2) => {
    await this.setState({
      modalS: !this.state.modalS,
      team1: team1,
      team2: team2,
      leagueName: leagueName,
      gameType: gameType,
      score1: score1,
      score2: score2,
      id: id
    });
  };

  onAddStar = async  () => {

    //grab the current and sent to state
    const { profile } = this.props.profile;

    await profile.map(
      ({
        _id,
        firstname,
        lastname,
        nickname,
        displayname,
        favoritesport,
        silverstar,
        goldenstar
      }) => (
        
        this.setState({
          newId: _id,
          newFirstname: firstname,
          newLastname: lastname,
          newNickname: nickname,
          newDisplayname: displayname,
          newFavoritesport: favoritesport,
          newSilverstar: silverstar,
          newGoldenstar: goldenstar
        })
      )
    );

    this.props.deleteProfile(this.state.newId);

    let setSilverstar = this.state.newSilverstar + 1

    

    const newProfile = {
      firstname: this.state.newFirstname,
      lastname: this.state.newLastname,
      nickname: this.state.newNickname,
      displayname: this.state.newDisplayname,
      favoritesport: this.state.newFavoritesport,
      silverstar: setSilverstar,
      goldenstar: this.state.newGoldenstar,
    };

    this.props.addProfile(newProfile)

    
  };

  onSubmitToNewGame = () => {

    const newGame = {
      team1: this.state.team1,
      team2: this.state.team2,
      leagueName: this.state.leagueName,
      gameType: this.state.gameType,
      score1: 0,
      score2: 0
    }

    
    this.props.addGameleague(newGame);

  }

  render() {
    const { gamesleague } = this.props.gamesleague;

    return (
      <div id="score-board" className="mn">
        <h4>Score Board - Live Games</h4>

        <br/>

        <Button
            color="primary"
            style={{ marginBottom: "1rem" }}
            onClick={this.toggleNewGame}
          >
            New Game
          </Button>
          <hr/>
        {gamesleague.map(({ team1, team2, gameType, _id, score1, score2 }) => (
          <div className="score-board-game" key={uuid()}>
            <button
              onClick={this.onDeleteClick.bind(this, _id)}
              className="delete-btn-score-board"
            >
              <p>&times;</p>
            </button>
            <span className="score-board-info">
              <span className="score-board-teams">{team1}</span> {score1} vs{" "}
              {score2} <span className="score-board-teams">{team2}</span>
            </span>

            <button
              onClick={this.onEndGameClick.bind(
                this,
                _id,
                gameType,
                team1,
                team2,
                score1,
                score2
              )}
              className="end-btn-score-board"
            >
              <p>End</p>
            </button>

            <button onClick={this.toggle} className="update-btn-score-board">
              <p>U</p>
            </button>

            <button
              onClick={this.toggleS.bind(
                this,
                _id,
                team1,
                team2,
                gameType,
                score1,
                score2
              )}
              className="update-score-btn-score-board"
            >
              <p>S</p>
            </button>

            <div className="separator-score-board" />
          </div>
        ))}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update Game Info</ModalHeader>

          <ModalBody>
            <select value={this.state.gameType} onChange={this.handleChangeSel}>
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

            <Form onSubmit={this.onSubmit}>
              <FormGroup tag="fieldset" row onChange={this.handleChange}>
                <legend className="col-form-label col-sm-6">
                  How Many Players a Side
                </legend>
                <Col sm={10}>{this.populateRadioBtns()}</Col>
              </FormGroup>

              {this.getNames()}

              <InputGroup>
                <Button outline>Update Game</Button>
              </InputGroup>
            </Form>
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.modalS} toggle={this.toggleS}>
          <ModalHeader toggle={this.toggleS}>Update Score</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmitScore}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="score1">Team 1 Score</Label>
                    <Input
                      type="text"
                      name="score1"
                      id="score1"
                      placeholder="Team 1 Score"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="score2">Team 2 Score</Label>
                    <Input
                      type="text"
                      name="score2"
                      id="score2"
                      placeholder="Team 2 Score"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <InputGroup>
                <Button outline>Update Score</Button>
              </InputGroup>
            </Form>
          </ModalBody>
        </Modal>
      
        <Modal isOpen={this.state.modalNewGame} toggle={this.modalNewGame}>
          <ModalHeader toggle={this.modalNewGame}>Start a New Game</ModalHeader>

          <ModalBody>
            <select value={this.state.gameType} onChange={this.handleChangeSel}>
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

            <Form onSubmit={this.onSubmitToNewGame}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="team1">Team 1</Label>
                    <Input
                      type="text"
                      name="team1"
                      id="team1"
                      placeholder="Team 1 Name"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="team2">Team 2</Label>
                    <Input
                      type="text"
                      name="team2"
                      id="team2"
                      placeholder="Team 2 Name"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup tag="fieldset" row onChange={this.handleChange}>
                <legend className="col-form-label col-sm-6">
                  How Many Players a Side
                </legend>
                <Col sm={10}>
                  
                  {this.populateRadioBtns()}

                </Col>
              </FormGroup>

              {this.getNames()}

              <InputGroup>
                <Button outline>Game Starting Now</Button>

                <Input placeholder="time" />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Schedule</Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  profile: state.profile,
  league: state.league,
  gamesleague: state.gamesleague
});

export default connect(
  mapStateToProps,
  {
    getGameleague,
    deleteGameleague,
    addGameleague,
    addRecord,
    addProfile,
    getProfile,
    deleteProfile
  }
)(ScoreBoardGames);
