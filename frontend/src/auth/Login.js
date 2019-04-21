import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Container, Form, Button, Navbar} from "react-bootstrap";
import axios from 'axios';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        user: response.data.user
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/userdashboard'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
				<div style={{backgroundColor:"#44a6c6"}}>
                <Container style={{maxWidth: "400px", color: "white", padding: "25px"}}>
                    <Form onSubmit={this.handleSubmit}>
                        <h1>Log in</h1>
                        <h2 style={{fontSize:"15px"}}></h2>
                        <Form.Group>
                        <label style={{color: "white" , padding: "5px 0px 5px 0px"}} htmlFor="username">Username</label>
                            <Form.Control id="username" 
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange} 
                            value={this.state.username}/>
                        <label style={{color: "white", padding: "5px 0px 5px 0px"}} htmlFor="Password">Password</label>
                            <Form.Control 
                            id="password" 
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange} 
                            value={this.state.password} 
                            type="password"/>
                            </Form.Group>
                        <a href="/"><Button>
                            Back
                        </Button>
						</a>
						<Navbar.Brand></Navbar.Brand>
						<Button
                            
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </Form>
                </Container>
				</div>
            )
        }
    }
}

export default Login;