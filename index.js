const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const users = require("./api/users.api")
const usersLog = require("./api/usersLog.api")

console.log(`MONGO_DB_URI:${process.env.MONGO_DB_URI}`);

const Mongo = require('./setup/mongoose');

const app = express();
app.use(bodyParser.json());

app.use(users);

app.use(usersLog);

const setup = async () => {
    await Mongo.setupDb(process.env.MONGO_DB_URI);



    app.listen(process.env.PORT, () => {
        console.log(`Server was started on ${process.env.PORT}`);
    });
};

setup();