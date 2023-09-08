const contacts = require('../models/contacts');

async function createContacts(req, res) {
    try {
        let data = await contacts.create({
            name: req.body.name,
            position: req.body.position,
            linkedin: req.body.linkedin,
            phone: req.body.phone,
            imageUrl: req.body.imageUrl
        });
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    createContacts
}