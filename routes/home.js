const express = require("express");

let BookModel = require("../models/book");
let AuthorModel = require("../models/authorModel");
let CategoryModel = require("../models/categoryModel");

let router = express.Router();
router.get("/", async function (req, res) {
  try {
    // Find First 10 News Items
    const books = await BookModel.find(
      {},
      {
        skip: 0, // Starting Row
        limit: 10, // Ending Row
        sort: {
          rating: -1, //Sort by Date Added DESC
        },
      }
    );

    // /* reducer method that takes in the accumulator and next item */
    // const reducer = (authers, book) => {
    //     AuthorModel.findById(book.authorId).exec
    //     if (authers.includes()) {
            
    //     }
    //   return accumulator + item;
    // };


  } catch (error) {}
});

module.exports = router;
