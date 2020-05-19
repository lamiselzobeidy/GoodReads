const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

const BookModel = require("../models/book");
const authorModel = require("../models/authorModel");


router.get('/searchbook/:bookname', async (req, res) => {
    console.log(req.params.bookname);
    const searchName = req.params.bookname;
    try {
        const result = await BookModel.find({bookName: {$regex: searchName, $options: 'i'}}).exec();
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

router.get('/searcauthor/:authorname', async (req, res) => {
    console.log(req.params.authorname);
    const searchName = req.params.authorname;
    try {
        const result = await BookModel.find({fullName: {$regex: searchName, $options: 'i'}}).exec();
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

router.get('/searchcategory/:categoryname', async (req, res) => {
    console.log(req.params.categoryname);
    const searchName = req.params.categoryname;
    try {
        const result = await BookModel.find({categoryName: {$regex: searchName, $options: 'i'}}).exec();
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

module.exports = router;
