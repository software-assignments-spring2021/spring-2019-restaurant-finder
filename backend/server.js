const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();

//Create our database and add it here
const dbRoute = "mongodb://dbUser:<rfinder>@rfindertrial-shard-00-00-r1y8f.mongodb.net:27017,rfindertrial-shard-00-01-r1y8f.mongodb.net:27017,rfindertrial-shard-00-02-r1y8f.mongodb.net:27017/test?ssl=true&replicaSet=rFinderTrial-shard-0&authSource=admin&retryWrites=true"

mongoose.connect(
  dbRoute,
  { useNewUrlParser: true}
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

//checks if connection was successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//add logging and bodyParser to parse the request body to be in json format

//Get method that fetches all available data in database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({success: false, error: err});
    return res.json({success: true, data: data});
  });
});

//Other methods will be written later

//
app.use("/api", router);
app.listen(API_PORT, () => console.log('LISTENING ON PORT ${API_PORT}'));
