import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div style={{paddingTop: "10vh"}}>
                        <Col xs={12} sm={12} md={10} lg={10} className="align-auto">
                            <h2>Shopping Cart</h2>
                            <Table striped bordered hover>
                                <thead style={{fontSize: 11}}>
                                    <tr>
                                    <th>Products</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nook Pod</td>
                                        <td>1</td>
                                        <td>$9,500.00</td>
                                    </tr>
                                    <tr>
                                        <td>"Hello World" sign"</td>
                                        <td>2</td>
                                        <td>$34.99</td>
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