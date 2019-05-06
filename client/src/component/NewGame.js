import React, { Component } from "react";
import { connect } from "react-redux";

import { addGame } from "../actions/gameActions";

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
  // InputGroupButtonDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  InputGroupAddon
} from "reactstrap";

export class NewGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      displayBtn: "block",
      endBtn: "none",
      currgame: "none",
      // gameStrtBtn: "block",

      gameresultsdisplay: "none",

      //send to the db
      gameAuthor: "Emerson",

      gameType: "",

      team1: "Team 1",
      team2: "Team 2",

      team1score: 0,
      team2score: 0,
      numberplayers: "",

      team1player1: "Player 1",
      team1player2: "Player 2",
      team1player3: "Player 3",
      team1player4: "Player 4",
      team1player5: "Player 5",

      team2player1: "Player 1",
      team2player2: "Player 2",
      team2player3: "Player 3",
      team2player4: "Player 4",
      team2player5: "Player 5",

      gameLive: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSel = this.handleChangeSel.bind(this);
  }

  // someFunction = () => {

  // }

  async handleChangeSel(event) {
    await this.setState({ gameType: event.target.value });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  showBtnOnModal = () => {
    if (this.state.numberplayers !== "") {
      this.setState({
        gameStrtBtn: "block"
      });
    }
  };

  //this creates the radio buttons on Modal 
  populateRadioBtns = () => {
    var arrBtn = [];
    var maxNumPlayers = 1
    switch (this.state.gameType) {
      case "Basketball":
        maxNumPlayers = 5
        break;
      case "Soccer":
        maxNumPlayers = 11
        break;
      case "Tennis":
        maxNumPlayers = 2
        break;
      case "Football":
        maxNumPlayers = 11
        break;
      case "Volleyball":
        maxNumPlayers = 6
        break;
    
      default:
        break;
    }

    for (let index = 0; index < maxNumPlayers; index++) {
      arrBtn.push(
        <FormGroup check key={index + 100}>
          <Label check>
            <Input type="radio" name="numberplayers" value={index + 1} /> {index + 1}
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

  createGame = () => {
    //this.setState( state => game: [...state, "game1"])
    return (
      <p>
        {this.state.team1} v {this.state.team2}
      </p>
    );
  };

  //Sending this data to the db
  onSubmit = async e => {
    e.preventDefault();

    await this.setState({
      displayBtn: "none",
      endBtn: "block",
      currgame: "block",

      gameLive: true

    });

    //Creating a new game on the DB
    const newGame = {
      gameAuthor: this.state.gameAuthor,

      gameType: this.state.gameType,

      team1: this.state.team1,
      team2: this.state.team2,

      team1score: 0,
      team2score: 0,
      numberplayers: this.state.numberplayers,

      team1player1: this.state.team1player1,
      team1player2: this.state.team1player2,
      team1player3: this.state.team1player3,
      team1player4: this.state.team1player4,
      team1player5: this.state.team1player5,

      team2player1: this.state.team2player1,
      team2player2: this.state.team2player2,
      team2player3: this.state.team2player3,
      team2player4: this.state.team2player4,
      team2player5: this.state.team2player5,

      gameLive: this.state.gameLive
    };

    this.props.addGame(newGame);

    this.toggle();
  };


  
  
  render() {
    // if (this.state.numberplayers === "1") {
    //   console.log(1);
    // }
    // console.log(this.state)

    return (
      <div>
        <div style={{ display: this.state.displayBtn }}>
          <Button
            color="primary"
            style={{ marginBottom: "2rem" }}
            onClick={this.toggle}
          >
            New Game
          </Button>
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Start a New Game</ModalHeader>

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

            <Form onSubmit={this.onSubmit}>
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
  game: state.game
});

export default connect(
  mapStateToProps,
  { addGame }
)(NewGame);
