import React, {Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, Alert } from 'react-bootstrap';
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
          showSignup: false,
          loggedIn: false,
          msg:''
        }
        this.Auth = new Auth();
        this.logout = this.logout.bind(this);
        this.displayDashboard = this.displayDashboard.bind(this);
        this.displayLogin = this.displayLogin.bind(this);
        this.displaySignup = this.displaySignup.bind(this);
        this.refresh = this.refresh.bind(this);
        this.checkLogIn = this.checkLogIn.bind(this);
    }

    refresh()
    {
      this.checkLogIn();
    }
    componentDidMount()
    {
      this.checkLogIn();
    }
    checkLogIn()
    {
      this.Auth.isLoggedIn().then((returned) => {
        this.setState({ loggedIn: returned });
        this.forceUpdate();
      });
      this.forceUpdate();
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
        this.Auth.logOut().then((response) => {
          if (response !== null || response !== undefined)
          {          
            this.setState({
              loggedIn: false,
              msg: response.msg
            })
          }
        });


        console.log('logging out!!');
        this.setState({
                showDashboard: false,
                showLogin: false,
                showSignup: false,
                loggedIn: false
              });
        //this.refresh();
    }
    render(){
		return (
			<>
			<Navbar bg="light" expand="lg">
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <p></p>
			    <Navbar.Collapse id="basic-navbar-nav">
              <img className="logo" src="happyeggs.ico"></img>
			        <a className="restaurantfinder" onClick={searchObj.app.loadSearch}><Nav.Link style={{color: "white"}} href="">Restaurant Finder</Nav.Link></a>
              {this.state.msg !== null && this.state.msg.length > 0 && (<Alert variant="primary" dismissible={true}>{this.state.msg}</Alert>)}
              {this.state.loggedIn  && (
              <div className="navbar-right navbar-button">
                <Button className="spacing btn btn-light" onClick={this.logout}>Logout</Button>
                <Button className="spacing btn btn-light" onClick={this.displayDashboard} >Display User Dashboard</Button>
              </div>)}
			          {!this.state.loggedIn && (
                  <div className="navbar-right navbar-button">
                  <Button className="spacing btn btn-light" onClick = {this.displayLogin}>Log In</Button>
                  <Button className="spacing btn btn-light" onClick = {this.displaySignup}>Sign Up</Button>
                  </div>
                )}
          </Navbar.Collapse>
			</Navbar>
      {this.state.showDashboard && (
        <UserDashboard displayDashboard={this.displayDashboard} refresh={this.refresh}></UserDashboard>
      )}
      {this.state.showLogin && (
        <Login displayLogin = {this.displayLogin} refresh={this.refresh}/>
      )}
      {this.state.showSignup && (
        <Signup displaySignup = {this.displaySignup} refresh={this.refresh}/>
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
