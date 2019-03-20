const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const app = express();
const Data = require("./db/data");
const router = express.Router();
//Create our database and add it here
const dbRoute = "mongodb://dbUser:<rfinder>@rfindertrial-shard-00-00-r1y8f.mongodb.net:27017,rfindertrial-shard-00-01-r1y8f.mongodb.net:27017,rfindertrial-shard-00-02-r1y8f.mongodb.net:27017/test?ssl=true&replicaSet=rFinderTrial-shard-0&authSource=admin&retryWrites=true"
var yelpRouter = require("./routes/callYelp");

app.use(logger('dev'));
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use our yelp router
app.use('/api', yelpRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;


