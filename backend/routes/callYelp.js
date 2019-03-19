const express = require('express');
const router = express.Router();
const yelp = require("../Yelp/YelpGet").client;

router.get('/callYelp', function(req, res, next) {
    yelp.search({ term: req.query.searchTerm, location: 'New York' })
        .then(function (data) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(data));
        })
  });

module.exports = router;