const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

const bookModel = require("../models/book");
const authorModel = require("../models/authorModel");
const categoryModel = require("../models/categoryModel");


router.get('/searchbook/:bookname', async (req, res) => {
    console.log(req.params.bookname);
    const searchName = req.params.bookname;
    try {
        const result = await bookModel.find({bookName: {$regex: searchName, $options: 'i'}}).exec();
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
        const result = await authorModel.find({fullName: {$regex: searchName, $options: 'i'}}).exec();
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
        const result = await categoryModel.find({categoryName: {$regex: searchName, $options: 'i'}}).exec();
        console.log(result);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

module.exports = router;
