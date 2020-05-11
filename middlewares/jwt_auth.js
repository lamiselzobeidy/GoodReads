var jwt = require('jsonwebtoken');



let checkJWT =  async (req, res, next) => {
    try {
      const token = req.header("JWT");
      const decoded = await jwt.verify(token, "secretkey");
      // console.log(decoded.usermail);
      next();
    } catch (error) {
      console.log(chalk.bgRed.white(error))
      res.status(401).send("verfication error");
    }
  };


module.exports = checkJWT

  
