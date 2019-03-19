import React, { Component } from 'react';
import { Row, Col, Card} from 'react-bootstrap';

class RestaurantBox extends Component {
  render() {
    return (
			<Card>

				<div className="card-header">
					<div className= "h3 class-title">{this.props.name}</div>
				</div>
				<Row>
					<div className="col-6 col-md-4 col-lg-3">
							<img style={{height: 150 + 'px'}} className="rounded" src={this.props.imgURL}/>
					</div>
					<Col>
						<a className="card-link" href={this.props.webURL}>Website</a>
						<div className="card-text">Hours of Operation: {this.props.hours}</div>
						<div className="card-text">Address: {this.props.address}</div>
						<div className="card-text">Phone: {this.props.phone}</div>
						<div className="card-text">Price: {this.props.price}</div>
						<div className="card-text">Rating: {this.props.rating}</div>
					</Col>
				</Row>
				
			</Card>
	);
  }
}
export default RestaurantBox;
