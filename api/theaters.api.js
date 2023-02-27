const { Router } = require('express');
const { Theater } = require('../models/theaters');
const router = Router();


router.get("/theaters", async (req,res) => {

    const {theaterId,location_address_city,location_address_zipcode} = req.query;

    const queryDb = {};
if (theaterId)
{
    queryDb.theaterId =  theaterId;
}
if (location_address_city)
{
    queryDb["location.address.city"]={ $in : location_address_city};
}
if (location_address_zipcode)
{
    queryDb["location.address.zipcode"]={ $in : location_address_zipcode};
}
const docs = await Theater.find(queryDb);
return res.status(200).send(docs);
});
module.exports={router};