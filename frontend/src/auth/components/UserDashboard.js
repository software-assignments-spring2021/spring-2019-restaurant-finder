import React, { Component } from 'react';
import {Container, Form, Button, Navbar} from "react-bootstrap";

class UserDashboard extends Component {
    render()
    {
        this.props.Auth.getUser();
        return(
            <Container>
            <h1> Username: {this.props.Auth.state.userData.username} </h1>
            <h2>Favorites: </h2>
            <ul>
              <li>Test 1</li>
              <li>Test 2</li>
              <li>Test 3</li>
              <li>Test 4</li>
            </ul>
            <Button onClick = {this.props.displayDashboard}>Close</Button>
            </Container>
        );
    }
}
export default UserDashboard;