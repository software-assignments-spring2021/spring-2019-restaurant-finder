import React, { Component } from 'react';
import { Button, Form, Jumbotron, Row, Col,Container} from 'react-bootstrap';
import RestaurantBox from '../components/RestaurantBox';
import RestaurantPage from './RestaurantPage';

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
    fetch(`api/callYelp?searchTerm=${encodeURIComponent(this.state.searchTerm)}`)
			.then(response => { return response.json()})
			.then(response => {
				this.setState({ restaurants: response.jsonBody.businesses, firstPage: false});
				this.props.app.state.restaurants = response.jsonBody.businesses
				console.log(this.props.app.state);
				console.log(this.state);
			})
			

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
					changeView = {this.changeView}>
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