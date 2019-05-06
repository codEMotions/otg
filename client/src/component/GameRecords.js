import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecord, deleteRecord } from "../actions/recordActions";
import uuid from "uuid";

export class GameRecords extends Component {
  componentDidMount() {
    this.props.getRecord();
  }

  onDeleteClick = id => {
    this.props.deleteRecord(id);
  };

  render() {
    const { record } = this.props.record;

    return (
      <div id="game-records" className="mn">
      
        <h2>Games</h2>

        {record.map(({ team1, team2, gameType, _id, score1, score2 }) => (
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

            <div className="separator-score-board" />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  profile: state.profile,
  league: state.league,
  gameleague: state.gameleague,
  record: state.record
});

export default connect(
  mapStateToProps,
  { getRecord, deleteRecord }
)(GameRecords);
