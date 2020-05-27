const express = require("express");
const chalk = require("chalk");

let BookModel = require("../models/book");
let AuthorModel = require("../models/authorModel");
let CategoryModel = require("../models/categoryModel");
let ReviewModel = require("../models/review");



let router = express.Router();
router.get("/", async function (req, res) {
  try {
    const aggregatorOpts = [
      {
        // Grouping pipeline
        $group: {
          _id: "$bookId",
          avg: { $avg: "$rating" },
        },
      },
      // Sorting pipeline , -1 Desc
      { $sort: { avg: -1 } },
      // Optionally limit results
      { $limit: 10 },
    ];

    let top10BooksRating = await ReviewModel.aggregate(aggregatorOpts).exec();
    //top 10 
    let books = [];
    let authors = [];
    let cats = [];
    
    if (top10BooksRating.length===0) {
      top10BooksRating = await BookModel.find({}).limit(10).exec();
    }

    if (top10BooksRating.length>0) {
      
    for (let index = 0; index < top10BooksRating.length; index++) {
      const book = await BookModel.findById(top10BooksRating[index]._id).exec();
      const author = await AuthorModel.findById({ _id: book.authorId }).exec();
      const cat = await CategoryModel.findById({ _id: book.catId }).exec();

      console.log(chalk.blue(book));
      console.log(chalk.green(author));
      console.log(chalk.magenta(cat));
      

      if (authors.filter((e) => e._id === author._id).length === 0) {
        authors.push(author);
      }

      
      if (cats.filter((e) => e._id === cat._id).length === 0) {
        cats.push(cat);
      }
      
      books.push(book);

      if (index === top10BooksRating.length - 1) {
        res.json({ books, authors, cats });
      }
    }
    }else{
      res.json("No book rates");

    }

  } catch (error) {
    console.log(error);
    res.json(error);
  }
  // Find First 10 News Items
  // BookModel.find({}, (error, books) => {
  //   let newBooks = [];
  //   books.forEach((book, index, array) => {
  //     ReviewModel.find({ bookId: book._id }, (err, bookReviews) => {

  //       const totalRating = bookReviews.reduce((totalRating, review) => {
  //         return totalRating + review.rating;
  //       }, 0);

  //       let avgRating = 0;

  //       if (bookReviews.length !== 0) {
  //         avgRating = totalRating / bookReviews.length;
  //       }

  //       let newBook = {
  //         id: book._id,
  //         name: book.bookName,
  //         avgRating,
  //       };

  //       newBooks.push(newBook);
  //       if (index === array.length - 1) {
  //         console.log(newBooks);
  //         res.json(newBooks);
  //       }
  //     });
  //   });
  // });

  // /* reducer method that takes in the accumulator and next item */
  // const reducer = (authers, book) => {
  //     AuthorModel.findById(book.authorId).exec
  //     if (authers.includes()) {

  //     }
  //   return accumulator + item;
  // };
});


// router.post("/", async (req, res) => {
//   const newReview = new ReviewModel(req.body);
//   const results = await newReview.save();
//   res.status(201).json(results);
// });

module.exports = router;
