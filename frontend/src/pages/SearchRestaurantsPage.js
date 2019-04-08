import React, { Component } from 'react';
import { Button, Form, Jumbotron, Row, Col, Container, NavDropdown} from 'react-bootstrap';
import RestaurantBox from '../components/RestaurantBox';
import Filters from '../components/filters'

//this class is the basic search restaurants page that handles our basic test functionalit
//right now it basically replicates yelp, searching in new york (backend stuff)
class SearchRestaurantsPage extends Component{
    constructor(props){
		super(props);
		this.state = {
			restaurants: this.props.restaurants,
			firstPage: true,
			searchOptions: this.props.searchOptions,
			sortSelected: this.props.sortSelected,
		}

		this.eachRestaurant=this.eachRestaurant.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.sort = this.sort.bind(this);
		this.sortPrice = this.sortPrice.bind(this);
		this.getSearchString = this.getSearchString.bind(this);
		this.fetchRestaurants = this.fetchRestaurants.bind(this);
		this.categoryFilter = this.categoryFilter.bind(this);
		
	}

	getSearchString(){
		console.log(this.state.searchOptions)
		let options = [];
		for ( let key in this.state.searchOptions){
			if (key == 'categories')options.push(key + "=" + encodeURIComponent(this.state.searchOptions[key].alias));
			else options.push(key + "=" + encodeURIComponent(this.state.searchOptions[key]));
		}
		console.log(`api/callYelp?${options.join("&")}`)
		return `api/callYelp?${options.join("&")}`;
	}


  handleChange = (event) => {
	this.state.searchOptions.term = event.target.value;
	this.setState({});
	console.log(this.state.searchOptions.term)
	this.props.app.state.searchOptions.term = event.target.value;
  }

  handleSubmit = (event) =>{
	event.preventDefault();
	console.log(this.getSearchString())
	this.fetchRestaurants(response => {
		this.state.sortSelected = 0;
		this.props.app.state.sortSelected = 0;
		this.setState({ restaurants: response.jsonBody.businesses, firstPage: false});
		this.props.app.state.restaurants = response.jsonBody.businesses
	});

	}

	fetchRestaurants(callback){
		fetch(this.getSearchString())
			.then(response => { return response.json()})
			.then(callback)

	}

	sort(field, i){
		this.state.sortSelected = i;
		this.props.app.state.sortSelected = i;
		this.state.searchOptions["sort_by"] = field;
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
			this.setState({ restaurants, firstPage: false});
			this.props.app.state.restaurants = restaurants;
		});
	}

	sortPrice(){
		this.state.sortSelected = 4;
		this.props.app.state.sortSelected = 4;
		let restaurants = this.state.restaurants;
		console.log(restaurants);
		function compare (a,b) {
			if (a.price && b.price)
				return a.price.length-b.price.length;
			else
				return 1;
		}
		restaurants.sort(compare);

		this.setState({ restaurants, firstPage: false});
		this.props.app.state.restaurants = restaurants;		
	}

	categoryFilter(){
		console.log(this.state.searchOptions)
		this.fetchRestaurants(response => {
			let restaurants = response.jsonBody.businesses;
			console.log(restaurants)
			let field = this.state.searchOptions["sort_by"]
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

			this.setState({ restaurants, firstPage: false});
			this.props.app.state.restaurants = restaurants;
		});
	}

	eachRestaurant(restaurant,i){
		return (
			<div onClick={this.props.app.loadRestaurant.bind(this, this.state.restaurants[i].id)}>
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
					distance = {restaurant.distance}>
				</RestaurantBox>
			</div>
		)
	}
	
  render() {
    return (
		<>
		<Jumbotron>
			<h1 className="h1">
				Restaurant Finder
			</h1>
		</Jumbotron>
		<Form className="searchBar">
			<Row className="justify-content-xs-center">
				<Col className='searchBarText'>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="term">Search Bar:   </label>
						<input
							id="term"
							type="text"
							value={this.state.searchOptions.term}
							onChange={this.handleChange}
						/>
						<button type="submit" >Submit</button>
					</form>
				</Col>
				<Col>
					<NavDropdown title="Sort By" id="basic-nav-dropdown">
						<NavDropdown.Item href="" onClick={this.sort.bind(this, "best_match", 0)} style={this.state.sortSelected == 0 ? {color: "red"} : {}}>Best Match</NavDropdown.Item>
						<NavDropdown.Item href="" onClick={this.sort.bind(this, "rating", 1)} style={this.state.sortSelected == 1 ? {color: "red"} : {}}>Rating</NavDropdown.Item>
						<NavDropdown.Item href="" onClick={this.sort.bind(this, "review_count", 2)} style={this.state.sortSelected == 2 ? {color: "red"} : {}}>Review Count</NavDropdown.Item>
						<NavDropdown.Item href="" onClick={this.sort.bind(this, "distance", 3)} style={this.state.sortSelected == 3 ? {color: "red"} : {}}>Distance</NavDropdown.Item>
						<NavDropdown.Item href="" onClick={this.sortPrice.bind(this)} style={this.state.sortSelected == 4 ? {color: "red"} : {}}>Price</NavDropdown.Item>
					</NavDropdown>
				</Col>
				<Col>
					<Filters searchOptions={this.state.searchOptions} app={this}></Filters>
				</Col>
			</Row>
		</Form>
		<Container>
		{this.state.restaurants.map(this.eachRestaurant)}
		{(this.state.restaurants.length == 0 && !this.state.firstPage) ? <p style={{fontSize: "5em"}}>No Restaurants Found</p>:""}
		{(this.state.restaurants.length == 0 && this.state.firstPage) ? <p style={{fontSize: "5em"}}>Start your Search!</p>:""}
		</Container>
		</>
		);
  }
}
export default SearchRestaurantsPage;