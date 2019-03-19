import React, { Component } from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Jumbotron, Row, Col,Container, FormCheck } from 'react-bootstrap';
import RestaurantBox from './RestaurantBox';
import RestaurantPage from './RestaurantPage';

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
			<div onClick={this.changeView.bind(this, i)}>
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
			</div>
		)
	}

	displayRestaurant(i){
		console.log(this.state.restaurants)
		console.log(i)
		console.log(this.state.restaurants[i])
		return (
			<RestaurantPage
			key={i}
			index={i}
			name = {this.state.restaurants[i].name}
			imgURL = {this.state.restaurants[i].imgURL}
			webURL = {this.state.restaurants[i].webURL}
			hours = {this.state.restaurants[i].hours}
			address = {this.state.restaurants[i].address}
			phone = {this.state.restaurants[i].phone}
			price = {this.state.restaurants[i].price}
			rating = {this.state.restaurants[i].rating}
			>
			</RestaurantPage>
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
			<Col>
				<Button variant="outline-success" className="searchButton">Search</Button>
			</Col>
			<Col>
				<NavDropdown title="Filters" id="basic-nav-dropdown">
					<Form>
						<FormCheck label="Filter 1" id="Filter1" className="ml-2"/>
						<FormCheck label="Filter 2" id="Filter2" className="ml-2"/>
						<FormCheck label="Filter 3" id="Filter3" className="ml-2"/>
						<FormCheck label="Filter 4" id="Filter4" className="ml-2"/>
						<FormCheck label="Filter 5" id="Filter5" className="ml-2"/>
						<FormCheck label="Filter 6" id="Filter6" className="ml-2"/>
					</Form>
	      		</NavDropdown>
			</Col>
		</Row>
	</Form>
	<Container>
		{this.state.isSearchDisplayed? this.state.restaurants.map(this.eachRestaurant):this.displayRestaurant(this.state.selectedRestaurant)}
	</Container>
	</>
    );
  }
}

export default App;
