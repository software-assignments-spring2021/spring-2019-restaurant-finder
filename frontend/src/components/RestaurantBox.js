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
				<div className="card-header" style={this.props.isClosed?{backgroundColor: "IndianRed", color:"white"}:{backgroundColor: "SeaGreen", color:"white"}}>
					<div>{this.props.name}</div>
					<div>
					  {this.props.loggedIn && 
					  <Button className="box-button" onClick={this.handleSubmit}> 
					  <span className="fa fa-star checked"></span>
					  </Button>}
					</div>
				</div>
				<div className='container box-container' onClick={this.props.moreInfo}>
					<div>
						<img className="rounded" src={this.props.image_url}/>
					</div>
<<<<<<< HEAD
					<Col className='description'>	
						<div className="card-text">Price: {this.props.price}</div>
						<div className="card-text">Rating: {this.handleRatings()}</div>
						<div className="card-text">Distance: {Math.round(this.props.distance)} meters</div>
						<div className="card-text">Phone: {this.props.phone}</div>
						<div className="card-text">Address: {this.props.location.display_address}</div>
					
=======
					<Col className='description'>
					<div style ={{fontSize:"1.5em"}}>{this.props.isClosed?"Closed":"Open"}</div>
						<a className="card-link" href={this.props.url}>Website</a>
						<div className="card-text">{this.props.location.address1}</div>
						<div className="card-text">{this.props.phone}</div>
						<div className="card-text" style = {{color:"green"}} >{this.props.price}</div>
						<div className="card-text">{this.handleRatings()}</div>
						<div className="card-text">{Math.round(this.props.distance*3.28084)} Feet Away</div>
>>>>>>> b7625c60225fbef71a1c38737e3d0f4e3da9e2f8
						<a href="http://yelp.com"> 
						<img className="yelp" src={require('./Yelp_trademark_RGB_outline.png')}/>
						</a>
					</Col>		
				</div>
<<<<<<< HEAD
=======
				<Container>
				{this.props.loggedIn && <Button onClick = {this.handleSubmit} style={{margin: "5px"}}>Favorite</Button>}
				<Button onClick={this.props.moreInfo} style={{margin: "5px"}}>More Info</Button>
				</Container>

>>>>>>> b7625c60225fbef71a1c38737e3d0f4e3da9e2f8
			</Card>
	);
  }
}
export default RestaurantBox;
