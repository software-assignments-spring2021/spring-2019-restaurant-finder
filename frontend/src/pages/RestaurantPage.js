import React, { Component } from 'react';
import { Row, Col, Card, CardImg,Container, Jumbotron} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"
import TwoPointMapBox from "../components/TwoPointMapBox"

class RestaurantPage extends Component {

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
				<Card style={{marginTop:"50px", marginBottom:"50px"}}>
					<div class="card-header" style={{fontSize:"30px"}}>
   						 {review.user.name} <a href={review.url}>says:</a> {this.handleRatings(review.rating, "200px")}
  					</div>
					  <div class="card-body" style={{fontSize:"20px"}}>
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
	}

  render() {
	  console.log(searchObj.restaurants);
    return (
		<>	
			<Jumbotron style={{fontSize:"4em"}}>
				{searchObj.restaurant.name} <span style = {{color:"green"}}>{searchObj.restaurant.price}</span>
			</Jumbotron>
			<Row style={{marginRight: 0, marginLeft: 0}}>
				<Col style={{fontSize: "20px"}}>
					<Row style={{marginRight: 0, marginLeft: 0}}>
						<div style={{margin:"auto"}}>{this.handleRatings(searchObj.restaurant.rating, "170px")}</div>
					</Row>
					<Row style={{marginRight: 0, marginLeft: 0, marginTop: "20px"}}>
						<p style={{margin:"auto"}}> {searchObj.restaurant.location.address1}</p>
					</Row>
					<Row style={{marginRight: 0, marginLeft: 0, marginTop: "20px"}}>
						<p style={{margin:"auto"}}>{searchObj.restaurant.phone}</p>
					</Row>
					<Row style={{marginRight: 0, marginLeft: 0, marginTop: "20px"}}>
						<a  href={searchObj.restaurant.url} style={{margin:"auto"}}>Website</a>
					</Row>
					{this.getReviews()}
				</Col>
				<Col style={{marginLeft:"50px", marginRight:"50px", width:"15%", minWidth:"204px"}}>
					{this.getImages()}
					<a href="http://yelp.com" style={{marginTop:"40px"}}> 
							<img src={require('../components/Yelp_trademark_RGB_outline.png')} width="160" height="100" style={{position:"absolute", bottom:0,right:0}}/>
					</a>
				</Col>
			</Row>
			
		</>
	);
  }
}
export default RestaurantPage;