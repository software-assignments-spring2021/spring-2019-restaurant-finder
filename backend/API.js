const yelpClient = require("./Yelp/YelpGet");

module.exports ={

	fetchYelpData()
	{
		
	},

	//calls the YELP API to get the right restaurants the adds them to the list
	queryToList: function (searchQuery, restaurants){
		console.log(searchQuery);
		if (searchQuery === undefined)
		{
			return;
		}
		else
		{
			client.search({
				term:'coffee',
				location: 'san francisco, ca'
			  }).then(response => {
				console.log(response.jsonBody.businesses[0].name);
			  }).catch(e => {
				console.log(e);
			  });
		}
		///NEED TO IMPLEMENT with API
		//The following is a test of functionality
		if(searchQuery==='test'){
			for (let i=0; i<5; i++){
				restaurants.push(this.restaurantObj("name "+i, "http://www.jocay.com/web/images/yootheme/widgetkit/gallery/image"+(i+1)+".jpg", "webURL "+i, "hours "+i, "address "+i, "phone "+i, "price "+i, "rating "+i));
			}
		}
	},


	///adds restaurants to the object that will be rendered in the template
	restaurantObj: function (name="N/A", imgURL="", webURL="N/A", hours="N/A", address="N/A", phone="N/A", price="N/A", rating="N/A"){
		return rest = {
			name,
			imgURL,
			webURL,
			hours,
			address,
			phone,
			price,
			rating
		}
	}





}