import React, { useRef, useEffect, useState } from "react";
import { gsap, TweenMax, TweenLite, Power3 }  from 'gsap';
import { Col } from 'react-bootstrap';
import newyork from "../images/newyork.webp";
import newyork2 from "../images/nyc.jpeg";
import telaviv from "../images/telaviv.jpeg"
import { useIntersection } from "react-use";


const Home = () => {

    let sectionRef = useRef(null)

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })

    const fadeIn = el =>{
        gsap.to(el,1,{
            opacity: 1,
            ease: "Power4.out",
        })
    }
    const fadeOut = el =>{
        gsap.to(el,1,{
            opacity: 0,
            ease: "Power4.out",
        })
    }

    intersection && intersection.intersectionRatio < 0.5
    ? fadeOut('.fadeIn') : fadeIn(".fadeIn")

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
      TweenMax.fromTo( home, 1.2,{ opacity: 0 },{ opacity: 1 })
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

        <div ref={sectionRef} className="fadeIn">
            <div className="products">
                <div style={{position: "absolute"}}>
                    <Col xs={12} sm={12} md={8} lg={8} className="align-auto">
                        <h2 style={{ color: "#fff", fontWeight: "600"}}>Update you work environment.</h2>
                        <br/>
                        <h2 style={{ color: "#fff", fontWeight: "600"}}>Enhance your productivity.</h2>
                    </Col>
                </div>
            </div>
        </div>
      
        <div className="collection">
            <div style={{position: "absolute", top: "215%"}}>
                <Col xs={12} sm={12} md={6} lg={6} className="align-auto">
                    <h2 style={{ color: "#64647E", fontWeight: "600"}}>Update you work environment.</h2>
                    <br/>
                    <h2 style={{ color: "#64647E", fontWeight: "600"}}>Enhance your productivity.</h2>
                    <br/>
                    <h2 style={{ color: "#64647E", fontWeight: "600"}}>Partner with the World’s Best Brands.</h2>
                </Col>
            </div>
        </div>
    </div>
    );
};
  

export default Home