import React, { Component } from 'react';
import {Container, Form, Button, Navbar, Alert} from "react-bootstrap";
import Auth from '../Auth';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          userObject: null
        };
        this.Auth = new Auth();
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        
    }  

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        this.Auth.signUp(user).then((response) => {
            if (response !== null || response !== undefined)
            {
                this.setState({
                    userObject: response.user
                })
            }
            
        });
    }
    
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

    render() {
        return(
		<div style={{backgroundColor:"#44a6c6"}}>
        <Container style={{maxWidth: "400px", color: "white", padding: "50px"}}>
            <Form onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <h2 style={{fontSize:"15px"}}></h2>
                <Form.Group>
                <label style={{color: "white" , padding: "5px 0px 5px 0px"}} htmlFor="username">Username</label>
                <Form.Control id="username" 
                placeholder="Username"
                onChange={this.handleChange} 
                value={this.state.username}/>
                
                <label style={{color: "white", padding: "5px 0px 5px 0px"}} htmlFor="username">Password</label>
                <Form.Control id="password" 
                onChange={this.handleChange} 
                value={this.state.password} 
                placeholder="Password"
                type="password"/>
                </Form.Group>
				<Navbar.Brand></Navbar.Brand>
                <Button
                    disabled={!this.validateForm()}
                    type="submit"
                    >
                    Sign Up
                </Button>
                <br></br>
            </Form>
            <div style={{paddingTop: '20px'}} >
            {this.state.userObject !== null && (<Alert variant="danger">{this.state.userObject.username} user created.</Alert>)}
            </div>
        </Container>

		</div>
        );
    }
}
export default Signup;