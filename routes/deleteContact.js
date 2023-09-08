const contacts = require('../models/contacts');

async function deleteContact(req, res) {
    try {
        const ph = req.query.phone;
        let data = await contacts.deleteOne({ phone: { $eq: ph } });
        res.status(201).send(data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    deleteContact
}