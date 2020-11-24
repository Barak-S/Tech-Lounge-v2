import React from 'react';

const Footer = () => {

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Tech Lounge</h4>
                        <h3 className="list-unstyled">
                        <li>New York, NY</li>
                        </h3>
                    </div>
                    <div className="col">
                        <ui className="list-unstyled">
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>About</li>
                        </ui>
                    </div>
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
                        &copy; 2020 Tech Lounge | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );

}

export default Footer;