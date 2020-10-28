import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./App.scss";
import { TweenMax, TweenLite, Power3 }  from 'gsap';
import { Row, Col } from 'react-bootstrap';
import Products from './Poducts'
import newyork from "./images/newyork.webp";
import newyork2 from "./images/nyc.jpeg";
import telaviv from "./images/telaviv.jpeg"

const Home = () => {

    const [timeOfDay, setTimeOfDay] = useState(false)
    
    let nightTime = timeOfDay === false ? newyork : newyork2
    
    let cities = [
        { name: "New York", image: nightTime },
        { name: "Tel Aviv", image: telaviv }
      ];


    let home = useRef(null);
    let app = useRef(null)

    useEffect(()=>{
      TweenMax.to( home, 0, {css: {visibility: 'visible'}})
      TweenMax.fromTo( home, 1.2,{ opacity: 0, y: 50 },{ opacity: 1, y: 0 })
    }, [])

    const handleCity = (city) => {
        if (city === "/static/media/newyork.824150ab.webp"){
            setTimeOfDay(true)
        } else if (city === '/static/media/nyc.13789085.jpeg'){
            setTimeOfDay(false)
        }
        TweenMax.to(home, {
            duration: 0,
            background: `url(${city}) center center`
        });        
    }
  
    return (
    <div>
      <div ref={el => (home = el)}className="home">
        <div style={{position: "absolute", top: "50%"}}>
            <Col xs={12} sm={12} md={8} lg={8} className="align-auto">
                <h2 style={{ color: "#ffffff", fontWeight: "500"}}>Our Mission</h2>
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
      <Products/>
    </div>
    );
};
  

export default Home