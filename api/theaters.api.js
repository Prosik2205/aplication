const { Router } = require('express');
const { Theaters } = require('../models/theaters');
const router = Router();

router.get("/theaters", async (req,res) => {
const {theaterId} = req.query;
const queryDb = {};
if(theaterId)
{
    queryDb.theaterId={$gte:theaterId};
}
const docs = await Theaters.find(queryDb);
return res.status(200).send(docs);
});
module.exports={router};