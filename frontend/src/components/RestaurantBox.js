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

	handleRatings(){
		if (this.props.rating == 0){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_0.png')}/>
		}
		if (this.props.rating == 1){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_1_half.png')}/>
		}
		if (this.props.rating == 1.5){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_1_half.png')}/>
		}
		if (this.props.rating == 2){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_2.png')}/>
		}
		if (this.props.rating == 2.5){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_2_half.png')}/>
		}
		if (this.props.rating == 3){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_3.png')}/>
		}
		if (this.props.rating == 3.5){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_3_half.png')}/>
		}
		if (this.props.rating == 4){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_4.png')}/>
		}
		if (this.props.rating == 4.5){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_4_half.png')}/>
		}
		if (this.props.rating == 5){
			return <img src={require('./yelp_stars/web_and_ios/regular/regular_5.png')}/>
		}
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
						<div className="card-text">Rating: {this.handleRatings()}</div>
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
