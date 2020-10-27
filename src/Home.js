import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./App.scss";
import { TweenMax, TweenLite, Power3 }  from 'gsap';
import { Row, Col } from 'react-bootstrap';

import newyork from "./images/nyc.jpeg";
import telaviv from "./images/telaviv.jpeg"


const cities = [
    { name: "New York", image: newyork },
    { name: "Tel Aviv", image: telaviv }
  ];
  
const Home = () => {

    let home = useRef(null);
    let app = useRef(null)

    useEffect(()=>{
      TweenMax.to( home, 0, {css: {visibility: 'visible'}})
      TweenMax.fromTo( home, 1.2,{ opacity: 0, y: 50 },{ opacity: 1, y: 0 })
    }, [])

    const handleCity = (city) => {
        console.log(city)
        TweenMax.to(home, {
            duration: 0,
            background: `url(${city}) center center`
        });
        TweenMax.to(home, {
            duration: 0.4,
            opacity: 1,
            ease: "power3.inOut"
        });
        TweenMax.from(home, {
            duration: 0.4,
            skewY: 2,
            transformOrigin: "right top"
        });
        
    }
  
    return (
      <div ref={el => (home = el)}className="home">
        <div style={{position: "absolute", top: "50%"}}>
            
                <Col xs={12} sm={12} md={8} lg={8} className="align-auto">
                    <h2 style={{ color: "rgb(100,124,187)", fontWeight: "500"}}>Our Mission</h2>
                    <p style={{color: "#ffffff"}}>
                    With attention to detail, we continue to shape the future of the tech industry.
                    </p>
                    <div className='locations'>
                    Locations:
                    {cities.map(el => (
                        <span
                        key={el.name}
                        onClick={()=>handleCity(el.image)}
                        >
                        {el.name}
                        </span>
                    ))}
                    </div>
                </Col>
            

        </div>
      </div>
    );
};
  

export default Home