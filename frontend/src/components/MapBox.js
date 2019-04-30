import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import ReactMapGL, {Popup} from 'react-map-gl';
import searchObj from "../designPatterns/SearchStateSingleton"
let token = 'pk.eyJ1IjoiY21yNjI0IiwiYSI6ImNqdXp2YXhjNjBrZms0ZHBoejB0MjYxencifQ.RwRI3gBw5GiU-J8a3-xSlg';

class MapBox extends Component {

    constructor(props)
    {
		super(props);
		searchObj.map=this;
        this.state={
            viewport: {
                width: 400,
                height: 400,
				zoom: 15,
				latitude: searchObj.searchOptions.latitude, 
                longitude: searchObj.searchOptions.longitude
              },
            locations:[
                {
                    lat: searchObj.searchOptions.latitude, 
                    lng: searchObj.searchOptions.longitude,
                    name: 'You are here'
                }, ...searchObj.restaurants.map((r)=>{
					return{
						lat: r.coordinates.latitude,
						lng: r.coordinates.longitude,
						name: r.name,
						id: r.id
					}
				})
            ]
            
        };
	}



    render() {
		console.log(this.state.locations)
        return (
            <Container>
                <ReactMapGL
                    mapboxApiAccessToken = {token}
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({viewport})}
                >
                {this.state.locations.map((loc) => { return (
                <Popup
                    latitude={loc.lat} 
                    longitude={loc.lng} 
                    closeButton={true} 
					closeOnClick={true} 
					onClose={()=>{
						searchObj.app.loadRestaurant(loc.id);
						this.setState({});
					}}
                    anchor="bottom"
                    >
                    <div>{loc.name}</div>
                </Popup>);
                })}
            </ReactMapGL>
          </Container>
        );
    }
}
export default MapBox;