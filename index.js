const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const contact = require('./models/contact');

const db = require('./db');

const {getContacts, getEventDetails, getHappenings} = require('./routes/getRoutes.js');
const {createContacts, createEventDetails, createHappenings, deleteContact, deleteHappenings} = require('./routes/adminRoutes.js');

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