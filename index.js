const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const chalk = require('chalk');
var jwt = require('jsonwebtoken');


const categoryRoutes = require("./routes/categoryRoutes");
const authorRoutes = require("./routes/authorRoutes");
const UserRouter = require("./routes/user");
const BookRouter = require("./routes/book");
const HomeRouter = require("./routes/home");
const UserBookRouter = require("./routes/UserBookRoutes");
const LoginRouter = require("./routes/login");
const LogoutRouter = require("./routes/logout");
const SearchRouter = require("./routes/search");

let UserModel = require("./models/user");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/amiiboa", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(chalk.green("db is Conncted"));
  })
  .catch((err) => console.log(chalk.bgRed.white(err)));

app.use((req, res, next) => {
  //logger for all requests on server endpoints
  console.log(`${chalk.yellow(new Date())} ---- ${chalk.green(req.method)} ---- ${chalk.blue(req.url)} `);

  next();
});

app.use("/public", express.static("public"));

app.use("/home", HomeRouter);

app.use("/login", LoginRouter);
app.use("/logout",LogoutRouter);

app.use("/user", UserRouter);

app.use("/user/book", UserBookRouter);

app.use("/search", SearchRouter);

// app.use(async (req, res, next) => {
//   try {
//     const token = req.header("JWT");
//     const users = await UserModel.find({ token });
    
//     if (users.length > 0) {
//       if (users[0].isAdmin) {
//         next();        
//       }else{
//         res.send(401,"Unauthorized")
//       }
//     } else {
//       res.send(404, "Not Found");
//     }

//   } catch (error) {
//     console.log(chalk.bgRed.white(error))
//     res.send(401, "verfication error");
//   }
// });

//Categories route
app.use("/category", categoryRoutes);
//Author
app.use("/author", authorRoutes);

app.use("/book", BookRouter);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server Listen on ${PORT}`);
  }else{
    console.log(chalk.bgRed.white(err))
  }
});
