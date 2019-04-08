import React, {Component } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Signup from "../auth/Signup";
import Login from "../auth/Login";

class GlobalNavBar extends Component {

    constructor(props)
    {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(event)
  {
    event.preventDefault();
    console.log('logging out!!! SEE YA');
    axios.post('/user/logout').then(response => {
      //console.log(response.data);
      if(response.status === 200)
      {
        this.props.app.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log("logging out caused " + error);
    })
  }
    render(){
        return (
            
        <Navbar bg="light" expand="lg">
            <Switch>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/login" render={() => <Login updateUser = {this.props.app.updateUser}/>}/>
            </Switch>
            <Navbar.Brand onClick={this.props.app.loadSearch} href="">Restaurant Finder - Username{this.props.username}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <a onClick={this.props.app.loadSearch}><Nav.Link href="/">Search</Nav.Link></a>
                <p>Restaurant Finder - Username: {this.props.username}</p>
                {!this.props.loggedIn  && [
                    <NavLink style={{float: "right"}} to="/signup">Sign Up</NavLink>,
                    <NavLink style={{float: "right"}} to="/login">Login</NavLink>
                    ]}
                    {this.props.loggedIn && (<Button onClick={this.logout}>Logout</Button>)}
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default GlobalNavBar;


