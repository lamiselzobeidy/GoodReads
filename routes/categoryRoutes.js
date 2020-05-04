const express = require('express');
const router = express.Router();
const categoryModel = require("../models/categoryModel");

router.post("/", async (req, res) => {
    try {
        // Here we need to check the JWT token before creating a new category
        const newCategory = new categoryModel({
            categoryName:req.body.categoryName
        }
        );
        const category = await newCategory.save();
        res.json(category);
    } catch (error) {
        console.log(error);
        res.sendStatus(409);
    }
});

router.get("/", async (req, res) => {
    try {
        // Here we need to check the JWT token before getting all categories
        allCategories = await categoryModel.find({});
        //202 means accepted
        res.status(202).json(allCategories);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
});

router.get("/:id", async (req, res) => {
    try {
        // Here we need to check the JWT token before getting a category
        const category = await categoryModel.findById(req.params.id);
        //202 means accepted
        res.status(202).json(category);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
});

// //Search by name just in case because every name is unique
// router.get('/:name', async (req, res) => {
//     console.log(req.params.name);
//     const searchCategory = req.params.name;
//     try {
//         const result = await categoryModel.find({name: { $regex: searchCategory, $options: 'i'}}).exec();
//         console.log(result);
//         res.json(result);
//     } catch (error) {
//         console.log(error);
//         res.json(error);
//     }
// });

router.patch("/:id", async (req, res) => {
    try {
        // Here we need to check the JWT token before updating a category
        const categoryData = req.body;
        const editedCategory = await categoryModel.updateOne({_id: req.params.id}, categoryData);
        //202 means accepted
        res.status(202).json(editedCategory.nModified);
    } catch (error) {
        console.log(error);
        res.sendStatus(409);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        // Here we need to check the JWT token before deleting a category
        const deleteCategory = await categoryModel.deleteOne({_id: req.params.id});
        //202 means accepted
        res.status(202).json(deleteCategory.nModified);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
});

module.exports = router;



