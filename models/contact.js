const mongoose = require('mongoose');

const contacts = new mongoose.Schema({
    position: String,
    name: String,
    linkedin: String,
    imageUrl: String,
    number: Number
});

module.exports = mongoose.model('Contacts', contacts); 