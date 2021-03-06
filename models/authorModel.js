const mongoose = require('mongoose');

let authorSchema = new mongoose.Schema({
    //The ID is generated automatically by mongoose.
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    fullName: {type: String},
    authorImage: {type: String},
    bio: {type: String,default:""},
    DateofBirth: {type: Date,default:Date.now},
});

let AuthorModel = mongoose.model('author', authorSchema, 'author');


// we need a function here to validate the JWT token

module.exports = AuthorModel;
