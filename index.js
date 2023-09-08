const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const contact = require('./models/contact');

const db = require('./db');

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.post('/post', async (req,res) => {
    let name = req.body.name;
    await contact.create({
        name: name
    });
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});