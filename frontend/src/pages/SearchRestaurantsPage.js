import React, { Component } from 'react';
import { Button, Form, Jumbotron, Row, Col,Container} from 'react-bootstrap';
import RestaurantBox from '../components/RestaurantBox';
import RestaurantPage from '../components/RestaurantPage';
import categories from '../Categories';

//this class is the basic search restaurants page that handles our basic test functionalit
//right now it basically replicates yelp, searching in new york (backend stuff)
class SearchRestaurantsPage extends Component{
    constructor(props){
		super(props);
		this.state = {
			searchTerm : "",
			restaurants:[	],
			isSearchDisplayed: true,
			selectedRestaurant: 0,
			firstPage: true
		}
		this.eachRestaurant=this.eachRestaurant.bind(this);
		this.convertResponseToRestaurants=this.convertResponseToRestaurants.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.displayRestaurant=this.displayRestaurant.bind(this);
		this.changeView= this.changeView.bind(this);
		this.back=this.back.bind(this);
	}

	changeView(i){
		this.setState({
			...this.state,
			isSearchDisplayed: false,
			selectedRestaurant: i
		});
	}

	back(){
		this.setState({
			...this.state,
			isSearchDisplayed: true,
		});
	}

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = (event) =>{
	event.preventDefault();
    fetch(`api/callYelp?searchTerm=${encodeURIComponent(this.state.searchTerm)}`)
			.then(response => { return response.json()})
			.then(response => {
				this.convertResponseToRestaurants(response);
			})
			.then(state => this.setState(state));

}
	convertResponseToRestaurants = (response) => {
		let restaurants = [];
		let maxResult = 20;
		for (let i = 0; (i < maxResult && i < response.jsonBody.businesses.length ); i++)
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
            restaurants.push(restaurant);
		}
		this.setState({...this.state, restaurants, firstPage: false});
	}
	eachRestaurant(restaurant,i){
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
				<Col className='searchBarText'>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="searchTerm">Search Bar:   </label>
						<input
							id="searchTerm"
							type="text"
							value={this.state.searchTerm}
							onChange={this.handleChange}
						/>
						<button type="submit" onClick={this.back} >Submit</button>
					</form>
				</Col>
			</Row>
		</Form>
		<Container>
		{this.state.isSearchDisplayed? this.state.restaurants.map(this.eachRestaurant):this.displayRestaurant(this.state.selectedRestaurant)}
		{(this.state.restaurants.length == 0 && !this.state.firstPage) ? <p style={{fontSize: "5em"}}>No Restaurants Found</p>:""}
		{this.state.firstPage? <p style={{fontSize: "5em"}}>Start your Search!</p>:""}
		</Container>
		</>
		);
  }
}
export default SearchRestaurantsPage;