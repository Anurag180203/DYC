const happenings = require('../models/happenings');

async function createHappenings(req, res) {
    try {
        let data = await happenings.create({
            imageUrl: req.body.imageUrl,
            name: req.body.name,
        });
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    createHappenings
}