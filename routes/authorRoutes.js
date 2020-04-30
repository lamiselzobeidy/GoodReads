let express = require('express');
let router = express.Router();
let authorModel = require("../models/authorModel");
// use multer?
router.post("/", async (req, res) => {
    try {
        // Here we need to check the JWT token before creating a new author
        const newAuthor = new authorModel(req.body);
        const author = await newAuthor.save();
        res.status(201).json(author);
    } catch (error) {
        console.log(error);
        res.sendStatus(409);
    }
});


