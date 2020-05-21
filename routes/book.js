const express = require("express")
const mongoose = require('mongoose');
const multer = require("multer");

let router = express.Router()

let BookModel = require("../models/book")
let AuthorModel = require("../models/authorModel")
let CategoryModel = require("../models/categoryModel")
const ReviewModel = require("../models/review");

const checkIsAdmin = require("../middlewares/admin_check");

const checkJWT = require("../middlewares/jwt_auth")


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




router.get('/', async (req, res) => {

   try {
      let results;

      
      if (req.query.authorID && req.query.catID) {
         results = BookModel.findBooksByCatAndAuthorId(req.query.catID,req.query.autherID)

      }else if(req.query.authorID){
         results = await BookModel.find({authorId:req.query.authorID})
         console.log(req.query.authorID);
         console.log(results);
         
         // results = BookModel.getBooksByAuthorID(req.query.autherID)
      }else if(req.query.catID){
         results = BookModel.findBooksByCatId(req.query.catID)
         
      }

      if (!results) {
         results = await BookModel.getAllBooks();         
      }
      
      res.json(results)
   } catch (error) {
      console.log(error);
      res.status(404).send(error)
   }

});


router.get('/:id', async (req, res) => {
   try {
      let id = req.params.id;
      let results = await BookModel.findById(id).populate("authorId").populate("catId").exec()
      let bookReviews = await ReviewModel.findReviewsByBookId(id)
      console.log(bookReviews);

      let bookAvgRate=0;
      let reviews =[]

      if (bookReviews !== null) {
         reviews = bookReviews.length >0 ? bookReviews[0]:[]         

         let avgRate=0;
         if(bookReviews.length >0){
            const bookTotalRate = bookReviews.reduce((total,review)=> total + review.rating,0)
   
            avgRate = bookTotalRate/bookReviews.length
         }
   
         bookAvgRate =avgRate
   
      }      

      res.json({book:results,bookAvgRate,reviews})
   } catch (error) {
      console.log(error);
      res.send(404, {
         error
      })
   }
});

router.use(checkJWT)
router.use(checkIsAdmin)

router.post('/', upload.single('coverImage'), async function (req, res) {

   try {

      
      // Here we need to check the JWT token before creating a new book
      // const newAuthor = new AuthorModel()
      // const newCat = new CategoryModel()
      const newBook = new BookModel({
         bookName: req.body.bookName,
         catId: req.body.catId,
         authorId: req.body.authorId,
         coverImageName: req.file.path,
         brief:req.body.brief
      });
      const book = await newBook.save();
      res.status(201).json(book);
   } catch (error) {
      console.log(error);
      res.sendStatus(409);
   }

});
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

});

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
});


module.exports = router;
