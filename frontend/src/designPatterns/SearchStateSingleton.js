let instance;

// this module acts as a class and a getInstance method
// This conditional makes sure only one instance can be created from this function
if (instance){
	console.log("instance already created and is:")
	console.log(instance);


}else{

	class singleton{ 

		 constructor(app) { 
			this.searchOptions = { term:"", categories: {alias: "restaurants"}};
			this.restaurants = [] ;
			this.searchTerm = "";
			this.sortSelected = 0;
			this.app = app
			this.restaurant = undefined;
		 }
	
	
	}
	//creates instance
	let obj = new singleton();

	// This makes sure only no instances can be created from this instances constructor proporty
	obj.constructor = undefined;

	instance = obj;

	console.log("instance not already created")
	console.log(instance);

}

export default instance
