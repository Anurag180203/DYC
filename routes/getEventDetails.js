const eventdetails = require('../models/eventdetails');

module.exports = (app) => {
    app.get('/getEventDetails', (req, res) => {
        eventdetails.find({}, (err, data) => {
            if(err) {console.log(err);throw err;}
            res.send(data);
        });
    });
}