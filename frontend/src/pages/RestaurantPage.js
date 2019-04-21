import React, { Component } from 'react';
import { Row, Col, Card, CardImg,} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"

class RestaurantPage extends Component {

  render() {
    return (
		<>	
			<CardImg className="rounded" src={searchObj.restaurant.image_url} style={{display: "inline"}}/>
			<h2 style={{display: "inline", fontSize: '5em'}}>{searchObj.restaurant.name}</h2>
			<Card style={{fontSize: '1.5em', padding:"10px"}}>
				<a className="card-link" href={searchObj.restaurant.url}>Website</a>
				<div className="card-text">location: {searchObj.restaurant.location.zip_code}</div>
				<div className="card-text">Phone: {searchObj.restaurant.phone}</div>
				<div className="card-text">Price: {searchObj.restaurant.price}</div>
				<div className="card-text">Rating: {searchObj.restaurant.rating}</div>
			</Card>
		</>
	);
  }
}
export default RestaurantPage;
