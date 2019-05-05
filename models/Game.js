const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const GamesSchema = new Schema({
    gameAuthor: {
        type: String,
        required: false
    },
    gameType: {
        type: String,
        required: false
    },
    team1: {
        type: String,
        required: false
    },
    team2: {
        type: String,
        required: false
    },
    team1score: {
        type: String,
        required: false
    },
    team2score: {
        type: String,
        required: false
    },
    numberplayers: {
        type: String,
        required: false
    },
    team1player1: {
        type: String,
        required: false
    },
    team1player2: {
        type: String,
        required: false
    },
    team1player3: {
        type: String,
        required: false
    },
    team1player4: {
        type: String,
        required: false
    },
    team1player5: {
        type: String,
        required: false
    },
    team2player1: {
        type: String,
        required: false
    },
    team2player2: {
        type: String,
        required: false
    },
    team2player3: {
        type: String,
        required: false
    },
    team2player4: {
        type: String,
        required: false
    },
    team2player5: {
        type: String,
        required: false
    },
    gameLive: {
        type: Boolean,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Game = mongoose.model('game', GamesSchema);