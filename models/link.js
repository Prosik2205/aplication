const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
 userId: { type: Types.ObjectId, required: true },
 link: {
  original: { type: String, required: true },
  cut: { type: String, required: true, unique: true }
 },
 expiredAt: { type: Date, required: true }
});

const Link = new model('link', schema, 'link');

module.exports = { Link };