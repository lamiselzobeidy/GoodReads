const {Schema:mongooseSchema , model ,Schema} = require("mongoose")

let bookSchema = new mongooseSchema({
   bookName:{type:String,required:true},
   catId:{type:Schema.Types.ObjectId, ref:'category'},
   authorId:{type:Schema.Types.ObjectId, ref:'author'},
   brief:{type:String},
   coverImageName:{type:String,required:true}
});

bookSchema.statics.getAllBooks = function () {
   return this.find({}).populate("authorId").populate("catId")
};

bookSchema.statics.getBooksByAuthorID = function(id){
   return this.find({authorId:id})
}

bookSchema.statics.findByBookId = function (id) {
   return this.findById(id).populate("authorId").populate("catId")
};

bookSchema.statics.findBooksByCatId = function (id) {
   return this.find({catId:id}).populate("authorId").populate("catId")
};

bookSchema.statics.findBooksByCatAndAuthorId = function (catId,authorId) {
   return this.find({catId,authorId}).populate("authorId").populate("catId")
};


let BookModel = model('book',bookSchema);

module.exports = BookModel;
