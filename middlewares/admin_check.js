let UserModel = require("../models/user");
const chalk = require('chalk');

let checkIsAdmin = async (req, res, next) => {
    try {
      const token = req.header("JWT");
      console.log(token);
      
      const users = await UserModel.find({ token:String(token) });
      console.log(users);
      
      if (users.length > 0) {
        if (users[0].isAdmin) {
          next();        
        }else{
          res.send(401,"Unauthorized")
        }
      } else {
        res.send(404, "User Not Found");
      }
  
    } catch (error) {
      console.log(chalk.bgRed.white(error))
      res.send(401, "Admin verfication error");
    }
  };
  
  module.exports = checkIsAdmin
