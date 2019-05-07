import React, { Component } from 'react';
import { Button, Form, Jumbotron, Row, Col, Container, NavDropdown} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"
import RestaurantBox from '../components/RestaurantBox';
import Filter from '../components/filters'
import Auth from "../auth/Auth";
import {PropagateLoader} from 'react-spinners';
import MapBox from '../components/MapBox';
//this class is the basic search restaurants page that handles our basic test functionalit
//right now it basically replicates yelp, searching in new york (backend stuff)
class SearchRestaurantsPage extends Component{
    constructor(props){
		super(props);
		searchObj.SearchRestaurantsPage = this
		//restaurants keep and load the actual results
		this.state = {
			//states weather start searching should appear or not 
			loggedIn: false,
			loading: false,
			location: {
				lat: 0,
				long: 0
			},
		}
		this.Auth = new Auth();
		this.eachRestaurant=this.eachRestaurant.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.sort = this.sort.bind(this);
		this.sortPrice = this.sortPrice.bind(this);
		this.getSearchString = this.getSearchString.bind(this);
		this.fetchRestaurants = this.fetchRestaurants.bind(this);
		this.categoryFilter = this.categoryFilter.bind(this);
		this.checkLogin = this.checkLogin.bind(this);
		this.getLocation = this.getLocation.bind(this);
		this.printLocation = this.printLocation.bind(this);
		this.displayMap = this.displayMap.bind(this);
	}

	displayMap() {
		searchObj.showMap= true;
		this.setState({});
	}
	printLocation() {
		console.log(`Latitude: ${searchObj.searchOptions.latitude}, Longitude: ${searchObj.searchOptions.longitude}`)
	}
	
	getLocation() {
		if (!navigator.geolocation) {
			return;
		}

		//
		// searchObj.searchOptions.latitude = 40.723412;
		// searchObj.searchOptions.longitude = -73.980813;
		// if (searchObj.restaurants.length) this.fetchRestaurants(response => {
		// 		searchObj.restaurants = response.jsonBody.businesses
		// 		this.setState({loading: false});
		// });

		// this.displayMap();
		//

		navigator.geolocation.getCurrentPosition((position) => {
			searchObj.searchOptions.latitude = position.coords.latitude;
			searchObj.searchOptions.longitude = position.coords.longitude;
			if (searchObj.restaurants.length) this.fetchRestaurants(response => {
				searchObj.restaurants = response.jsonBody.businesses
				this.setState({loading: false});
			});
			this.displayMap();

			},(err)=>{alert("Cannot Get Location")});
	};
	componentDidMount()
	{
		this.checkLogin();
		
	}
	//This function will take the options from search options and sort selected
	// and covert it to the path string that we must fetch to use the Yelp API
	getSearchString(){
		let options = []
		for ( let key in searchObj.searchOptions){
			if (key == 'categories') options.push(key + "=" + encodeURIComponent(searchObj.searchOptions[key].alias));
			else options.push(key + "=" + encodeURIComponent(searchObj.searchOptions[key]));
		}
		console.log(`api/callYelp?${options.join("&")}`)
		return `api/callYelp?${options.join("&")}`;
	}


	checkLogin()
	{
		this.Auth.isLoggedIn().then((response) => {
			this.setState({
				loggedIn: response
			});
		});
	}
  handleChange = (event) => {
	  //Updates the search options
	searchObj.searchOptions.term = event.target.value;
	--searchObj.searchNum;
	this.setState({});
	console.log(searchObj.searchOptions.term)
  }

  handleSubmit = (event) =>{
		event.preventDefault();
		this.setState({loading: true});
		console.log(this.getSearchString())
		searchObj.sortSelected = 0;
		delete searchObj.searchOptions["sort_by"];
		searchObj.searchOptions["categories"] = {alias: "restaurants"};
		// fetches the restaurants while reseting seatch options, then updates the view
		this.fetchRestaurants(response => {
			console.log(response)
			searchObj.restaurants = response.jsonBody.businesses
			this.setState({loading: false});
		});
		this.checkLogin();
	}

	//gets the search string from the method and sends it to the backed to get the results
	// then the callbackfunction is passed in to process and render the data, for different sorts
	fetchRestaurants(callback){
		fetch(this.getSearchString())
			.then(response => { return response.json()})
			.then(callback)

	}

	// This calls the previous query to the yelp api but it passes in a new key value for how it should sort
	// then it passes in a callback where the response results are sorted further (becuase yelp barely sorts them and has other considerations)
	// Then restaurant data is updated and so is the view
	sort(field, i){
		searchObj.sortSelected = i;
		searchObj.sortSelected = i;
		searchObj.searchOptions["sort_by"] = field;
		this.fetchRestaurants(response => {
			let restaurants = response.jsonBody.businesses;
			if( field != "best_match"){

				let compare;

				if (field == "distance"){
					compare = function(a,b){
						if (a[field] && b[field])
							return a[field]-b[field];
						else
							return 1;
					}
				} else {
					compare = function(a,b){
						if (a[field] && b[field])
							return b[field]-a[field];
						else
							return 1;
					}
				}

				restaurants.sort(compare);
			}
			console.log(restaurants);
			searchObj.restaurants = restaurants;
			this.setState({});
		});
	}


