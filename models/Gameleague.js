const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const GameleagueSchema = new Schema({
    team1: {
        type: String,
        required: true
    },
    team2: {
        type: String,
        required: false
    },
    leagueName: {
        type: String,
        required: false
    },
    gameType: {
        type: String,
        required: false
    },
    score1: {
        type: Number,
        required: false
    },
    score2: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Gameleague = mongoose.model('gamesleague', GameleagueSchema);