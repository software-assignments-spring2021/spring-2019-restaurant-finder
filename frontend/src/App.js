import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Jumbotron, Row, Col,Container } from 'react-bootstrap';
import RestaurantBox from './RestaurantBox';


class App extends Component {
  
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
			name = {restaurant.name}
			imgURL = {restaurant.imgURL}
			webURL = {restaurant.webURL}
			hours = {restaurant.hours}
			address = {restaurant.address}
			phone = {restaurant.phone}
			price = {restaurant.price}
			rating = {restaurant.rating}
							>
				
			</RestaurantBox>
		)
	}
	
  render() {
    return (
	<>
	<Navbar bg="light" expand="lg">
	  <Navbar.Brand href="#home">Restaurant Finder</Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="mr-auto">
	      <Nav.Link href="#home">Home</Nav.Link>
	      <Nav.Link href="#link">Link</Nav.Link>
	      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
	        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
	        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
	        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
	        <NavDropdown.Divider />
	        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
	      </NavDropdown>
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>
	<Jumbotron>
		<h1>
			Restaurant Finder
		</h1>
	</Jumbotron>
	<Form className="searchBar">
		<Row className="justify-content-xs-center">
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
			<Col>
				<Button variant="outline-success" className="searchButton">Search</Button>
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

export default App;
