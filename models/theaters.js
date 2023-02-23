const {Schema, model} = require('mongoose');

const schema = new Schema({
theaterID:{type:Number},
location:{
    addres:
    {
        street1:{type:String},
        city:{type:String},
        state:{type:String},
        zipcode:{type:Number},
    },
    geo:
    {
        type:{type:String},
        coordinates:{type:[String]},
    },
},
 })
 const Theater = new model('theater',schema);

 module.exports = {Theater};