const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

require("dotenv").config({ path: "variables.env" });
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
});

mongoose.connection
  .once("open", () =>
    console.log("mongoDB connected successfully...")
  )
  .on("error", err => {
    throw err;
  });
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  
  const userRoute = require("./routes/User/index");
  app.use('/', userRoute);
  app.use("/api/signup", userRoute);
  app.use('/api/signin', userRoute);
  

  const bookRoute = require("./routes/Book/index");
  app.use('/', bookRoute);
  app.use('/api/addbook', bookRoute);

  const authorRoute = require("./routes/Author/index");
  app.use('/', authorRoute);
  app.use('/api/addauthor', authorRoute);

  const searchRoute = require("./routes/Search/index");
  app.use("/", searchRoute);
  app.use("/api/search", searchRoute);
  

  app.listen( port ); 
  