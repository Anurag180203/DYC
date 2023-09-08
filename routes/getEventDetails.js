const eventDetails = require('../models/eventDetails');

async function getEventDetails(req, res) {
    try {
        let data = await eventDetails.find({});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    getEventDetails
}