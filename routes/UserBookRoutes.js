const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bookModel = require("../models/book");
const userModel = require("../models/user");
const reviewModel = require("../models/review");
const authorModel = require("../models/authorModel");
const ReviewModel = require("../models/review");
const checkJWT = require("../middlewares/jwt_auth");
const chalk = require("chalk");

const multer = require("multer");

router.use(checkJWT);

//TODO Get books data itself not ids
router.get("/all", async (req, res) => {
  try {
    const allUserBooksIds = await userModel.find(
      { token: req.header("JWT") },
      { _id: 1, all: 1 }
    );
console.log(JSON.stringify(allUserBooksIds));

    let allUserBooks = await bookModel
      .find(
        { _id: { $in: allUserBooksIds[0].all } },
        { _id: 1, bookName: 1, firstName: 1, lastName: 1 }
      )
      .populate("authorId");

    const books = await getBooks(
      allUserBooks,
      allUserBooksIds[0]._id,
      allUserBooksIds[0].all
    );
    console.log(books);

    //202 means accepted
    res.status(202).json({ books });
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.get("/read", async (req, res) => {
  try {
    const readUserBooksIds = await userModel.find(
      { token: req.header("JWT") },
      { _id: 1, read: 1 }
    );

    let readUserBooks = await bookModel
      .find(
        { _id: { $in: readUserBooksIds[0].read } },
        { _id: 1, bookName: 1, firstName: 1, lastName: 1 }
      )
      .populate("authorId");

    const books = await getBooks(
      readUserBooks,
      readUserBooksIds[0]._id,
      readUserBooksIds[0].read
    );

    //202 means accepted
    res.status(202).json(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.get("/current", async (req, res) => {
  try {
    const currentUserBooksIds = await userModel.find(
      { token: req.header("JWT") },
      { _id: 1, current: 1 }
    );

    let currentUserBooks = await bookModel
      .find(
        { _id: { $in: currentUserBooksIds[0].current } },
        { _id: 1, bookName: 1, firstName: 1, lastName: 1 }
      )
      .populate("authorId");

    const books = await getBooks(
      currentUserBooks,
      currentUserBooksIds[0]._id,
      currentUserBooksIds[0].current
    );

    //202 means accepted
    res.status(202).json(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.get("/want", async (req, res) => {
  try {
    const wantedUserBooksIds = await userModel.find(
      { token: req.header("JWT") },
      { _id: 1, want_to_read: 1 }
    );

    let wantedUserBooks = await bookModel
      .find(
        { _id: { $in: wantedUserBooksIds[0].want_to_read } },
        { _id: 1, bookName: 1, firstName: 1, lastName: 1 }
      )
      .populate("authorId");

    const books = await getBooks(
      wantedUserBooks,
      wantedUserBooksIds[0]._id,
      wantedUserBooksIds[0].want_to_read
    );

    //202 means accepted
    res.status(202).json(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

//TODO Handle add to all ,not add if exits
router.post("/read/:bookid", async (req, res) => {
  try {
    //JWT
    const currentUser = await userModel
      .find({ token: req.header("JWT") })
      .exec();

    const readBooks = currentUser[0].read;

    const newReadBooks = [...readBooks, req.params.bookid];

    currentUser[0].read = newReadBooks;
    currentUser[0].all = addToAll(currentUser[0], req.params.bookid);

    let results = await userModel
      .findByIdAndUpdate(currentUser[0]._id, currentUser[0], { new: true })
      .exec();

    res.status(201).json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(409);
  }
});

router.post("/current/:bookid", async (req, res) => {
  try {
    // console.log(req.header('JWT'));

    //JWT
    const currentUser = await userModel
      .find({ token: req.header("JWT") })
      .exec();

    const currentBooks = currentUser[0].current;

    const newCurrentBooks = [...currentBooks, req.params.bookid];

    currentUser[0].current = newCurrentBooks;
    currentUser[0].all = addToAll(currentUser[0], req.params.bookid);

    let results = await userModel
      .findByIdAndUpdate(currentUser[0]._id, currentUser[0], { new: true })
      .exec();

    res.status(201).json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(409);
  }
});

router.post("/want/:bookid", async (req, res) => {
  try {
    // console.log(req.header('JWT'));

    //JWT
    const currentUser = await userModel
      .find({ token: req.header("JWT") })
      .exec();

    const wantedBooks = currentUser[0].want_to_read;

    const newWantedBooks = [...wantedBooks, req.params.bookid];

    currentUser[0].want_to_read = newWantedBooks;
    currentUser[0].all = addToAll(currentUser[0], req.params.bookid);

    let results = await userModel
      .findByIdAndUpdate(currentUser[0]._id, currentUser[0], { new: true })
      .exec();

    res.status(201).json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(409);
  }
});

router.patch("/change/:bookid", async (req, res) => {
  try {
    //JWT
    const currentUser = await userModel
      .find({ token: req.header("JWT") })
      .exec();

    console.log(currentUser);

    const BookOperation = Object.freeze({
      currentToread: 1,
      currentTowant: 2,
      wantTocurrent: 3,
      wantToread: 4,
      readTocurrent: 5,
      readTowant: 6,
    });

    const wantedBooks = currentUser[0].want_to_read;
    const readBooks = currentUser[0].read;
    const currentBooks = currentUser[0].current;

    console.log(req.body);

    const operation = req.body.operation;
    let newReadBooks = [];
    let newWantedBooks = [];
    let newCurrentBooks = [];

    //TODO handle book not in array
    switch (operation) {
      case BookOperation.currentToread:
        newCurrentBooks = currentBooks.filter((bookID) => {
          bookID === req.params.bookid ? false : true;
        });
        newReadBooks = [...readBooks, req.params.bookid];
        currentUser[0].read = newReadBooks;
        currentUser[0].current = newCurrentBooks;
        break;

      case BookOperation.currentTowant:
        newCurrentBooks = currentBooks.filter((bookID) => {
          bookID === req.params.bookid ? false : true;
        });
        newWantedBooks = [...wantedBooks, req.params.bookid];
        currentUser[0].want_to_read = newWantedBooks;
        currentUser[0].current = newCurrentBooks;
        break;

      case BookOperation.wantTocurrent:
        newWantedBooks = wantedBooks.filter((bookID) => {
          bookID === req.params.bookid ? false : true;
        });
        newCurrentBooks = [...currentBooks, req.params.bookid];
        currentUser[0].current = newCurrentBooks;
        currentUser[0].want_to_read = newWantedBooks;
        break;

      case BookOperation.wantToread:
        newWantedBooks = wantedBooks.filter((bookID) => {
          bookID === req.params.bookid ? false : true;
        });
        newReadBooks = [...readBooks, req.params.bookid];
        currentUser[0].read = newReadBooks;
        currentUser[0].want_to_read = newWantedBooks;
        break;

      case BookOperation.readTocurrent:
        newReadBooks = readBooks.filter((bookID) => {
          bookID === req.params.bookid ? false : true;
        });
        newCurrentBooks = [...currentBooks, req.params.bookid];
        currentUser[0].current = newCurrentBooks;
        currentUser[0].read = [...newReadBooks];
        break;

      case BookOperation.readTowant:
        newReadBooks = readBooks.filter((bookID) => {
          bookID === req.params.bookid ? false : true;
        });
        newWantedBooks = [...wantedBooks, req.params.bookid];
        currentUser[0].want_to_read = newWantedBooks;
        currentUser[0].read = newReadBooks;
        break;

      default:
        res.json("Not a Valid Operation");
    }

    let results = await userModel
      .findByIdAndUpdate(currentUser[0]._id, currentUser[0], { new: true })
      .exec();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.send(404, {
      error,
    });
  }
});

router.post("/review", async (req, res) => {
  const currentUser = await userModel.find({ token: req.header("JWT") }).exec();

  const review = {
    bookId: req.body.bookId,
    userId: currentUser[0]._id,
  };

  if (req.body.rating) {
    review.rating = req.body.rating;
  }

  if (req.body.review) {
    review.review = req.body.review;
  }

  const newReview = new ReviewModel(review);
  const results = await newReview.save();
  res.status(201).json(results);
});

router.patch("/review", async (req, res) => {
  //JWT
  const currentUser = await userModel.find({ token: req.header("JWT") }).exec();
  const bookid = req.body.bookid;
  const editReview = await ReviewModel.find({
    bookId: bookid,
    userId: currentUser[0]._id,
  });

  if (req.body.rating) {
    editReview[0].rating = req.body.rating;
  }

  if (req.body.review) {
    editReview[0].review = req.body.review;
  }
  let results = await ReviewModel.findByIdAndUpdate(
    editReview[0]._id,
    editReview[0],
    { new: true }
  ).exec();

  res.status(201).json(results);
});

function addToAll(currentUser, bookId) {
  const allBooks = currentUser.all;
  const newAllBooks = [...allBooks, bookId];
  return newAllBooks;
}

async function getBooks(userBooks, userID, booksID) {
  const ratings = await reviewModel
    .find({ bookId: { $in: booksID } }, { rating: 1, _id: 1, bookId: 1 })
    .populate("bookId");

    console.log(chalk.blue(ratings));
    


  let userRating = await reviewModel
    .find({ userId: userID }, { rating: 1, bookId: 1 })
    .populate("bookId");

  const books = userBooks.map((book, idx) => {
    let bookRate = userRating.filter((rating) => {
      return book.bookName == rating.bookId.bookName ? true : false;
    });

    //when user not rate this book
    if (bookRate.length===0) {
      bookRate=[{rating:0}]
    }

    const allBookRates = ratings.filter(
      (rating) => book.bookName == rating.bookId.bookName
    );

    const totalRating = allBookRates.reduce((totalRating, book) => {
      return totalRating + book.rating;
    }, 0);

    const avgRate = totalRating / allBookRates.length;

    const newBook = {
      bookId: book._id,
      bookName: book.bookName,
      authorId: book.authorId._id,
      autherName: `${book.authorId.firstName} ${book.authorId.lastName}`,
      userRate: bookRate[0].rating,
      avgRate,
    };

    return newBook;
  });

  return books;
}

module.exports = router;
