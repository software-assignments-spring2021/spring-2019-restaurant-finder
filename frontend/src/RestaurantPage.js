import React, { Component } from 'react';
import { Row, Col, Card, CardImg, Jumbotron,} from 'react-bootstrap';

class RestaurantPage extends Component {
  render() {
    return (
		<>	<Row>
				<Col xs={{ span: 3, offset: 0}}>
					<Card>
						<CardImg className="rounded" src={this.props.imgURL}/>
					</Card>
				</Col>
				<Col className="justify-self-center align-self-center">
					<h2 style={{textAlign: 'center', textJustify: 'center', fontSize: '5em'}}>{this.props.name}</h2>
				</Col>
			</ Row>
			<Card>
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
