import React, { Component } from 'react';
import { Row, Col, Card, CardImg,} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"

class RestaurantPrototype extends Component {

	constructor(props){
		
		this.image_url = "";
		this.name = "";
		this.location = 0;
		this.phone = 0;
		this.price = "";
		this.rating = 0;
	}


	clone(){
		let proto = Object.getPrototypeOf(this);
		let cloned = Object.create(proto);

		cloned.image_url = this.image_url;
		cloned.name = this.name;
		cloned.location = this.location;
		cloned.phone = this.phone;
		cloned.price = this.price;
		cloned.rating = this.rating;
	}

}
export default RestaurantPrototype;
