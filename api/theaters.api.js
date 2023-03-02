const { Router } = require('express');
const { Theater } = require('../models/theaters');
const router = Router();


router.get("/theaters", async (req,res) => {

    const {theaterId,location_address_city,location_address_zipcode,location_geo_coordinates_0} = req.query;

    const queryDb = {};
if (theaterId)
{
    queryDb.theaterId =  theaterId;
}
if (location_address_city)
{
    queryDb["location.address.city"]= location_address_city;
}
if (location_address_zipcode)
{
    queryDb["location.address.zipcode"]= location_address_zipcode;
}
if(location_geo_coordinates_0)
{
    queryDb["location_geo_coordinates_0"] = location_geo_coordinates_0;
}


const docs = await Theater.find(queryDb);
return res.status(200).send(docs);
});
module.exports={router};