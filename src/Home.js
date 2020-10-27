import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./App.scss";
import { TweenMax, TweenLite, Power3 }  from 'gsap';
import Header from "./Header";

import newyork from "./images/newyork.webp";
import telaviv from "./images/telaviv.jpeg"


const cities = [
    { name: "New York", image: newyork },
    { name: "Tel Aviv", image: telaviv }
  ];
  
const Home = () => {

    // let img = useRef(null);
    // useEffect(()=>{
    //   console.log(img)
    //   TweenMax.fromTo(
    //     img,
    //     1.2,
    //     { opacity: 0, y: 50 },
    //     { opacity: 1, y: 0 }
    //   )
    // }, [])
  
    return (
      <div className="home">
        {/* <img ref={el => (img = el)} src={telaviv}/> */}
        <div style={{position: "absolute", top: "50%"}}>
            <h3>Our Mission</h3>
            <p>
            With attention to detail, we continue to shape the future of the tech industry.
            </p>
            <div className='locations'>
            Locations:
            {cities.map(el => (
                <span
                key={el.name}>
                {el.name}
                </span>
            ))}
        </div>

        </div>
      </div>
    );
};
  

export default Home