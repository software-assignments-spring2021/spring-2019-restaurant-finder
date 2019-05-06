import React, { Component } from 'react';
import { Row, Col, Card, CardImg,Container, Jumbotron} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"
import TwoPointMapBox from "../components/TwoPointMapBox"

class RestaurantPage extends Component {

<<<<<<< HEAD
	constructor(){
		super();
		this.getHours = this.getHours.bind(this);
	}

	getHours() {
		const hours = [];
		searchObj.restaurant.hours.forEach((restaurant) => {
			restaurant.open.forEach((res) => {
				if (res.day === 0){
					hours.push("Monday: " + res.start + " - " + res.end + "\n");
				} else if (res.day === 1){
					hours.push("Tuesday: " + res.start + " - " + res.end + "\n");
				} else if (res.day === 2){
					hours.push("Wednesday: " + res.start + " - " + res.end + "\n");
				} else if (res.day === 3){
					hours.push("Thursday: " + res.start + " - " + res.end + "\n");
				} else if (res.day === 4){
					hours.push("Friday: " + res.start + " - " + res.end + "\n");
				} else if (res.day === 5){
					hours.push("Saturday: " + res.start + " - " + res.end + "\n");
				} else if (res.day === 6){
					hours.push("Sunday: " + res.start + " - " + res.end + "\n");
				}
			})
		});
		return hours;
=======
	constructor(props){
		super(props)
		this.handleRatings = this.handleRatings.bind(this);
		this.getImages = this.getImages.bind(this);
		this.getReviews = this.getReviews.bind(this);
	}

	getImages(){
		return searchObj.restaurant.photos.map((link)=>{
			console.log(link);
			return(<img src={link} style={{width:"100%", height:"auto", marginBottom:"80px"}}/>);
		})
	}

	getReviews(){
		return searchObj.restaurant.reviews.map(review=>{

			return(
				<Card style={{marginTop:"50px"}}>
					<div class="card-header">
   						 {review.user.name} <a href={review.url}>says:</a> {this.handleRatings(review.rating, "200px")}
  					</div>
					  <div class="card-body" style={{fontSize:"30px"}}>
						{review.text}
					  </div>
				</Card>
			)


		})
	}

	handleRatings(rating, width){
		if ( rating == 0){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_0.png')} style={{width:width}}/>
		} 
		if (rating == 1){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_1_half.png')} style={{width:width}}/>
		}
		if (rating == 1.5){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_1_half.png')} style={{width:width}}/>
		}
		if (rating == 2){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_2.png')} style={{width:width}}/>
		}
		if (rating == 2.5){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_2_half.png')} style={{width:width}}/>
		}
		if (rating == 3){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_3.png')} style={{width:width}}/>
		}
		if (rating == 3.5){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_3_half.png')} style={{width:width}}/>
		}
		if (rating == 4){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_4.png')} style={{width:width}}/>
		}
		if (rating == 4.5){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_4_half.png')} style={{width:width}}/>
		}
		if (rating == 5){
			return <img src={require('../components/yelp_stars/web_and_ios/regular/regular_5.png')} style={{width:width}}/>
		}
>>>>>>> b7625c60225fbef71a1c38737e3d0f4e3da9e2f8
	}

  render() {
	  console.log(searchObj.restaurants);
    return (
		<>	
<<<<<<< HEAD
			<div className="restaurantPage">
			<h2 className="restaurantTitle">{searchObj.restaurant.name}</h2>
			<div className="photos_box">
				<div className="photos">
				{searchObj.restaurant.photos.map((p) => {
					return (
					<img className="individual_photos" src={p} />
					)}
				)}
				</div>
			</div>
			<div className="restaurantInfo">
				<div className="restaurantText">
					<a className="card-link" href={searchObj.restaurant.url}>Website</a>
					<div className="card-text">Address: {searchObj.restaurant.location.display_address}</div>
					<div className="card-text">Phone: {searchObj.restaurant.phone}</div>
					<div className="card-text">Price: {searchObj.restaurant.price}</div>
					<div className="card-text">Rating: {searchObj.restaurant.rating}</div>
					<div className="card-text">Hours:  
						<ol className="hours_list">
		                {this.getHours().map((d) => {
		                    return (
		                    <li>{d}</li>
		                    )}
		                )}
		                </ol>
					</div>
					<div className="card-text">Special hours: {searchObj.restaurant.special_hours}</div>
				</div> 
			</div>


			</div>
=======
			<Jumbotron style={{fontSize:"4em"}}>
				{searchObj.restaurant.name} <span style = {{color:"green"}}>{searchObj.restaurant.price}</span>
			</Jumbotron>
			<Row>
				<Col style={{marginLeft:"10%",fontSize:"3em"}}>
					<Row>
						<div >{this.handleRatings(searchObj.restaurant.rating, "200%")}</div>
					</Row>
					<Row>
						<div > {searchObj.restaurant.location.address1}</div>
					</Row>
					<Row>
						<div >{searchObj.restaurant.phone}</div>
					</Row>
					<Row>
						<a  href={searchObj.restaurant.url}>Website</a>
					</Row>
					{this.getReviews()}
				</Col>
				<Col style={{marginLeft:"50px", marginRight:"50px", width:"15%", minWidth:"204px"}}>
					{this.getImages()}
					<a href="http://yelp.com"> 
							<img src={require('../components/Yelp_trademark_RGB_outline.png')} width="160" height="100" style={{position:"absolute", bottom:0,right:0}}/>
					</a>
				</Col>
			</Row>
			
>>>>>>> b7625c60225fbef71a1c38737e3d0f4e3da9e2f8
		</>
	);
  }
}
export default RestaurantPage;