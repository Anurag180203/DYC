const eventDetails = require('../models/eventdetails');

async function getEventDetails(req, res) {
    try {
        let data = await eventDetails.find({});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getEventDetails
}