const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const RecordSchema = new Schema({
    team1: {
        type: String,
        required: true
    },
    team2: {
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

module.exports = Record = mongoose.model('record', RecordSchema);