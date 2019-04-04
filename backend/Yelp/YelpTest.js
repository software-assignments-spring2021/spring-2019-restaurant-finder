const yelp = require("./YelpGet").client;

yelp.business('gary-danko-san-francisco')
	.then(data => {
	console.log(data.jsonBody);
  })



// yelp.search({ term:"hello", location: 'New York City', categories:"restaurants"})
// .then(function (data) {
// 	let count = 0
// 	let obj = JSON.parse(data.body);
// 	for ( property of obj.businesses){
// 		count++;
// 		console.log(property.name);
// 	}
// 	console.log(count);
			
// })
// console.log("------");