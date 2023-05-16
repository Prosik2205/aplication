const Router = require('express');
const { Coordinates } = require('../models/coordinates');

const router = Router();

router.post("/addCoordinates", async (req, res) => {
    const {
        nameCity,
        coordinates:{x,y}    
    } = req.body;



    const newCity = new Coordinates({ nameCity,coordinates:{x,y}  });
    const doc = await newCity.save();
    return res.status(200).send(doc);



    // const dbQuery = {};

    // if(cityId){
    //     dbQuery.cityId = cityId;
    // }

    // if(city) {
    //     dbQuery.city = city ;
    // }

    // if(coordinates_x) {
    //     dbQuery.coordinates_x = coordinates_x ;
    // }

    // if(coordinates_y) {
    //     dbQuery.coordinates_x = coordinates_x ;
    // }



    // const data = new Data({
    //     'name':city,
    //     'coordinates_x':coordinates_x,
    //     'coordinates_y':coordinates_y
    // })

    // const { data: } = await data.save()

    // const docs = await Coordinates.find(dbQuery);
    // return res.status(200).send(docs);


});

module.exports = { router };