//all of our requires - look up the name of the package for more information, npm has good documentation

//the module for user authenticated sessions
const session = require("express-session");
//the module for all of our server functions
const express = require('express');
//a module for parsing req.body into validated json
const bodyParser = require('body-parser');
//a module for dealing with files / serving
const path = require('path');
//kinda confused what this does, seems to help with passing send / request data?
const morgan = require('morgan');
//the middleware we're using for user authentication
const passport = require('./passport');
//the connection to our mongoDB database, configured in the path ./database
const dbConnection = require('./database');
//a mongoDB session (automatically creates a db collection called "sessions" which saves sessions)
const MongoStore = require('connect-mongo')(session);
//our MongoDB user schema that represents our user
const user = require('./routes/user');
//our port, which either uses an !environment variable! or port 5000
const PORT = (process.env.PORT || 5000);
//the route that serves up our yelp content
var yelpRouter = require("./routes/callYelp");

//create an app with express
const app = express();

//configure bodyparser and morgan MIDDLEWARE
app.use(morgan('dev'));
//body parser gives us responses in easy to use JSON!!!!!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//TODO: generate a random string for each session
const randomString="k5434ni8238dj5483";

//sessions
app.use(
  session({
    secret: randomString, //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection}), //MongoDB session
    resave: false, //TODO: research these settings
    saveUninitialized: false //TODO: research these settings
  })
);
// Passport initialization
app.use(passport.initialize())

//configures the passport session
app.use(passport.session()) // calls serializeUser and deserializeUser

//use our yelp router
app.use('/api', yelpRouter);

//use our user router for our database user schema
app.use('/user', user);

//I don't really know what this does? I think it basically allows us to serve all routes through the frontend? that's what it seems like
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '/frontend/build', 'index.html'));
});


//this whole thing was autogenerated. sorry idk!
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

//Listen to the specified port
app.listen(PORT, function () {
  console.error(`Node is listening on port ${PORT}`);
});

//we can access this configured app by require("app.js")
module.exports = app;


