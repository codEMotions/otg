const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ProfileSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: false
    },
    nickname: {
        type: String,
        required: false
    },
    displayname: {
        type: String,
        required: false
    },
    favoritesport: {
        type: String,
        required: false
    },
    silverstar: {
        type: Number,
        required: false
    },
    goldenstar: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);