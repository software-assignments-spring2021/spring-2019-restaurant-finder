import React, {Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

let filters = [];
let restaurantTypes = [];

class GlobalNavBar extends Component {

    constructor(props)
    {
        super(props);
    }

    render(){
        return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand onClick={this.props.app.loadSearch} href="">Restaurant Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <a onClick={this.props.app.loadSearch}><Nav.Link href="">Search</Nav.Link></a>
                <Nav.Link href="">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="">Action</NavDropdown.Item>
                    <NavDropdown.Item href="">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default GlobalNavBar;


