import React, { Component } from 'react';
import {Alert, Container, Form, Button, Navbar} from "react-bootstrap";
import Auth from '../Auth';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            msg: '',
            alertType:'primary'
        }
        this.Auth = new Auth();
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
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        let userData;
        this.Auth.login(user).then((response) => {
            if (response !== undefined)
            {
                userData = response.user;
                if (response.msg.includes("Incorrect"))
                {
                    this.setState({alertType:'danger'});
                }
                else
                {
                    this.setState({alertType:'primary'});
                }
                this.setState({msg: response.msg});
            }
            this.props.refresh();
        });
        if (userData !== null)
        {
            console.log(JSON.stringify(userData));
        }
    }

    render() {
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
						<Navbar.Brand></Navbar.Brand>
						<Button
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </Form>
                    {this.state.msg.length > 0 && (<Alert variant={this.state.alertType}>{this.state.msg}</Alert>)}
                </Container>
				</div>
            )
    }
}

export default Login;