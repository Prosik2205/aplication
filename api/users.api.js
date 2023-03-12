const { Router } = require('express');

const { Users } = require('../models/users');

const { v4: uuidv4 } = require('uuid');

const router = Router();

router.post("/users", async (req, res) => {
    const { email, password } = req.body;
    const users = new Users({
        email,
        password,
        apiKey: uuidv4()
    });

    if (!email) {
        res.status(400).json({ message: 'Поле email обов`язковий' });
    }

    if (!password) {
        res.status(400).json({ message: 'Поле password обов`язковий' });
    }
    const result = await users.save().catch((error) => {
        if (error.code == 11000) {
            res.status(400).json({ message: 'Цей email вже був використаний' });
        }
    });

    res.status(200).send(result);

});
module.exports =  router ;