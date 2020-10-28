import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Card } from 'react-bootstrap';
import { TweenMax, TweenLite, Power3 }  from 'gsap';
import { gsap } from "gsap";

const Collection = () => {

  let bg = useRef(null)

  return (
    <div ref={el => (bg = el)} className="collection">
      <div style={{position: "absolute", top: "215%"}}>
          <Col xs={12} sm={12} md={6} lg={6} className="align-auto">
              <h2 style={{ color: "#64647E", fontWeight: "600"}}>Update you work environment.</h2>
              <br/>
              <h2 style={{ color: "#64647E", fontWeight: "600"}}>Enhance your productivity.</h2>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="align-auto">
              <h2 style={{ color: "#64647E", fontWeight: "600"}}>Expand Your Brand’s Reach</h2>
              <br/>
              <h2 style={{ color: "#64647E", fontWeight: "600"}}>Partner with the World’s Best Brands.</h2>
          </Col>

      </div>
    </div>

  );
  
}

export default Collection;