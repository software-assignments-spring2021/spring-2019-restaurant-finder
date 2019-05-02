import React, { Component } from 'react';
import { Row, Col, Card, CardImg,} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"
import TwoPointMapBox from "../components/TwoPointMapBox"

class RestaurantPage extends Component {

  render() {
	  console.log(searchObj.restaurants);
    return (
		<>	
			<div className="restaurantPage">
			<h2 className="restaurantTitle">{searchObj.restaurant.name}</h2>
			<div className="restaurantInfo">
				<img className="image" src={searchObj.restaurant.image_url} />
				<div className="restaurantText">

					<a className="card-link" href={searchObj.restaurant.url}>Website</a>
					<div className="card-text">Address: {searchObj.restaurant.location.display_address}</div>
					<div className="card-text">Phone: {searchObj.restaurant.phone}</div>
					<div className="card-text">Price: {searchObj.restaurant.price}</div>
					<div className="card-text">Rating: {searchObj.restaurant.rating}</div>
					<img src={searchObj.restaurant.photos} />
					<div className="card-text">Hours: 
						<div> Monday: {searchObj.restaurant.hours.open} </div>
						<div> Tuesday: {searchObj.restaurant.hours.open} </div>
						<div> Wednesday: {searchObj.restaurant.hours.open} </div>
						<div> Thursday: {searchObj.restaurant.hours.open} </div>
						<div> Friday: {searchObj.restaurant.hours.open} </div>
						<div> Saturday: {searchObj.restaurant.hours.open} </div>
						<div> Sunday: {searchObj.restaurant.hours.open} </div>

					</div>
					<div className="card-text">Special hours: {searchObj.restaurant.special_hours}</div>

				</div> 
			</div>
			</div>
		</>
	);
  }
}
export default RestaurantPage;
