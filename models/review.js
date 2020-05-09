const {Schema:mongooseSchema , model,Schema} = require("mongoose");

let reviewSchema = new mongooseSchema({
    bookId:{type:Schema.Types.ObjectId, ref:'book'},
    userId:{type:Schema.Types.ObjectId, ref:'user'},
    review:{type:String,default:''},
    rating:{type:Number,default:0}
});

let ReviewModel = model('review',reviewSchema);
module.exports = ReviewModel;
