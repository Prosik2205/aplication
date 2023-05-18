const Router = require('express');
const { Coordinates } = require('../models/coordinates');


const router = Router();

router.get("/getCoordinates", async (req, res) => {
    const {
        nameCity,
        coordinates_x,
        coordinates_y    
    } = req.query;

const queryDb= {};
if (nameCity)
{
    queryDb.nameCity= nameCity;
}
// if(coordinates_x)
// {
//     queryDb["coordinates.x"]=coordinates_x;
// }
// if(coordinates_y)
// {
//     queryDb["coordinates.y"]=coordinates_y;
// }

const doc = await Coordinates.find(queryDb);
    return res.status(200).send(doc);



});
module.exports = { router };