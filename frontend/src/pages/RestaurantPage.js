import React, { Component } from 'react';
import { Row, Col, Card, CardImg,Container, Jumbotron} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"
import TwoPointMapBox from "../components/TwoPointMapBox"
import '../css/fontawesome/css/all.css';
import StarRatingComponent from './StarRatingComponent.jsx';

class RestaurantPage extends Component {

	constructor(props){
		super(props)
		this.handleRatings = this.handleRatings.bind(this);
		this.getImages = this.getImages.bind(this);
		this.getReviews = this.getReviews.bind(this);
		this.state = {
        rating_half_star: 0,
      };
    this.onStarClickHalfStar = this.onStarClickHalfStar.bind(this);
	}

	onStarClickHalfStar(nextValue, prevValue, name, e) {
      const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

      if (xPos <= 0.5) {
        nextValue -= 0.5;
      }

      console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
      //console.log(nextValue);
      this.setState({rating_half_star: nextValue});
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
	}

  render() {
	  console.log(searchObj.restaurants);
    return (
		<>
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
			<h3>Rate this Restaurant:</h3>
        <div style={{fontSize: 24}}>
          <StarRatingComponent
            name="app6"
            starColor="#ffb400"
            emptyStarColor="#ffb400"
            value={this.state.rating_half_star}
            onStarClick={this.onStarClickHalfStar.bind(this)}
            renderStarIcon={(index, value) => {
              return (
                <span>
                  <i className={index <= value ? 'fas fa-star' : 'far fa-star'} />
                </span>
              );
            }}
            renderStarIconHalf={() => {
              return (
                <span>
                  <span style={{position: 'absolute'}}><i className="far fa-star" /></span>
                  <span><i className="fas fa-star-half" /></span>
                </span>
              );
            }} />
        </div>

		</>
	);
  }
}
export default RestaurantPage;
