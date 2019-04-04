import React, { Component } from 'react';
import { Row, Col, Card, CardImg,} from 'react-bootstrap';

class RestaurantPage extends Component {

  render() {
    return (
		<>	
			<CardImg className="rounded" src={this.props.restaurant.image_url} style={{display: "inline"}}/>
			<h2 style={{display: "inline", fontSize: '5em'}}>{this.props.restaurant.name}</h2>
			<Card style={{fontSize: '1.5em', padding:"10px"}}>
				<a className="card-link" href={this.props.restaurant.url}>Website</a>
				<div className="card-text">location: {this.props.restaurant.location.zip_code}</div>
				<div className="card-text">Phone: {this.props.restaurant.phone}</div>
				<div className="card-text">Price: {this.props.restaurant.price}</div>
				<div className="card-text">Rating: {this.props.restaurant.rating}</div>
			</Card>
		</>
	);
  }
}
export default RestaurantPage;
