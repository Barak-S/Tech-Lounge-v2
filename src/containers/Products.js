import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Card } from 'react-bootstrap';
import { TweenMax, TweenLite, Power3 }  from 'gsap';
import { gsap } from "gsap";

const Poducts = () => {

  return (
    <div className="products">
      <div style={{position: "absolute", top: "115%"}}>
          <Col xs={12} sm={12} md={8} lg={8} className="align-auto">
              <h2 style={{ color: "#fff", fontWeight: "600"}}>Update you work environment.</h2>
              <br/>
              <h2 style={{ color: "#fff", fontWeight: "600"}}>Enhance your productivity.</h2>
          </Col>
      </div>
    </div>

  );
  
}

export default Poducts;