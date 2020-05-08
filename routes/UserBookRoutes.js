const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bookModel = require("../models/book");
const userModel = require("../models/user");
const reviewModel = require("../models/review");
const authorModel = require("../models/authorModel");
const ReviewModel = require("../models/review");

const multer = require("multer");

router.get("/all", async (req, res) => {
  try {
    //TODO Get books data itself not ids
    const allUserBooksIds = await userModel.find(
      { token: req.header("JWT") },
      { _id: 1, all: 1 }
    );
    //console.log(allUserBooksIds);
    let allUserBooks = await bookModel
      .find(
        { _id: { $in: allUserBooksIds[0].all } },
        { _id: 1, bookName: 1, firstName: 1, lastName: 1 }
      )
      .populate("authorId");
    //console.log(allUserBooks);
    // const allAuthorsIds = await bookModel.find({_id: {$in: allUserBooksIds[0].all}}, {_id: 0, authorId: 1}).populate('authorId');
    // console.log(allAuthorsIds);
    // const allAuthors = await authorModel.find({_id: {$in: allAuthorsIds[0]}}, {_id: 0, firstName: 1, lastName: 1});
    // console.log(allAuthors);

    //const reviews = await reviewModel.find({bookId: {$in: allUserBooksIds[0].all}}, {review: 1, _id: 0});
    //console.log(reviews);
    const ratings = await reviewModel
      .find(
        { bookId: { $in: allUserBooksIds[0].all } },
        { rating: 1, _id: 1, bookId: 1 }
      )
      .populate("bookId");
    let userRating = await reviewModel
      .find({ userId: allUserBooksIds[0]._id }, { rating: 1, bookId: 1 })
      .populate("bookId");
    //console.log(ratings);

    let avgRatingForEachBook = [];

    const books = allUserBooks.map((book, idx) => {
      // console.log(userRating);

      const bookRate = userRating.filter((rating) => {
        return book.bookName == rating.bookId.bookName ? true : false;
      });

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
      // book.review = reviews[idx];
      return newBook;
    });

    // console.log(books);

    // for (let index = 0; index <= allUserBooksIds[0].length; index++) {
    //     let ratings = 0;
    //     let avgRating = 0;
    //     const numberOfUsers = await userModel.find({all: allUserBooksIds[index]}).length;
    //     const usersRatings = await userModel.find({all: allUserBooksIds[index]}, {_id: 1})
    //         .forEach((id) => {
    //             ratings += reviewModel.find({userId: id}, {_id: 0, rating: 1});
    //         });
    //     avgRating = ratings / numberOfUsers;
    //     avgRatingForEachBook.push(avgRating);
    // }
    //202 means accepted
    res.status(202).json({ books });
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.get("/read", async (req, res) => {
  try {
    const userReadBooks = await bookModel.find({}, read);
    //202 means accepted
    res.status(202).json(readBooks.read);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.get("/current", async (req, res) => {
  try {
    const userCurrentBooks = await bookModel.find({}, current);
    //202 means accepted
    res.status(202).json(currentBooks.current);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

router.get("/want", async (req, res) => {
  try {
    const wantedBooks = await bookModel.find({}, want_to_read);
    //202 means accepted
    res.status(202).json(wantedBooks.want_to_read);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

//TODO Handle add to all ,not add if exits
router.post("/read/:bookid", async (req, res) => {
  try {
    // console.log(req.header('JWT'));

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

    currentUser[0].read = newCurrentBooks;
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

    currentUser[0].read = newWantedBooks;
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

function addToAll(currentUser, bookId) {
  const allBooks = currentUser.all;
  const newAllBooks = [...allBooks, bookId];
  return newAllBooks;
}

module.exports = router;
