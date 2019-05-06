const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const LeagueSchema = new Schema({
    leagueName: {
        type: String,
        required: true
    },
    gameType: {
        type: String,
        required: false
    },
    numberTeams: {
        type: Number,
        required: false
    },
    teamName1: {
        type: String,
        required: false
    },
    teamName2: {
        type: String,
        required: false
    },
    teamName3: {
        type: String,
        required: false
    },
    teamName4: {
        type: String,
        required: false
    },
    teamName5: {
        type: String,
        required: false
    },
    teamName6: {
        type: String,
        required: false
    },
    teamName7: {
        type: String,
        required: false
    },
    teamName8: {
        type: String,
        required: false
    },
    teamName9: {
        type: String,
        required: false
    },
    teamName10: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = League = mongoose.model('league', LeagueSchema);