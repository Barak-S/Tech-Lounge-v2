import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                {/* Column1 */}
                <div className="col">
                    <h4>Tech Lounge</h4>
                    <h3 className="list-unstyled">
                    <li>New York, NY</li>
                    </h3>
                </div>
                {/* Column2 */}
                <div className="col">
                    <ui className="list-unstyled">
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>About</li>
                    </ui>
                </div>
                {/* Column3 */}
                <div className="col">
                    <ui className="list-unstyled">
                    <li>Our Offices</li>
                    <li>Support</li>
                    <li>Advertisers</li>
                    </ui>
                </div>
                </div>
                <hr />
                <div className="row">
                <p className="col-sm">
                    &copy; 2020 Tech Lounge | All rights reserved |
                    Terms Of Service | Privacy
                </p>
                </div>
            </div>
        </div>
    );

}

export default Footer;