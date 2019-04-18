import React, { Component } from 'react';
import { Col, Card} from 'react-bootstrap';

class RestaurantBox extends Component {
  render() {
    return (
			<Card className="column">
				<div className="card-header">
					<div>{this.props.name}</div>
				</div>
				<div className='container'>
					<div>
						<img className="rounded" src={this.props.image_url}/>
					</div>
					<Col className='description'>
						<a className="card-link" href={this.props.url}>Website</a>
						<div className="card-text">location: {this.props.location.zip_code}</div>
						<div className="card-text">Phone: {this.props.phone}</div>
						<div className="card-text">Price: {this.props.price}</div>
						<div className="card-text">Rating: {this.props.rating}</div>
						<div className="card-text">Distance: {Math.round(this.props.distance)} meters</div>
						<br />
					</Col>		
				</div>			
			</Card>
	);
  }
}
export default RestaurantBox;
