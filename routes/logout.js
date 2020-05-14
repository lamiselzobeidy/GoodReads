const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const chalk = require("chalk");
const checkJWT = require("../middlewares/jwt_auth");

const userModel = require("../models/user");

const router = express.Router();

router.use(checkJWT);

router.post("/", async (req, res) => {
  if (!req.header("JWT")) {
    res.status(201).send("Authentication user");
  } else {
    const currentUser = await userModel
      .find({ token: req.header("JWT") })
      .exec();
    if (currentUser.length===0) {
      res.status(404).json("User Not Found");
    } else {
      currentUser[0].token = "";
      const result = await userModel.findByIdAndUpdate(
        currentUser[0]._id,
        currentUser[0]
      );

      if (result) {
        res.json("Logout successfully");
      } else {
        res.status(501).json("internal error");
      }
    }
  }
});

module.exports = router;
