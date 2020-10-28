import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div style={{paddingTop: "10vh"}}>
                    <Col xs={12} sm={12} md={10} lg={10} className="align-auto">
                        <h2>Shopping Cart</h2>
                        <Table striped bordered hover responsive>
                            <thead style={{fontSize: 11}}>
                                <tr>
                                <th>2 item's in your cart</th>
                                <th>Products</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Nook Pod</td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>"Hello World" Sign</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </div>
            </div>
        );
    }
}

export default Cart;