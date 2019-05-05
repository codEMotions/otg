import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import uuid from 'uuid'
import { getGames, deleteGame, updateGame } from "../actions/gameActions";

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
  // InputGroup,
  // InputGroupButtonDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // InputGroupAddon
} from "reactstrap";
import LiveSign from "./LiveSign";



export class ScoreBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      
      score1: 0,
      score2: 0,

      newId: 0
    };


    this.handleChange = this.handleChange.bind(this);
  }

componentDidMount() {
    this.props.getGames();
  }


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };


  

  onDeleteClick = id => {
    this.props.deleteGame(id);
  }

  onUpdateClick = id => {

    this.setState({
      modal: !this.state.modal,
      newId: id
    });

  }


  onUpdateClickBtn = () =>{
    
    const updatedData = {
      team1score: this.state.score1,
      team2score: this.state.score2,
    }

    console.log(this.state.newId)
    this.props.updateGame(this.state.newId, updatedData);

    this.setState({
          team1score: this.props.game && this.props.game.games[0] && this.props.game.games[0].team1score,
    
          team2score: this.props.game && this.props.game.games[0] && this.props.game.games[0].team2score,
        });

    this.toggle();

    //this.updateStateNewScore()
      
  }

  // updateStateNewScore() {
  //   //bring data back to state
  //   this.setState({
  //     team1score: this.props.game && this.props.game.games[0] && this.props.game.games[0].team1score,

  //     team2score: this.props.game && this.props.game.games[0] && this.props.game.games[0].team2score,
  //   });

  //     console.log(this.state)
  // }

  //if game live is false - LiveSign is not showing
  showLiveSign = () => {

    let showLive;

    if(this.props.game.games[0] && this.props.game.games[0].gameLive === true){
      showLive ="block"
    } else if(this.props.game.games[0] && this.props.game.games[0].gameLive === false){
      showLive ="none"
    }

    return showLive
  }

  async handleChange(evt){
    await this.setState({
      [evt.target.name]: evt.target.value
    });
    console.log(this.state)
  }

  
  sportIcon = (gt) => {

    let typeGame = gt.gameType

    let sportsIcon;

      switch (typeGame) {
          case "Basketball":
              sportsIcon = "basketball.png" 
              break;
            case "Football":
              sportsIcon = "football.png" 
              break;
            case "Soccer":
              sportsIcon = "soccerball.png" 
              break;
            case "Tennis":
              sportsIcon = "tennis.png" 
              break;
            case "Volleyball":
              sportsIcon = "volleyball.png" 
              break;
     
          default:
              break;
      }

    return (
      <div>
          <div style={{ backgroundImage: 'url('+ sportsIcon +')'}} id="sports-icon">
          
          </div>
      </div>
    )
  }


  onEndGameBtn = async () => {
    const updatedData = {
      team1score: this.state.score1,
      team2score: this.state.score2,

      gameLive: false

    }

    console.log(this.state.newId)
    this.props.updateGame(this.state.newId, updatedData);
    console.log("okokok")

    this.toggle();
  }


  render() {
    const { games } = this.props.game;
    //console.log(this.props.game && this.props.game.games[0] && this.props.game.games[0].gameType)
    
    return (
      <div>
        <p>Score Board</p>

          <LiveSign show={this.showLiveSign()}/>

    <table>
            
        {games.map(({ _id, team1, team2, team1score, team2score, gameType }) => (
          
          <tbody key={uuid()} >
              <tr>
                <td><button 
                className="update-score-btn"
                onClick={this.onUpdateClick.bind(this, _id)}
                
                >u</button></td>
                <td>{team1}</td>
                <td>{team1score}</td>
                <td>{this.sportIcon({gameType})}</td>
                
              </tr>
              <tr>
                <td><button 
                className="delete-score-btn"
                onClick={this.onDeleteClick.bind(this, _id)}
                >&times;</button></td>
                <td>{team2}</td>
                <td>{team2score}</td>
              </tr>
            </tbody>
          ))}
          
            </table>







            <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update the Score</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="team1">Team 1</Label>
                    <Input
                      type="text"
                      name="score1"
                      id="team1"
                      placeholder="Team 1 Score"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="team2">Team 2</Label>
                    <Input
                      type="text"
                      name="score2"
                      id="team2"
                      placeholder="Team 2 Score"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                </Col>
              </Row>

              
              <Link to="/">
                <Button id="update-score-submit-btn" onClick={this.onUpdateClickBtn}>Update Score</Button>
              </Link>
              
              <Button onClick={this.onEndGameBtn}>End tGame</Button>

              {/* <InputGroup >
                <Button outline>Game Starting Now</Button>

                <Input placeholder="time" />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Schedule</Button>
                </InputGroupAddon>
              </InputGroup> */}
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
  { getGames, deleteGame, updateGame }
)(ScoreBoard);
