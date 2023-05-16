const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const Coordinates = require("./API/addCoordinates.api")
const getCoordinates = require("./API/getCoordinates.api")

// process.env
console.log(`MONGO_DB_URI:${process.env.MONGO_DB_URI}`);
// console.log('MONGO_DB_URI:', process.env.MONGO_DB_URI);

const Mongo = require("./DB/mongoose");

const app = express();
app.use(bodyParser.json());

const setup = async () => {
  await Mongo.setupDb(process.env.MONGO_DB_URI);

 app.use(Coordinates.router);
 app.use(getCoordinates.router)

  app.listen(process.env.PORT, () => {
    console.log(`Server was started on ${process.env.PORT}`);
  });
};

setup();
