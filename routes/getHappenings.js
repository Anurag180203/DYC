const happenings = require('../models/happenings');

async function getHappenings(req, res) {
    try {
        let data = await happenings.find({});
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getHappenings
}