import React, { Component } from 'react';
import { Row, Col, Card} from 'react-bootstrap';

class RestaurantBox extends Component {
  render() {
    return (
			<Card>
				<div className="card-header">
					<div className= "h3 class-title">{this.props.name}</div>
				</div>
				<div className='container'>
					<div>
						<img className="rounded" src={this.props.imgURL}/>
					</div>
					<br />
					<Col className='description'>
						<a className="card-link" href={this.props.webURL}>Website</a>
						<div className="card-text">Hours of Operation: {this.props.hours}</div>
						<div className="card-text">Address: {this.props.address}</div>
						<div className="card-text">Phone: {this.props.phone}</div>
						<div className="card-text">Price: {this.props.price}</div>
						<div className="card-text">Rating: {this.props.rating}</div>
						<br />
					</Col>		
				</div>			
			</Card>
	);
  }
}
export default RestaurantBox;
