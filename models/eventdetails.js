const mongoose = require('mongoose');

const eventDetails = new mongoose.Schema({
    name: String,
    venue: String,
    date: String,
    teamSize: Number,
    rules: Array,
    generalGuidelines: Array,
    judgingCriteria: Array,
    imageUrl: String
});

module.exports = mongoose.model('eventDetails', eventDetails);