const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bookModel = require("../models/book");
const userModel = require('../models/user')
const multer = require('multer');


router.get("/all", async (req, res) => {
    try {
        const allBooks = await bookModel.find({});
        //202 means accepted
        res.status(202).json(allBooks.all);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
});

router.get("/read", async (req, res) => {
    try {
        const readBooks = await bookModel.find({});
        //202 means accepted
        res.status(202).json(readBooks.read);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
});

router.get("/current", async (req, res) => {
    try {
        const currentBooks = await bookModel.find({});
        //202 means accepted
        res.status(202).json(currentBooks.current);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
});

router.get("/want", async (req, res) => {
    try {
        const wantedBooks = await bookModel.find({});
        //202 means accepted
        res.status(202).json(wantedBooks.want_to_read);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
});

router.post('/read/:bookid', async (req, res) => {
    try {
        // console.log(req.header('JWT'));

        //JWT
        const currentUser = await userModel.find({token: req.header('JWT')}).exec();

        const readBooks = currentUser[0].read;

        const newReadBooks = [...readBooks, req.params.bookid];

        currentUser[0].read = newReadBooks;

        let results = await userModel.findByIdAndUpdate(currentUser[0]._id, currentUser[0], {new: true}).exec()

        res.status(201).json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(409);
    }

});

router.post('/current/:bookid', async (req, res) => {
    try {
        // console.log(req.header('JWT'));

        //JWT
        const currentUser = await userModel.find({token: req.header('JWT')}).exec();

        const currentBooks = currentUser[0].current;

        const newCurrentBooks = [...currentBooks, req.params.bookid];

        currentUser[0].read = newCurrentBooks;

        let results = await userModel.findByIdAndUpdate(currentUser[0]._id, currentUser[0], {new: true}).exec()

        res.status(201).json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(409);
    }

});

router.post('/want/:bookid', async (req, res) => {
    try {
        // console.log(req.header('JWT'));

        //JWT
        const currentUser = await userModel.find({token: req.header('JWT')}).exec();

        const wantedBooks = currentUser[0].want_to_read;

        const newWantedBooks = [...wantedBooks, req.params.bookid];

        currentUser[0].read = newWantedBooks;

        let results = await userModel.findByIdAndUpdate(currentUser[0]._id, currentUser[0], {new: true}).exec()

        res.status(201).json(results);
    } catch (error) {
        console.log(error);
        res.sendStatus(409);
    }

});

router.patch('change/:bookid', async (req, res) => {
    try {
        //JWT
        const currentUser = await userModel.find({token: req.header('JWT')}).exec();

        const BookOperation = Object.freeze({
            "currentToread": 1, "currentTowant": 2, "wantTocurrent": 3,
            "wantToread": 4, "readTocurrent": 5, "readTowant": 6
        });

        const wantedBooks = currentUser[0].want_to_read;
        const readBooks = currentUser[0].read;
        const currentBooks = currentUser[0].current;

        console.log(req.body);

        const operation = req.body.operation;
        let changebook = [];
        let newReadBooks = [];
        let newWantedBooks = [];
        let newCurrentBooks = [];

        switch (operation) {
            case BookOperation.currentToread:
                changeBook = currentBooks.find(req.params.bookid);
                //if delete doesnt work use remove
                currentBooks.find(req.params.bookid).delete;
                newReadBooks = [...readBooks, changeBook];
                currentUser[0].read = newReadBooks;
                break;
            case BookOperation.currentTowant:
                changeBook = currentBooks.find(req.params.bookid);
                //if delete doesnt work use remove
                currentBooks.find(req.params.bookid).delete;
                newWantedBooks = [...wantedBooks, changebook];
                currentUser[0].want_to_read = newWantedBooks;
                break;
            case BookOperation.wantTocurrent:
                changeBook = wantedBooks.find(req.params.bookid);
                //if delete doesnt work use remove
                wantedBooks.find(req.params.bookid).delete;
                newCurrentBooks = [...currentBooks, changebook];
                currentUser[0].current = newCurrentBooks;
                break;
            case BookOperation.wantToread:
                changeBook = wantedBooks.find(req.params.bookid);
                //if delete doesnt work use remove
                wantedBooks.find(req.params.bookid).delete;
                newReadBooks = [...readBooks, changebook];
                currentUser[0].read = newReadBooks;
                break;
            case BookOperation.readTocurrent:
                changebook = readBooks.find(req.body.bookid);
                //if delete doesnt work use remove
                readBooks.find(req.body.bookid).delete;
                newCurrentBooks = [...currentBooks, changebook];
                currentUser[0].current = newCurrentBooks;
                break;
            case BookOperation.readTowant:
                changebook = readBooks.find(req.body.bookid);
                //if delete doesnt work use remove
                readBooks.find(req.body.bookid).delete;
                newWantedBooks = [...wantedBooks, changebook];
                currentUser[0].want = newWantedBooks;
                break;
            default:
                res.json("Not a Valid Operation");
        }

        let results = await userModel.findByIdAndUpdate(currentUser[0]._id, currentUser[0], {new: true}).exec()
        res.json(results);
    } catch (error) {
        console.log(error);
        res.send(404, {
            error
        })
    }
});

module.exports = router;
