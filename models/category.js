const {Schema:mongooseSchema , model} = require("mongoose")

let categorySchema = new mongooseSchema({
})


let CategoryModel = model('category',categorySchema)
module.exports = CategoryModel
