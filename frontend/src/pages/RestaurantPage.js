import React, { Component } from 'react';
import { Row, Col, Card, CardImg,} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton";
import '../css/fontawesome/css/all.css';
import StarRatingComponent from './StarRatingComponent.jsx';

class RestaurantPage extends Component {
    constructor (props) {
      super();
      this.state = {
        rating_half_star: 0,
      };
      this.onStarClickHalfStar = this.onStarClickHalfStar.bind(this);
    };

    onStarClickHalfStar(nextValue, prevValue, name, e) {
      const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

      if (xPos <= 0.5) {
        nextValue -= 0.5;
      }

      console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
      //console.log(nextValue);
      this.setState({rating_half_star: nextValue});
    }

    render() {
      return (
  		<div>
  			<CardImg className="rounded" src={searchObj.restaurant.image_url} style={{display: "inline"}}/>
  			<h2 style={{display: "inline", fontSize: '5em'}}>{searchObj.restaurant.name}</h2>
  			<Card style={{fontSize: '1.5em', padding:"10px"}}>
  				<a className="card-link" href={searchObj.restaurant.url}>Website</a>
  				<div className="card-text">location: {searchObj.restaurant.location.zip_code}</div>
  				<div className="card-text">Phone: {searchObj.restaurant.phone}</div>
  				<div className="card-text">Price: {searchObj.restaurant.price}</div>
  				<div className="card-text">Rating: {searchObj.restaurant.rating}</div>
  			</Card>
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
  		</div>
  	);
  }
}

export default RestaurantPage;
