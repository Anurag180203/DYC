const mongoose = require('mongoose');

const happenings = new mongoose.Schema({
    imageUrl: String,
    name: String
});

module.exports = mongoose.model('Happenings', happenings); 