const session= require("express-session");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const passport = require('./passport');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const user = require('./routes/user');
const PORT = (process.env.PORT || 5000);
//Create our database and add it here
var yelpRouter = require("./routes/callYelp");

const app = express();

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//FOR THE FUTURE - generate a random string every new session
const randomString="campus98lin";

//sessions
app.use(
  session({
    secret: randomString, //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection}),
    resave: false, //required
    saveUninitialized: false //required
  })
);
// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls serializeUser and deserializeUser

//use our yelp router
app.use('/api', yelpRouter);

app.use('/user', user);


app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

app.listen(PORT, function () {
  console.error(`Node is listening on port ${PORT}`);
});

module.exports = app;


