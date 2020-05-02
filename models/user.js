const {Schema:mongooseSchema , model} = require("mongoose")

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let userSchema = new mongooseSchema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    password:{type:String,required:true,min:8},
    img_path:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false},
    all:{type:Object,required:true,default:{}},
    read:{type:Object,required:true,default:{}},
    current:{type:Object,required:true,default:{}},
    want_to_read:{type:Object,required:true,default:{}},
    token:{type:String,required:false},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});



let UserModel = model('user',userSchema);
module.exports = UserModel;
