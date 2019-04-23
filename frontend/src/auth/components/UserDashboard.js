import React, { Component } from 'react';
import {Container, Form, Button, Navbar} from "react-bootstrap";
import Auth from "../Auth";
class UserDashboard extends Component {
    constructor(props)
    {
        super(props);
        this.Auth = new Auth();
        this.state ={
            username: "",
            favorites: []
        }
        
    }
    componentDidMount()
    {
        this.Auth.isLoggedIn() && this.Auth.getUser().then((data) => {
            this.setState({
                username: data.user.username,
                favorites: data.user.favorites
            });
        });
    }
    render()
    {
        return(
            <Container style={{margin: 'auto', textAlign: 'center'}}>
            <h1> Username: {this.state.username} </h1>
            <h2>Favorites</h2>
            <ol>
            {this.state.favorites.map((e) => {
                return (
                <li><a href={e.url}>{e.name}</a></li>
                )}
            )}
            </ol>
            
            <Button onClick = {this.props.displayDashboard}>Close</Button>
            </Container>
        );
    }
}
export default UserDashboard;