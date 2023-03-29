const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
 links: {
  original: { type: String, required: true },
  cut: { type: String, required: true, unique: true }
 },
 expiredAt: { type: Date, required: true }
});

const Link = new model('links', schema, 'links');

module.exports = { Link };