const express = require("express")
const path = require("path");
const mongoose = require('mongoose');
const multer = require("multer");

let router = express.Router()

let BookModel = require("../models/book")
let AuthorModel = require("../models/authorModel")
let CategoryModel = require("../models/categoryModel")

const storage = multer.diskStorage({
   destination: function (req, file, callback) {
      callback(null, './public/cover_imgs/')
   },
   filename: function (req, file, callback) {
      callback(null, new Date().toISOString() + file.originalname);
   }
});
const upload = multer({
   storage: storage
});


router.post('/', upload.single('coverImage'), async function (req, res) {

   try {
      // Here we need to check the JWT token before creating a new book
      const newAuthor = new AuthorModel()
      const newCat = new CategoryModel()
      const newBook = new BookModel({
         bookName: req.body.bookName,
         catId: newCat,
         authorId: newAuthor,
         coverImageName: req.file.path,
      });
      const book = await newBook.save();
      res.status(201).json(book);
   } catch (error) {
      console.log(error);
      res.sendStatus(409);
   }

});

router.get('/', async (req, res) => {

   try {
      let results = await BookModel.getAllBooks()
      res.json(results)
   } catch (error) {
      console.log(error);
      res.send(404, {
         error
      })
   }

})

router.get('/:id', async (req, res) => {
   try {
      let id = req.params.id;
      let results = await BookModel.findById(id).exec()
      res.json(results)
   } catch (error) {
      console.log(error);
      res.send(404, {
         error
      })
   }


})

router.delete('/:id', async(req, res) => {
   try {
      let id = req.params.id;
      let results = await BookModel.findByIdAndDelete(id).exec()
      res.json(results)
   } catch (error) {
      console.log(error);
      res.send(404, {
         error
      })
   }

})

router.patch('/:id',upload.single('coverImage') ,async(req, res) => {
   try {
      let id = req.params.id;
      console.log(req.body);
      
      let results = await BookModel.findByIdAndUpdate(id,req.body,{new:true}).exec()
      res.json(results)
   } catch (error) {
      console.log(error);
      res.send(404, {
         error
      })
   }
})

module.exports = router