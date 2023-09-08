const createHappenings = require('./createHappenings');
const createContacts = require('./createContacts');
const createEventDetails = require('./createEventDetails');
const deleteContact = require('./deleteContact');
const deleteHappenings = require('./deleteHappenings');

module.exports = {
    createEventDetails,
    createHappenings,
    createContacts,
    deleteContact,
    deleteHappenings
}