import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import ReactMapGL from 'react-map-gl';

let token = 'pk.eyJ1IjoiY21yNjI0IiwiYSI6ImNqdXp2YXhjNjBrZms0ZHBoejB0MjYxencifQ.RwRI3gBw5GiU-J8a3-xSlg';

class MapBox extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            viewport: {
                width: 400,
                height: 400,
                latitude: this.props.lat,
                longitude: this.props.lng,
                zoom: 15
              }
        };
    }

    render() {
        return (
            <ReactMapGL
            mapboxApiAccessToken = {token}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
          />
        );
    }
}
export default MapBox;