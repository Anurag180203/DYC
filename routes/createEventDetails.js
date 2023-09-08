const eventDetails = require('../models/eventdetails');

async function createEventDetails(req, res) {
    try {
        let data = await eventDetails.create({
            name: req.body.name,
            venue: req.body.venue,
            date: req.body.date,
            teamSize: req.body.teamSize,
            rules: req.body.rules,
            generalGuidelines: req.body.generalGuidelines,
            judgingCriteria: req.body.judgingCriteria,
            imageUrl: req.body.imageUrl
        });
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    createEventDetails
}