const {Schema:mongooseSchema , model} = require("mongoose")

let authorSchema = new mongooseSchema({
})


let AuthorModel = model('author',authorSchema)
module.exports = AuthorModel
