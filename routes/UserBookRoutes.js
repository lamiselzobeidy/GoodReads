const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bookModel = require("../models/book");
const userModel = require("../models/user");
const reviewModel = require("../models/review");
const authorModel = require("../models/authorModel");
const multer = require("multer");

router.get("/all", async (req, res) => {

    try {
        //TODO Get books data itself not ids
        const allUserBooksIds = await userModel.find({token: req.header("JWT")}, {_id: 0, all: 1});
        console.log(allUserBooksIds);
        const allUserBooks = await bookModel.find({_id: {$in: allUserBooksIds}}, {_id: 0, bookName:1 });
        console.log(allUserBooks);
        const allAuthorsIds = await bookModel.find({_id: {$in: allUserBooksIds}}, {_id: 0, authorId: 1});
        console.log(allAuthorsIds);
        const allAuthors = await authorModel.find({_id: {$in: allAuthorsIds}}, {_id: 0, firstName: 1, lastName: 1});
        console.log(allAuthors);
        const reviews = await reviewModel.find({bookId: {$in: allUserBooksIds}}, {review: 1, _id: 0});
        console.log(reviews);
        const ratings = await reviewModel.find({bookId: {$in: allUserBooksIds}}, {rating: 1, _id: 0});
        console.log(ratings);

        let avgForEachBook = [];

        // const allUsers = await 
        const avgRatingForEachBook = 0;
        //202 means accepted
        res.status(202).json({allUserBooks, allAuthors, reviews, ratings});
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
            .find({token: req.header("JWT")})
            .exec();

        const readBooks = currentUser[0].read;

        const newReadBooks = [...readBooks, req.params.bookid];

        currentUser[0].read = newReadBooks;

        let results = await userModel
            .findByIdAndUpdate(currentUser[0]._id, currentUser[0], {new: true})
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
            .find({token: req.header("JWT")})
            .exec();

        const currentBooks = currentUser[0].current;

        const newCurrentBooks = [...currentBooks, req.params.bookid];

        currentUser[0].read = newCurrentBooks;

        let results = await userModel
            .findByIdAndUpdate(currentUser[0]._id, currentUser[0], {new: true})
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
            .find({token: req.header("JWT")})
            .exec();

        const wantedBooks = currentUser[0].want_to_read;

        const newWantedBooks = [...wantedBooks, req.params.bookid];

        currentUser[0].read = newWantedBooks;

        let results = await userModel
            .findByIdAndUpdate(currentUser[0]._id, currentUser[0], {new: true})
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
            .find({token: req.header("JWT")})
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
            .findByIdAndUpdate(currentUser[0]._id, currentUser[0], {new: true})
            .exec();
        res.json(results);

    } catch (error) {
        console.log(error);
        res.send(404, {
            error,
        });
    }
});

module.exports = router;
