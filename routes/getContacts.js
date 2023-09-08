const contacts = require('../models/contacts');

module.exports = (app) => {
    app.get('/getContacts', (req, res) => {
        contacts.find({}, (err, data) => {
            if(err) {console.log(err);throw err;}
            res.send(data);
        });
    });
}