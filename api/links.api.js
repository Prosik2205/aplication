const { Router } = require('express');

const { Links } = require("../models/links");


const router = Router();

router.post("/links", async (req,res)=> 
{
const { originalLink} = req.body;
const {authorization} = req.header;
const links = new Links ({
    originalLink,
    authorization,
});

if(!apiKey)
{
    res.status(401).json({ message: 'User is not authorized' });
}



});
