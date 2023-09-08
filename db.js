const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const password = process.env.DB_PASSWORD;

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(`mongodb+srv://zoro:${password}@zoro.n4owrbl.mongodb.net/`, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()