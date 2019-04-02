import React, { Component } from 'react';
import { Row, Col, Card, CardImg,} from 'react-bootstrap';

class RestaurantPage extends Component {
  render() {
    return (
		<>	
			<CardImg className="rounded" src={this.props.imgURL} style={{display: "inline"}}/>
			<h2 style={{display: "inline", fontSize: '5em'}}>{this.props.name}</h2>
			<Card style={{fontSize: '1.5em', padding:"10px"}}>
				<a className="card-link" href={this.props.webURL}>Website</a>
				<div className="card-text">Hours of Operation: {this.props.hours}</div>
				<div className="card-text">Address: {this.props.address}</div>
				<div className="card-text">Phone: {this.props.phone}</div>
				<div className="card-text">Price: {this.props.price}</div>
				<div className="card-text">Rating: {this.props.rating}</div>
			</Card>
		</>
	);
  }
}
export default RestaurantPage;
