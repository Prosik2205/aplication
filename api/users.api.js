const { Router } = require('express');
const { Users } = require('../models/users');
const router = Router();
router.get("/users", async (req,res) => {
    const {name} = req.query;
    const queryDb = {};
    if(name)
    {
        queryDb.name=name;
    }
    const docs = await Users.find(queryDb);
    return res.status(200).send(docs);
    });
    module.exports={router};