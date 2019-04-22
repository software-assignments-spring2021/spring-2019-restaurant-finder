import React, {Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Signup from "../auth/components/Signup";
import Login from "../auth/components/Login";
import searchObj from "../designPatterns/SearchStateSingleton"
import Auth from '../auth/Auth';
import UserDashboard from '../auth/components/UserDashboard';

class GlobalNavBar extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
          showDashboard:false,
          showLogin: false,
          showSignup: false
        }
        this.logout = this.logout.bind(this);
        this.displayDashboard = this.displayDashboard.bind(this);
        this.displayLogin = this.displayLogin.bind(this);
        this.displaySignup = this.displaySignup.bind(this);
    }

    componentDidUpdate()
    {
      this.props.Auth.getUser()
      console.log("CURRENT LOGIN STATE: " + this.props.Auth.state.loggedIn);
    }

    displayDashboard(){
      console.log("switch on / off dash");

      this.setState({
        showDashboard: !this.state.showDashboard,
        showLogin: false,
        showSignup: false
      });
    }

    displaySignup(){
      console.log("switch on / off signup");
      this.setState({
        showDashboard: false,
        showLogin: false,
        showSignup: !this.state.showSignup
      });
    }

    displayLogin(){
      console.log("switch on / off login");

      this.setState({
        showDashboard: false,
        showLogin: !this.state.showLogin,
        showSignup: false
      })
    }

    logout(event)
    {
        event.preventDefault();
        console.log('logging out!!');
        this.props.Auth.logOut();
        this.props.Auth.getUser();
    }
    render(){
		return (
			<>
			<Navbar bg="light" expand="lg">
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
                    <img className="logo" src="happyeggs.ico"></img>
			        <a className="restaurantfinder" onClick={searchObj.app.loadSearch}><Nav.Link style={{color: "white"}} href="">Restaurant Finder</Nav.Link></a>
			        {this.props.Auth.state.loggedIn  && (<>
                <Button onClick={this.logout}>Logout</Button>
                <Button onClick={this.displayDashboard}>Display User Dashboard</Button>
              </>)}
			          {!this.props.Auth.state.loggedIn && (<>
                  <Button onClick = {this.displayLogin}>Log In</Button>
                  <Button onClick = {this.displaySignup}>Sign Up</Button>
                  </>
                )}
          </Navbar.Collapse>
			</Navbar>
      {this.state.showDashboard && (
        <UserDashboard Auth = {this.props.Auth} displayDashboard={this.displayDashboard}></UserDashboard>
      )}
      {this.state.showLogin && (
        <Login Auth = {this.props.Auth} displayLogin = {this.displayLogin}/>
      )}
      {this.state.showSignup && (
        <Signup Auth = {this.props.Auth} displaySignup = {this.displaySignup}/>
      )}
			</>
			)
    }
}

export default GlobalNavBar;

  // return (
            
        // <Navbar bg="light" expand="lg">
        //     <Switch>
        //         <Route exact path="/signup" component={Signup}/>
        //         <Route exact path="/login" render={() => <Login updateUser = {this.props.app.updateUser}/>}/>
        //     </Switch>
        //     <Navbar.Brand onClick={this.props.app.loadSearch} href="">Restaurant Finder - Username{this.props.username}</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //         <a onClick={this.props.app.loadSearch}><Nav.Link href="/">Search</Nav.Link></a>
        //         <p>Restaurant Finder - Username: {this.props.username}</p>
        //         {!this.props.loggedIn  && [
        //             <NavLink style={{float: "right"}} to="/signup">Sign Up</NavLink>,
        //             <NavLink style={{float: "right"}} to="/login">Login</NavLink>
        //             ]}
        //             {this.props.loggedIn && (<Button onClick={this.logout}>Logout</Button>)}
                
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
