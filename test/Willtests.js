let expect = require("chai").expect;
let API = require("../backend/Yelp/API");



describe("create Restaurant Method", function(){

	it("outputs an object with the correct properties for the correct paramaters", function(/*done*/){

		let testobj = API.restaurantObj("NAME","jow.com/img.jpeg","www.yes.com","11-5","180 yes street","123-412-4334", "$$$","5 stars");
		expect(testobj.name).to.equal("NAME");
		expect(testobj.imgURL).to.equal("jow.com/img.jpeg");
		expect(testobj.webURL).to.equal("www.yes.com");
		expect(testobj.hours).to.equal("11-5");
		expect(testobj.address).to.equal("180 yes street");
		expect(testobj.phone).to.equal("123-412-4334");
		expect(testobj.price).to.equal("$$$");
		expect(testobj.rating).to.equal("5 stars");
	});

	it("output a N/A or blank for the appropriate parameter not being provided", function(/*done*/){

		let testobj = API.restaurantObj();
		expect(testobj.name).to.equal("N/A");
		expect(testobj.imgURL).to.equal("");
		expect(testobj.webURL).to.equal("N/A");
		expect(testobj.hours).to.equal("N/A");
		expect(testobj.address).to.equal("N/A");
		expect(testobj.phone).to.equal("N/A");
		expect(testobj.price).to.equal("N/A");
		expect(testobj.rating).to.equal("N/A");
	});

	
})
