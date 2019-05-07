import React, { Component } from 'react';
import { Col, Card, Button, Container, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import axios from 'axios';

//Loads Restautant Data on Search
import Auth from '../auth/Auth'
class RestaurantBox extends Component {

	constructor(props)
	{
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleHidden = this.toggleHidden.bind(this);
		this.Auth = new Auth();
		this.state = {
			isHidden: false
		}
	}

	toggleHidden() {
		this.setState({
			isHidden: true
		})
	}


	handleSubmit(e) {
		console.log(e.toString());
		const newFav = {name: this.props.name, url: this.props.url, rating:e.toString()};
		this.Auth.newFavorite(newFav);
		this.setState({submitted: true});
		this.toggleHidden();
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
				</div>
				<div className='container box-container'>
					<div>
						<img className="rounded" src={this.props.image_url}/>
					</div>

					<Col className='description'>
					<div><Button onClick={this.props.moreInfo} className="moreinfo"> More Info </Button></div>
					<div style ={{fontSize:"1.5em"}}>{this.props.isClosed?"Closed":"Open"}</div>
						<a className="card-link" href={this.props.url}>Website</a>
						<div className="card-text">{this.props.location.address1}</div>
						<div className="card-text">{this.props.phone}</div>
						<div className="card-text" style = {{color:"green"}} >{this.props.price}</div>
						<div className="card-text">{this.handleRatings()}</div>
						<div className="card-text">{Math.round(this.props.distance*3.28084)} Feet Away</div>
					</Col>

					<a href="http://yelp.com">
						<img className="yelp" src={require('./Yelp_trademark_RGB_outline.png')}/>
					</a>

					<div>
					{!this.state.isHidden && this.props.loggedIn &&
					<ToggleButtonGroup
					type="checkbox"
					className="favorite_star"
					onChange={this.handleSubmit}
				  	>
						<ToggleButton className="box-button" value={1}> <span className="fa fa-star checked"> 1 </span> </ToggleButton>
						<ToggleButton className="box-button" value={2}> <span className="fa fa-star checked"> 2 </span> </ToggleButton>
						<ToggleButton className="box-button" value={3}> <span className="fa fa-star checked"> 3 </span> </ToggleButton>
						<ToggleButton className="box-button" value={4}> <span className="fa fa-star checked"> 4 </span> </ToggleButton>
						<ToggleButton className="box-button" value={5}> <span className="fa fa-star checked"> 5 </span> </ToggleButton>
				  </ToggleButtonGroup>
					}
					</div>
				</div>

			</Card>
	);
  }
}
export default RestaurantBox;
