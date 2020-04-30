const mongoose = require('mongoose');

let authorSchema = new mongoose.Schema({
    //The ID is generated automatically by mongoose.
    //Use dropDups to ensure dropping duplicate records in your schemas
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    //post or upload image not tested
    // profileImage: {data: Buffer, contentType: String},
    DateofBirth: {type: Date},
});

let authorModel = mongoose.model('author', authorSchema, 'author');


// we need a function here to validate the JWT token

module.exports = authorModel;
