const express = require("express")
const mongoose = require('mongoose');
const multer = require("multer");
const chalk = require("chalk");
const fs = require('fs')


let router = express.Router()

let BookModel = require("../models/book")
let AuthorModel = require("../models/authorModel")
let CategoryModel = require("../models/categoryModel")
const ReviewModel = require("../models/review");
const userModel = require("../models/user");
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
            results = BookModel.findBooksByCatAndAuthorId(req.query.catID, req.query.autherID)

        } else if (req.query.authorID) {
            results = await BookModel.find({authorId: req.query.authorID})
            console.log(req.query.authorID);
            console.log(results);

            // results = BookModel.getBooksByAuthorID(req.query.autherID)
        } else if (req.query.catID) {
            results = BookModel.findBooksByCatId(req.query.catID)
        }

        if (!req.query.authorID && !req.query.catID) {
            results = await BookModel.getAllBooks();
            res.json(results);
        } else {
            const allBooks = await Promise.all(results.map(async book => {
                let newBook = {
                    bookName: book.bookName,
                    bookImage: book.coverImageName,
                };

                const ratings = await ReviewModel
                    .find({bookId: {$in: book._id}}, {rating: 1, _id: 0});

                if (ratings.length === 0) {
                    newBook["avgRatings"] = 0;
                    newBook["numberOfRatings"] = 0;

                } else {
                    const totalRatings = ratings.reduce((total, currentRating) => {
                        total += currentRating;
                        return total
                    }, 0);
                    const avgRatings = totalRatings / ratings.length;
                    newBook["avgRatings"] = avgRatings;
                    newBook["numberOfRatings"] = ratings.length;
                }

                console.log(chalk.green(JSON.stringify(newBook)));


                return newBook;
            }));

            console.log(chalk.red(allBooks));

            res.json(allBooks);
        }
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }

});


router.get('/:id', async (req, res) => {
    try {

        let id = req.params.id;
        let results = await BookModel.findById(id).populate("authorId").populate("catId").exec();
        let bookReviews = await ReviewModel.findReviewsByBookId(id);
        let bookStatus = "";
        let bookReview = [];

        console.log(bookReviews);
        //Book Status and user book rating
        //JWT
        const currentUser = await userModel
            .find({token: req.header("JWT")})
            .exec();

        const userBook = currentUser[0].all.includes(id);


        if (userBook === true) {
            if (currentUser[0].want_to_read.includes(id)) {
                bookStatus = "want"
            }
            if (currentUser[0].read.includes(id)) {
                bookStatus = "read"
            }
            if (currentUser[0].current.includes(id)) {
                bookStatus = "current"
            }
        }

        bookReview = await ReviewModel
            .find({userId: currentUser[0]._id, bookId: id}, {_id: 0, rating: 1})

        console.log(bookStatus, bookReview);

        const userData = {
            userBookStatus: bookStatus,
            userBookReview: bookReview.length === 0 ? 0 : bookReview[0].rating,
        };


        let bookAvgRate = 0;
        let reviews = [];

        if (bookReviews !== null) {
            reviews = bookReviews.length > 0 ? bookReviews[0] : [];

            let avgRate = 0;
            if (bookReviews.length > 0) {
                const bookTotalRate = bookReviews.reduce((total, review) => total + review.rating, 0);

                avgRate = bookTotalRate / bookReviews.length
            }

            bookAvgRate = avgRate

        }

        res.json({book: results, bookAvgRate, reviews, userData})
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
            brief: req.body.brief
        });
        const book = await newBook.save();
        res.status(201).json(book);
    } catch (error) {
        console.log(error);
        res.sendStatus(409);
    }

});
router.delete('/:id', async (req, res) => {
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

router.patch('/:id', upload.single('coverImage'), async (req, res) => {
    try {
        let id = req.params.id;
        console.log(req.body);
        let editBook  ={
            bookName: req.body.bookName,
            catId: req.body.catId,
            authorId: req.body.authorId,
            brief: req.body.brief}
        
        if(req.file){
            let book = await BookModel.findById(id).exec()
            fs.unlinkSync(book.coverImageName)
            editBook["coverImageName"]=req.file.path
        }

        let results = await BookModel.findByIdAndUpdate(id, editBook, {new: true}).exec()
        res.json(results)
    } catch (error) {
        console.log(error);
        res.send(404, {
            error
        })
    }
});


module.exports = router;
