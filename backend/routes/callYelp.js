const express = require('express');
const router = express.Router();
const yelp = require("../Yelp/YelpGet").client;

//api call. 
router.get('/callYelp', function(req, res, next) {
    //here we use "yelp" to search our query's search term and send a JSON version of yelp's data
    yelp.search({ term: req.query.searchTerm, location: 'New York', categories:"restaurants"})
        .then(function (data) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(data));
        })
  });

module.exports = router;