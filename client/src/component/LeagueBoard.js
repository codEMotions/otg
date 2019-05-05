import React, { Component } from "react";
import uuid from 'uuid'
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
      leaguename: "",
      gameType: "",
      numberTeams: 2,
      startingDate: "",
      teamName1: "",
      teamName2: "",
      teamName3: "",
      teamName4: "",
      teamName5: "",
      teamName6: "",
      teamName7: "",
      teamName8: "",
      teamName9: "",
      teamName10: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSel = this.handleChangeSel.bind(this);
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

  onSubmit = e => {
    e.preventDefault();

    //UI Create Standings
    this.createTablesStandings();

    //Sending to DB
    this.toggle();
  };

  createTablesStandings = () => {
    let arrayTablesStandings = [];

    for (let index = 0; index < this.state.numberTeams; index++) {

        var getTeamName = "teamName" + (index + 1);

      arrayTablesStandings.push(
      <tbody key={uuid()}>
        <tr>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
        </tr>
      </tbody>
      );
    }
    //standings
    // <table>
    //     <tbody>

    //     </tbody>
    // </table>

    return arrayTablesStandings;
  };

  render() {
    return (
      <div id="league-board" className="mn">
        <Button
          color="primary"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Create New League
        </Button>

        <table>
            <th>
                Team
            </th>
            <th>
                W
            </th>
            <th>
                L
            </th>
            {this.createTablesStandings()}
        </table>
        

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
                      name="leaguename"
                      id="leaguename"
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
                    <Label for="numberTeams">Number of Teams / Athelets</Label>
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

export default LeagueBoard;
