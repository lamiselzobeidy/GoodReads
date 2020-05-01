const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const categoryRoutes = require("./routes/categoryRoutes");
const authorRoutes = require("./routes/authorRoutes");
const app = express();

const PORT = 3000;

const BookRouter = require("./routes/book");

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/amiiboa", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db is Conncted");
  })
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  //logger for all requests on server endpoints
  console.log(`${new Date()} ---- ${req.method} ---- ${req.url} `);

  next();
});

//Categories route
app.use("/category", categoryRoutes);
//Author
app.use("/author", authorRoutes);

app.use("/public", express.static("public"));

app.use("/book", BookRouter);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server Listen on ${PORT}`);
  }
});
