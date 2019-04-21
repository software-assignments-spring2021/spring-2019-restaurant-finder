import React, { Component } from 'react';
import searchObj from "./designPatterns/SearchStateSingleton"
import GlobalNavBar from "./components/GlobalNavBar";
import SearchRestaurantsPage, {f} from './pages/SearchRestaurantsPage';
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

		searchObj.app = this;

		this.state = { 
			page: 'search',
			loggedIn: false,
			username: null
		};

		this.loadRestaurant = this.loadRestaurant.bind(this);
		this.loadSearch = this.loadSearch.bind(this);
		this.getUser = this.getUser.bind(this);
		this.updateUser = this.updateUser.bind(this);
	}


	//calls the yelp API to return extended data on a single restaurant by ID
	/// when the data is returned it changes the page to restaurant 
	// which loads the restaurant page during render instead of search page
	loadRestaurant(restaurantid) {
		console.log(restaurantid);
		fetch(`api/callYelp?id=${encodeURIComponent(restaurantid)}`)
			.then(response => { 
				return response.json()})
			.then(response => {
				searchObj.restaurant = response.jsonBody
				this.setState({page: "restaurant"});
			})
	}
	componentDidMount() {
		this.getUser()
	  }

	//changes the route switch search so that the searchpage is loaded
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

		//this.state.page acts as a router for the different pages
		// each get app passed to it so it can load the other page via the route
		if (this.state.page === "search"){
			//Search options are saved here and passed into SearchRestaurantsPage
			//So that the data can persist after going to restaurant page
			return (
				<>
					<GlobalNavBar loggedIn = {this.state.loggedIn} username={this.state.username} />
					<SearchRestaurantsPage loggedIn = {this.state.loggedIn}/>
				</>)
			} else if (this.state.page === "restaurant"){
				return (
					<>
						<GlobalNavBar loggedIn = {this.state.loggedIn} username={this.state.username}/>
						<RestaurantPage loggedIn = {this.state.loggedIn}/>
					</>)
			}
	}

}

export default App;
