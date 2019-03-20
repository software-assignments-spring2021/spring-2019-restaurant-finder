import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Jumbotron, Row, Col,Container, FormCheck } from 'react-bootstrap';
import RestaurantBox from '../components/RestaurantBox';

//this class is the basic search restaurants page that handles our basic test functionalit
//right now it basically replicates yelp, searching in new york (backend stuff)
class SearchRestaurantsPage extends Component{
    constructor(props){
		super(props);
		this.state = {
			searchTerm : "",
			restaurants:[	],
			isSearchDisplayed: true,
			selectedRestaurant: 0
		}
		this.eachRestaurant=this.eachRestaurant.bind(this);
		this.convertResponseToRestaurants=this.convertResponseToRestaurants.bind(this);
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    fetch(`callYelp?searchTerm=${encodeURIComponent(this.state.searchTerm)}`)
			.then(response => { return response.json()})
			.then(response => {
				this.convertResponseToRestaurants(response);
			})
			.then(state => this.setState(state));

	}
	convertResponseToRestaurants = (response) => {
		this.state.restaurants=[];
		this.setState(this.state);
		for (let i = 0; i < 20; i++)
		{
			const rest = response.jsonBody.businesses[i];
			let restaurant = {
				name: rest.name,
				imgURL: rest.image_url,
				webURL: rest.url,
				hours:"idk man",
				address: rest.location.zip_code,
				phone: rest.phone,
				price: rest.price,
				rating: rest.rating
			} 
			this.state.restaurants.push(restaurant);
			this.setState(this.state);
		}
	}
	eachRestaurant = (restaurant,i) => {
		return (
				<RestaurantBox
					key={i}
					index={i}
					name = {restaurant.name}
					imgURL = {restaurant.imgURL}
					webURL = {restaurant.webURL}
					hours = {restaurant.hours}
					address = {restaurant.address}
					phone = {restaurant.phone}
					price = {restaurant.price}
					rating = {restaurant.rating}
					changeView = {this.changeView}>
				</RestaurantBox>
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
				<Col className={this.state.isSearchDisplayed?"d-none":""}>
					<Button variant="warning" onClick={this.back}>Back</Button>
				</Col>
				<Col xs={{ span: 7, offset: 0}} lg={{ span: 4, offset: 0}}>
					{/**
					* <FormControl type="text" placeholder="Search" />
					*/}
					<form onSubmit={this.handleSubmit}>
							<label htmlFor="searchTerm">Enter Yelp Search Term: </label>
							<input
								id="searchTerm"
								type="text"
								value={this.state.searchTerm}
								onChange={this.handleChange}
							/>
							<button type="submit">Submit</button>
					</form>
				</Col>
			</Row>
		</Form>
		<Container>
			{this.state.restaurants.map(this.eachRestaurant)}
		</Container>
		</>
		);
  }
}
export default SearchRestaurantsPage;