	//This does not send a new query because there in no API sorting for price
	//So therefore it just sorts the current restaurants by price and updates the view
	sortPrice(){
		searchObj.sortSelected = 4;
		let restaurants = searchObj.restaurants;
		console.log(restaurants);
		function compare (a,b) {
			if (a.price && b.price)
				return a.price.length-b.price.length;
			else
				return 1;
		}
		restaurants.sort(compare);

		searchObj.restaurants = restaurants;
		this.setState({});	
	}

	// This sends a new fetch restaurants request with the search options on category
	// it then sorts it based on perhaps ever sort except price...
	categoryFilter(){
		console.log(searchObj.searchOptions)
		this.fetchRestaurants(response => {
			let restaurants = response.jsonBody.businesses;
			console.log(restaurants)
			let field = searchObj.searchOptions["sort_by"]
			if( field != "best_match"){

				let compare;

				if (field == "distance"){
					compare = function(a,b){
						if (a[field] && b[field])
							return a[field]-b[field];
						else
							return 1;
					}
				} else {
					compare = function(a,b){
						if (a[field] && b[field])
							return b[field]-a[field];
						else
							return 1;
					}
				}

				restaurants.sort(compare);
			}
			searchObj.restaurants = restaurants;
			this.setState({});
		});
	}

	/// this method is for loading the boxes for each restaurant
	// each box is surrounded by a div that once clicked, loads the restaurant page from the app component
	eachRestaurant(restaurant,i){
		return (
			<div>
				<RestaurantBox
					key={i}
					index={i}
					name = {restaurant.name}
					image_url = {restaurant.image_url}
					url = {restaurant.url}
					location = {restaurant.location}
					phone = {restaurant.phone}
					price = {restaurant.price}
					rating = {restaurant.rating}
					distance = {restaurant.distance}
					loggedIn = {this.state.loggedIn}
					moreInfo={searchObj.app.loadRestaurant.bind(this, searchObj.restaurants[i].id)}
					isClosed={restaurant["is_closed"]}
					>
				</RestaurantBox>
			</div>
		)
	}
	

  render() {

	++searchObj.searchNum;
    return (
		<Container>
		<div className="searchBackground">
		<Form className="searchBox" onSubmit={this.handleSubmit}>
			<Row className="searchBar" >
				<label htmlFor="term"></label>
					<input 
						type="text" 
						className="searchInput searchComponent"
						placeholder="Search" 
						value={searchObj.searchOptions.term}
						onChange={this.handleChange}/>
				<Button	className="btn btn-light searchComponent searchButton" type="submit" >Submit</Button>
			</Row>

			<Row>
				<NavDropdown title="Sort By" className="filterDropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="" onClick={this.sort.bind(this, "best_match", 0)} style={searchObj.sortSelected == 0 ? {color: "red"} : {}}>Best Match</NavDropdown.Item>
					<NavDropdown.Item href="" onClick={this.sort.bind(this, "rating", 1)} style={searchObj.sortSelected == 1 ? {color: "red"} : {}}>Rating</NavDropdown.Item>
					<NavDropdown.Item href="" onClick={this.sort.bind(this, "review_count", 2)} style={searchObj.sortSelected == 2 ? {color: "red"} : {}}>Review Count</NavDropdown.Item>
					<NavDropdown.Item href="" onClick={this.sort.bind(this, "distance", 3)} style={searchObj.sortSelected == 3 ? {color: "red"} : {}}>Distance</NavDropdown.Item>
					<NavDropdown.Item href="" onClick={this.sortPrice.bind(this)} style={searchObj.sortSelected == 4 ? {color: "red"} : {}}>Price</NavDropdown.Item>
				</NavDropdown>
				<Filter></Filter>
			</Row>
		</Form>
		<Container style={{paddingLeft:'50%', paddingTop:'25px', paddingBottom:'25px'}}>
				<PropagateLoader loading={this.state.loading} size={30}/>
			</Container>
		<Container style={{padding: '20px'}}>
			<Container>
				<Button onClick = {this.getLocation}>Get Location </Button>
				{searchObj.showMap && (<MapBox key={searchObj.searchNum}/>)}
			</Container>
		</Container>
		</div>

		<Container className="initialpage">
			{searchObj.restaurants.map(this.eachRestaurant)}
		</Container>
	</Container>);
  }
}
export default SearchRestaurantsPage;