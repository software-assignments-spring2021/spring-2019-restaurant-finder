import React, { Component } from 'react';
import { Col, Card, Button, Container} from 'react-bootstrap';
import axios from 'axios';
//Loads Restautant Data on Search
import Auth from '../auth/Auth'
class RestaurantBox extends Component {

	constructor(props)
	{
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.Auth = new Auth();
	}
	
	handleSubmit() {
		const newFav = {name: this.props.name, url: this.props.url};
		this.Auth.newFavorite(newFav);
	}
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
						<a href="http://yelp.com">
							<img src={require('./Yelp_trademark_RGB_outline.png')} width="80" height="50" style={{position: "absolute", bottom: 0, right: 0}}/>
						</a>
						<br />
					</Col>		
				</div>
				<Container>
				{this.props.loggedIn && <Button onClick = {this.handleSubmit}>Favorite</Button>}
				<Button onClick={this.props.moreInfo}>More Info</Button>
				</Container>

			</Card>
	);
  }
}
export default RestaurantBox;
