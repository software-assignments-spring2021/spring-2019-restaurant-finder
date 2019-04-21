import React, { Component } from 'react';
import { Col, Card, Button} from 'react-bootstrap';
import axios from 'axios';
//Loads Restautant Data on Search
class RestaurantBox extends Component {

	constructor(props)
	{
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		axios.post('/user/favorites', {
			name:this.props.name,
			url:this.props.url
		}).catch(error => {
			console.log(error);
		});
	}
  render() {
    return (
			<Card>
				<div className="card-header">
					<div className= "h3 class-title">{this.props.name}</div>
				</div>
				<div className='container'>
					<div onClick={this.props.onClicked}>
						<img className="rounded" src={this.props.image_url}/>
					</div>
					<br />
					<Col className='description'>
						<a className="card-link" href={this.props.url}>Website</a>
						<div className="card-text">location: {this.props.location.zip_code}</div>
						<div className="card-text">Phone: {this.props.phone}</div>
						<div className="card-text">Price: {this.props.price}</div>
						<div className="card-text">Rating: {this.props.rating}</div>
						<div className="card-text">Distance: {Math.round(this.props.distance)} meters</div>
						<br />
						{this.props.loggedIn && <Button onClick = {this.handleSubmit}>Favorite</Button>}
					</Col>		
				</div>			
			</Card>
	);
  }
}
export default RestaurantBox;
