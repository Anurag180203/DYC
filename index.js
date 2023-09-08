const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const contact = require('./models/contacts');

const db = require('./db');

const cors = require('cors');
app.use(cors());

const {getContacts} = require('./routes/getContacts');
const {getEventDetails} = require('./routes/getEventDetails');
const {getHappenings} = require('./routes/getHappenings');
const {createContacts} = require('./routes/createContacts');
const {createEventDetails} = require('./routes/createEventDetails');
const {createHappenings} = require('./routes/createHappenings');
const {deleteContact} = require('./routes/deleteContact');
const {deleteHappenings} = require('./routes/deleteHappenings');

app.get('/getContacts', getContacts);
app.get('/getEventDetails', getEventDetails);
app.get('/getHappenings', getHappenings);

app.post('/createContacts', createContacts);
app.post('/createEventDetails', createEventDetails);
app.post('/createHappenings', createHappenings);

app.delete('/deleteContact', deleteContact);
app.delete('/deleteHappenings', deleteHappenings);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});