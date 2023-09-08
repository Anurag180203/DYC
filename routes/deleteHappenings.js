const happenings = require('../models/happenings');

async function deleteHappenings(req, res) {
    try {
        let data = await happenings.destroy({
            where:{
                "name": req.query.name
            }
        });
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    deleteHappenings
}