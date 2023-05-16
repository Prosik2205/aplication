const { Schema, model } = require("mongoose");

const schema = new Schema({
  cityId: { type: Number },
  nameCity: { type: [String] },
  coordinates:{
    x:{type: [Number]},
    y:{type: [Number]}
  }
});

const Coordinates = new model("coordinates", schema);
module.exports = { Coordinates };
