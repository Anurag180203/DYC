const contacts = require('../models/contacts');

async function getContacts(req, res) {
    try {
        let data = await contacts.find({});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getContacts
}