var express = require('express');
var router = express.Router();
let hbs = require("handlebars");
var API = require('../API');

/* GET home page. */
router.get('/', function(req, res, next) {
	//sets up the array of restaurant objects for the template
	let restaurants=[];
	//takes in search query
	let text = req.query.text;
	//adds the appropriate restaurants to the list
	API.queryToList(text, restaurants);
	//renders the page
	hbs.registerPartial
	res.render('SearchPage',{res:restaurants})
});

module.exports = router;
