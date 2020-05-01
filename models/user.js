const {Schema:mongooseSchema , model} = require("mongoose")

let userSchema = new mongooseSchema({
})


let UserModel = model('category',userSchema)
module.exports = UserModel
