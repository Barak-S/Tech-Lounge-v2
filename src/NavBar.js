import React from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
// import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {

    render(){

        return (
            <Navbar inverse collapseOnSelect expand="lg">
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
        //     <Navbar collapseOnSelect expand="lg" >
        //     <Navbar.Brand href="/">Tech Lounge</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //     <Navbar.Collapse id="responsive-navbar-nav">
        //       <Nav className="mr-auto justify-content-center">
        //             <Nav.Item>
        //             <Nav.Link style={{color: "rgb(100,124,187)"}} href="/">Collection</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link style={{color: "rgb(100,124,187)"}} href="/">About</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link style={{color: "rgb(100,124,187)"}} href="/">Contact</Nav.Link>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <Nav.Link style={{color: "rgb(100,124,187)"}} href="/">Blog</Nav.Link>
        //         </Nav.Item>
        //       </Nav>
        //     </Navbar.Collapse>
        //   </Navbar>

        );


    }
}

export default NavBar;