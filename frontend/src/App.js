import React, { Component } from 'react';
import GlobalNavBar from "./components/GlobalNavBar";
import SearchRestaurantsPage from './pages/SearchRestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';

// our main "app" 
//this should have all routes accessible
class App extends Component {
	/* 
		As of now, render just returns our "test" page which is SearchRestaurantsPage. 
		We can also put global items that will be on every page such as a NavBar.
	*/

	constructor(props){
		super(props);
		this.state = { page: 'search', searchOptions: {}, restaurants: [], searchTerm: ""};

		this.loadRestaurant = this.loadRestaurant.bind(this);
		this.loadSearch = this.loadSearch.bind(this);
	}

	loadRestaurant(restaurantid) {
		fetch(`api/callYelp?id=${encodeURIComponent(restaurantid)}`)
			.then(response => { 
				return response.json()})
			.then(response => {
				console.log(response.jsonBody);
				this.setState({page: "restaurant", restaurant: response.jsonBody});
			})
	}

	loadSearch(){
		console.log(this.state);
		this.setState({page: 'search'});

	}


  	render() {

		if (this.state.page === "search"){
			return (
				<>
				<GlobalNavBar app ={this}/>
				<SearchRestaurantsPage app ={this} searchOptions={this.state.searchOptions} restaurants={this.state.restaurants} searchTerm={this.state.searchTerm}/>
				</>)
			} else if (this.state.page === "restaurant"){
				return (
					<>
					<GlobalNavBar app ={this}/>
					<RestaurantPage app ={this} restaurant={this.state.restaurant}/>
					</>)
			}
	}

}

export default App;
