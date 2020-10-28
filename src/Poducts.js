import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Card } from 'react-bootstrap';
import { TweenMax, TweenLite, Power3 }  from 'gsap';
import { gsap } from "gsap";

const Poducts = () => {

  let bg = useRef(null)

  return (
    // <div className="products" ref={el => (bg = el)}>
    //   <Row>
    //     <Col className="align-auto" xs={12}sm={12}md={10}lg={10}>
    //       <p>hello</p>
    //     </Col>
    //   </Row>
    // </div>
    <div ref={el => (bg = el)} className="products">
      <div style={{position: "absolute", top: "115%"}}>
          <Col xs={12} sm={12} md={8} lg={8} className="align-auto">
              <h1 style={{ color: "#fff", fontWeight: "600"}}>Update you work environment.</h1>
              <br/>
              <h1 style={{ color: "#fff", fontWeight: "600"}}>Enhance your productivity.</h1>
          </Col>
      </div>
    </div>

  );
  
}

export default Poducts;