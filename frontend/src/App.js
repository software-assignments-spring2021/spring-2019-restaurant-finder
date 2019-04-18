import React, { Component } from 'react';
import GlobalNavBar from "./components/GlobalNavBar";
import SearchRestaurantsPage from './pages/SearchRestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';
import axios from "axios";

// our main "app" 
//this should have all routes accessible
class App extends Component {
	/* 
		As of now, render just returns our "test" page which is SearchRestaurantsPage. 
		We can also put global items that will be on every page such as a NavBar.
	*/

	constructor(props){
		super(props);
		this.state = { page: 'search',
		 searchOptions: { term:"", categories: {alias: "restaurants"}},
		 restaurants: [], 
		 searchTerm: "",
		 sortSelected: 0,

		 loggedIn: false,
		 username: null

		};

		this.loadRestaurant = this.loadRestaurant.bind(this);
		this.loadSearch = this.loadSearch.bind(this);
		this.getUser = this.getUser.bind(this);
		this.updateUser = this.updateUser.bind(this);
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
	componentDidMount() {
		this.getUser()
	  }
	loadSearch(){
		console.log(this.state);
		this.setState({page: 'search'});
	}

	updateUser (userObject) {
		this.setState(userObject)
	  }

	getUser() {
		axios.get('/user/').then(response => {
		  console.log('Get user response: ')
		  console.log(response.data)
		  if (response.data.user) {
			console.log('Get User: There is a user saved in the server session: ')
	
			this.setState({
			  loggedIn: true,
			  username: response.data.user.username
			})
		  } else {
			console.log('Get user: no user');
			this.setState({
			  loggedIn: false,
			  username: null
			})
		  }
		})
	}

  	render() {

		if (this.state.page === "search"){
			return (
				<>
				<GlobalNavBar app ={this} loggedIn = {this.state.loggedIn} username={this.state.username} />
				<SearchRestaurantsPage app ={this} searchOptions={this.state.searchOptions} restaurants={this.state.restaurants} searchTerm={this.state.searchTerm} sortSelected={this.state.sortSelected}/>
				</>)
		} else if (this.state.page === "restaurant"){
			return (
				<>
				<GlobalNavBar app = {this} loggedIn = {this.state.loggedIn} username={this.state.username}/>
				<RestaurantPage app = {this} restaurant={this.state.restaurant}/>
				</>)
		}
	}

}

export default App;
