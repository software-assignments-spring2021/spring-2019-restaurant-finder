import React, { Component } from 'react';
import {Container, Form, Button, Navbar, Card} from "react-bootstrap";
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
            <div className="dashboard"> 
                <Container style={{textAlign:"center"}}>
                <h1> Username: {this.state.username} </h1>
                <h2>Favorites</h2>
                <ol style={{display:"inline-block", padding:0}}>
					{this.state.favorites.map((e) => {
						return (
						<Card style={{ padding:"10px", paddingLeft:"30px"}}>
							<li><a href={e.url} style={{display:"inline-block"}}>{e.name} - which you rated: {e.rating}/5</a></li>
						</Card>
						)}
					)}
                </ol>
                <div style={{textAlign:"center"}}>
	                <Button onClick = {this.props.displayDashboard}>Close</Button>
				</div>
				</Container>
            </div>
        );
    }
}
export default UserDashboard;