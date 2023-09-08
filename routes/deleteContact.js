const contacts = require('../models/contacts');

async function deleteContact(req, res) {
    try {
        let data = await contacts.destroy({
            where:{
                phone: req.query.phone
            }
        });
        res.status(201).send(data);
    } catch(err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    deleteContact
}