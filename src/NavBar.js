import React from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
// import { Link, withRouter } from "react-router-dom";
import { gsap } from "gsap";

class NavBar extends React.Component {

    render(){

        return (
            <Navbar inverse collapseOnSelect expand="lg" style={{  backdropFilter: "blur(6px)"}}>
                <Navbar.Brand href="/" style={{fontWeight: "700", color: "#191919"}}>Tech Lounge</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center" style={{ flex: 1}}>
                        <Nav.Item>
                            <Nav.Link style={{color: "#fff"}} href="/">Collection</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{color: "#fff"}} href="/">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{color: "#fff"}} href="/">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{color: "#fff"}} href="/">Blog</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );


    }
}

export default NavBar;