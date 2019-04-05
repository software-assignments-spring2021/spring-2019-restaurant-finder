import React, { Component } from 'react';
import { Button, Form, Jumbotron, Row, Col, Container, NavDropdown} from 'react-bootstrap';
import RestaurantBox from '../components/RestaurantBox';

//this class is the basic search restaurants page that handles our basic test functionalit
//right now it basically replicates yelp, searching in new york (backend stuff)
class SearchRestaurantsPage extends Component{
    constructor(props){
		super(props);
		this.state = {
			restaurants: this.props.restaurants,
			firstPage: true,
			searchOptions: this.props.searchOptions,
			searchTerm: ""
		}

		this.eachRestaurant=this.eachRestaurant.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		
	}


  handleChange = (event) => {
	this.setState({searchTerm: event.target.value });
  }

  handleSubmit = (event) =>{
	event.preventDefault();
	console.log(`api/callYelp?term=${encodeURIComponent(this.state.searchTerm)}`)
    fetch(`api/callYelp?term=${encodeURIComponent(this.state.searchTerm)}`)
			.then(response => { return response.json()})
			.then(response => {
				console.log(response);
				this.setState({ restaurants: response.jsonBody.businesses, firstPage: false});
				this.props.app.state.restaurants = response.jsonBody.businesses
			})
			

	}

	sort(field){
		console.log(`api/callYelp?term=${encodeURIComponent(this.state.searchTerm)}&sort_by=${field}`)
		fetch(`api/callYelp?term=${encodeURIComponent(this.state.searchTerm)}&sort_by=${field}`)
			.then(response => { return response.json()})
			.then(response => {
				console.log(response);
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

				this.setState({ restaurants, firstPage: false});
				this.props.app.state.restaurants = restaurants;
			})
		

	}

	sortPrice(){
		
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
						<label htmlFor="searchTerm">Search Bar:   </label>
						<input
							id="searchTerm"
							type="text"
							value={this.state.searchTerm}
							onChange={this.handleChange}
						/>
						<button type="submit" >Submit</button>
					</form>
				</Col>
				<Col>
					<NavDropdown title="Sort By" id="basic-nav-dropdown">
						<NavDropdown.Item href="" onClick={this.sort.bind(this, "best_match")}>Best Match</NavDropdown.Item>
						<NavDropdown.Item href="" onClick={this.sort.bind(this, "rating")}>Rating</NavDropdown.Item>
						<NavDropdown.Item href="" onClick={this.sort.bind(this, "review_count")}>Review Count</NavDropdown.Item>
						<NavDropdown.Item href="" onClick={this.sort.bind(this, "distance")}>Distance</NavDropdown.Item>
						<NavDropdown.Item href="" onClick={this.sortPrice.bind(this)}>Price</NavDropdown.Item>
					</NavDropdown>
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