import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { addLeague, getLeagues, deleteLeague } from "../actions/leagueActions";
import { addGameleague } from "../actions/gameleagueActions"

import {
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row
  //   InputGroup,
  // InputGroupButtonDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  //   InputGroupAddon
} from "reactstrap";

export class LeagueBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,

      //League
      leagueName: "League",
      gameType: "",
      numberTeams: 0,
      startingDate: "",
      teamName1: "Team 1",
      teamName2: "Team 2",
      teamName3: "Team 3",
      teamName4: "Team 4",
      teamName5: "Team 5",
      teamName6: "Team 6",
      teamName7: "Team 7",
      teamName8: "Team 8",
      teamName9: "Team 9",
      teamName10: "Team 10"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSel = this.handleChangeSel.bind(this);
  }

  componentDidMount() {
    this.props.getLeagues();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleChangeSel(event) {
    await this.setState({ gameType: event.target.value });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  //get the team names / populate text field according to number of teams / athelets
  getTeamsNames = () => {
    const arr = [];

    if (this.state.numberTeams > 10 || this.state.numberTeams <= 1) {
      return <Alert color="danger"> "Min 2 / Max 10 teams/athelets" </Alert>;
    } else {
      for (let index = 0; index < this.state.numberTeams; index++) {
        var teamNames = "teamName" + (index + 1);
        var placeholder = "Enter Name " + (index + 1);
        arr.push(
          <Input
            type="text"
            name={teamNames}
            id="teamNames"
            placeholder={placeholder}
            onChange={this.handleChange}
          />
        );
      }
    }

    return arr;
  };

  createTablesStandings = (numbTea, a, b, c, d, e, f, g, h, i, j, w, l) => {
    let arrayTablesStandings = [];

    for (let index = 0; index < numbTea; index++) {
      var getTeamName;
      var numberOfTeams = index + 1;

      switch (numberOfTeams) {
        case 1:
          getTeamName = a;
          break;
        case 2:
          getTeamName = b;
          break;
        case 3:
          getTeamName = c;
          break;
        case 4:
          getTeamName = d;
          break;
        case 5:
          getTeamName = e;
          break;
        case 6:
          getTeamName = f;
          break;
        case 7:
          getTeamName = g;
          break;
        case 8:
          getTeamName = h;
          break;
        case 9:
          getTeamName = i;
          break;
        case 10:
          getTeamName = j;
          break;

        default:
          break;
      }

      arrayTablesStandings.push(
        <tbody key={uuid()}>
          <tr>
            <td>{getTeamName}</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      );
    }

    return arrayTablesStandings;
  };

  createGamesToTable = (numbTea, at, bt, ct, dt, et, ft, gt, ht, it, jt, leagueName, gameType) => {
    const arrGamesToTable = [];

    let a;
    let b;

    var numberOfTeams = numbTea;

    switch (numberOfTeams) {
      case 1:
        a = "";
        b = "";
        break;
      case 2:
        for (let index = 0; index < numbTea; index++) {
          if (index === 0) {
            a = at;
            b = bt;
          }
          if (index === 1) {
            b = at;
            a = bt;
          }
          arrGamesToTable.push(
            <tbody key={uuid()}>
              <tr>
                <td>
                  {a} v {b}
                </td>
                <td>
                  <button 
                   className="start-btn-league-board" 
                  onClick={this.onStartBtn.bind(this, a, b, leagueName, gameType)}
                  
                  >start</button>
                </td>
              </tr>
            </tbody>
          );
        }

        break;
      case 3:
      this.tableTemplate(
        arrGamesToTable,
        numberOfTeams,
        at,
        bt,
        ct,
        dt,
        et,
        ft,
        gt,
        ht,
        it,
        jt,
        leagueName, 
        gameType
      );

        break;
      case 4:

      this.tableTemplate(
        arrGamesToTable,
        numberOfTeams,
        at,
        bt,
        ct,
        dt,
        et,
        ft,
        gt,
        ht,
        it,
        jt,
        leagueName, 
        gameType
      );
        
        break;
      case 5:
        this.tableTemplate(
          arrGamesToTable,
          numberOfTeams,
          at,
          bt,
          ct,
          dt,
          et,
          ft,
          gt,
          ht,
          it,
          jt,
          leagueName, gameType
        );
        break;
      case 6:
        this.tableTemplate(
          arrGamesToTable,
          numberOfTeams,
          at,
          bt,
          ct,
          dt,
          et,
          ft,
          gt,
          ht,
          it,
          jt,
          leagueName, gameType
        );
        break;
      case 7:
        this.tableTemplate(
          arrGamesToTable,
          numberOfTeams,
          at,
          bt,
          ct,
          dt,
          et,
          ft,
          gt,
          ht,
          it,
          jt,
          leagueName, gameType
        );
        break;
      case 8:
        this.tableTemplate(
          arrGamesToTable,
          numberOfTeams,
          at,
          bt,
          ct,
          dt,
          et,
          ft,
          gt,
          ht,
          it,
          jt,
          leagueName
        );
        break;
      case 9:
        this.tableTemplate(
          arrGamesToTable,
          numberOfTeams,
          at,
          bt,
          ct,
          dt,
          et,
          ft,
          gt,
          ht,
          it,
          jt,
          leagueName, gameType
        );
        break;
      case 10:
        this.tableTemplate(
          arrGamesToTable,
          numberOfTeams,
          at,
          bt,
          ct,
          dt,
          et,
          ft,
          gt,
          ht,
          it,
          jt,
          leagueName, gameType
        );
        break;

      default:
        break;
    }

    arrGamesToTable.reverse();
    return arrGamesToTable;
  };

  onSwitchIndex = (index, at, bt, ct, dt, et, ft, gt, ht, it, jt) => {
    var a;
    switch (index) {
      case 10:
        a = jt;
        break;
      case 9:
        a = it;
        break;
      case 8:
        a = ht;
        break;
      case 7:
        a = gt;
        break;
      case 6:
        a = ft;
        break;
      case 5:
        a = et;
        break;
      case 4:
        a = dt;
        break;
      case 3:
        a = ct;
        break;
      case 2:
        a = bt;
        break;

      default:
        break;
    }
    return a;
  };

  onSwitchJ = (j, at, bt, ct, dt, et, ft, gt, ht, it, jt) => {
    var b;
    switch (j) {
      case 10:
        b = jt;
        break;
      case 9:
        b = it;
        break;
      case 8:
        b = ht;
        break;
      case 7:
        b = gt;
        break;
      case 6:
        b = ft;
        break;
      case 5:
        b = et;
        break;
      case 4:
        b = dt;
        break;
      case 3:
        b = ct;
        break;
      case 2:
        b = bt;
        break;
      case 1:
        b = at;
        break;

      default:
        break;
    }
    return b;
  };

  tableTemplate = (arr, numT, at, bt, ct, dt, et, ft, gt, ht, it, jt, leagueName, gameType) => {
    for (let index = numT; index > 1; index--) {
      for (let j = index - 1; j > 0; j--) {
        var a = this.onSwitchIndex(
          index,
          at,
          bt,
          ct,
          dt,
          et,
          ft,
          gt,
          ht,
          it,
          jt
        );
        var b = this.onSwitchJ(j, at, bt, ct, dt, et, ft, gt, ht, it, jt);
        
        arr.push(
          <tbody key={uuid()}>
            <tr>
              <td>
                {a} v {b}
              </td>
              <td>
                <button
                className="start-btn-league-board" 
                style={{ display: "block" }}
                onClick={this.onStartBtn.bind(this, a, b, leagueName, gameType)}

                >start</button>
              </td>
            </tr>
          </tbody>
        );
      }
    }
  };

  onSubmit = async e => {
    e.preventDefault();

    //UI Create Standings
    // this.createTablesStandings();
    // this.createGamesToTable();

    //Sending to DB
    

    const newLeague = {
      leagueName: this.state.leagueName,
      gameType: this.state.gameType,
      numberTeams: this.state.numberTeams,
      teamName1: this.state.teamName1,
      teamName2: this.state.teamName2,
      teamName3: this.state.teamName3,
      teamName4: this.state.teamName4,
      teamName5: this.state.teamName5,
      teamName6: this.state.teamName6,
      teamName7: this.state.teamName7,
      teamName8: this.state.teamName8,
      teamName9: this.state.teamName9,
      teamName10: this.state.teamName10,

    };
    this.props.addLeague(newLeague);

    this.toggle();
  };

  onDeleteClick = id => {
    
    this.props.deleteLeague(id);
  }

  onStartBtn = (a, b, c, d) => {

    //create a game
    const newGame = {
      team1: a,
      team2: b,
      leagueName: c,
      gameType: d,
      score1: 0,
      score2: 0
    }

    
    this.props.addGameleague(newGame);
  }

  render() {
    const { leagues } = this.props.league;

    return (
      <div id="league-board" className="mn">
        <Button
          color="primary"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Create New League
        </Button>

        {leagues.map(
          ({
            _id,
            leagueName,
            gameType,
            numberTeams,
            teamName1,
            teamName2,
            teamName3,
            teamName4,
            teamName5,
            teamName6,
            teamName7,
            teamName8,
            teamName9,
            teamName10,
            win,
            loss
          }) => (
            <div key={_id}>
              <hr />
              {leagueName} - {gameType} <button
                className="delete-btn-league-board"
                onClick={this.onDeleteClick.bind(this, _id)}
              ><p>&times;</p></button>
              <table>
                <tr>
                  <th>Team</th>
                  <th>W</th>
                  <th>L</th>
                </tr>
                {this.createTablesStandings(
                  numberTeams,
                  teamName1,
                  teamName2,
                  teamName3,
                  teamName4,
                  teamName5,
                  teamName6,
                  teamName7,
                  teamName8,
                  teamName9,
                  teamName10,
                  win,
                  loss
                )}
              </table>
              <hr />
              <table>
                {this.createGamesToTable(
                  numberTeams,
                  teamName1,
                  teamName2,
                  teamName3,
                  teamName4,
                  teamName5,
                  teamName6,
                  teamName7,
                  teamName8,
                  teamName9,
                  teamName10,
                  leagueName, gameType
                )}
              </table>
            </div>
          )
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Create New League</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="league">League Name</Label>
                    <Input
                      type="text"
                      name="leagueName"
                      id="leagueName"
                      placeholder="League Name"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="league-type">Choose Sport Type</Label>
                    <select
                      value={this.state.gameType}
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
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="numberTeams">Number of Teams</Label>
                    <Input
                      type="text"
                      name="numberTeams"
                      id="numberTeams"
                      placeholder="Enter Number of Teams"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="startingDate">Starting Date</Label>
                    <Input
                      type="date"
                      name="startingDate"
                      id="startingDate"
                      placeholder=""
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="teamNames">
                      Team Names - if you leave blank, the names will be the
                      default, ex "Team 1", "Team 2",...
                    </Label>

                    {this.getTeamsNames()}
                  </FormGroup>
                </Col>
              </Row>

              <Button>Create League</Button>
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
  gameleague: state.gameleague

});

export default connect(
  mapStateToProps,
  { addLeague, getLeagues, deleteLeague, addGameleague }
)(LeagueBoard);
