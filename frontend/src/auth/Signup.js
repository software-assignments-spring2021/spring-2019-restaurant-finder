import React, { Component } from 'react';
import {Container, Form, Button} from "react-bootstrap";
import axios from 'axios';
class Signup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          password: "",
          redirectTo:null
        };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    }  
    handleSubmit(event)
    {
        event.preventDefault();
        axios.post("/user/", {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log(response)
            if(response.data)
            {
                console.log("successful signup");
                this.setState({redirectTo: "/login"})
            }
            else
            {
                console.log("ERROR");
            }
        }).catch(error => {
            console.log("ERROR - SIGN UP\n" + error);
        })
    }
    
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

    render()
    {
        return(
        <Container style={{maxWidth: "400px", color: "white", padding: "50px"}}>
            <Form onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <h2 style={{fontSize:"15px"}}>Sign up for signing up purposes and signing up purposes and signing up purposes and signing up purposes and sign up because signing up is signing up and signing up.</h2>
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
                <Button
                    disabled={!this.validateForm()}
                    type="submit"
                    >
                
                    Sign Up
                </Button>
            </Form>
        </Container>
        );
    }
}
export default Signup;