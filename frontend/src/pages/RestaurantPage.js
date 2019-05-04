import React, { Component } from 'react';
import { Row, Col, Card, CardImg,} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"
import TwoPointMapBox from "../components/TwoPointMapBox"

class RestaurantPage extends Component {

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
	}

  render() {
	  console.log(searchObj.restaurants);
    return (
		<>	
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
		</>
	);
  }
}
export default RestaurantPage;
