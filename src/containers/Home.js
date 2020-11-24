import React, { useRef, useEffect, useState } from "react";
import { gsap, TweenMax, TweenLite, Power3 }  from 'gsap';
import { Col, Form, Button } from 'react-bootstrap';
import newyork from "../images/newyork.webp";
import newyork2 from "../images/nyc.jpeg";
import telaviv from "../images/telaviv.jpeg"
import emailSvg from '../images/undraw_subscriber.svg'
import { useIntersection } from "react-use";


const Home = () => {

    let sectionRef = useRef(null)
    let heading = useRef(null)
    let heading2 = useRef(null)
    let heading3 = useRef(null)
    let home = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
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

    intersection && intersection.intersectionRatio < 0.3
    ? fadeOut('.fadeIn') : fadeIn(".fadeIn")

    const [timeOfDay, setTimeOfDay] = useState(false)
    
    let nightTime = timeOfDay === false ? newyork : newyork2
    
    let cities = [
        { name: "New York", image: nightTime },
        { name: "Tel Aviv", image: telaviv }
      ];

    useEffect(()=>{        
        TweenMax.to( home, 0, {css: {visibility: 'visible'}})
        TweenMax.to(
            heading,
            1,
            {
            opacity: 1,
            y: 10,
            ease: Power3.easeOut,
            delay: 1
            }
        )
        TweenMax.to(
            heading2,
            .8,
            {
            opacity: 1,
            y: 15,
            ease: Power3.easeOut,
            delay: 2
            }
        )
        TweenMax.to(
            heading3,
            .8,
            {
            opacity: 1,
            y: 15,
            ease: Power3.easeOut,
            delay: 3
            }
        )
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
                    <h2 style={{ color: "#ffffff", fontWeight: "500"}} className="firstHeader" ref={el => {heading = el}}>Our Mission</h2>
                    <p style={{color: "#ffffff"}} className="secondHeader" ref={el => {heading2 = el}}>
                        With attention to detail, we continue to shape the future of the tech industry.
                    </p>
                    <div className='locations' ref={el => {heading3 = el}}>
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
                    <Col xs={12} sm={12} md={8} lg={8} className="align-auto" style={{marginTop: "25%"}}>
                        <h2 style={{ color: "#fff", fontWeight: "600"}}>Update you work environment.</h2>
                        <br/>
                        <h2 style={{ color: "#fff", fontWeight: "600"}}>Enhance your productivity.</h2>
                    </Col>
                </div>
            </div>
        </div>
      
        <div className="collection">
            <div style={{textAlign: "center"}}>
                <Col xs={12} sm={12} md={6} lg={6} className="align-auto" style={{paddingTop: '5rem'}}>
                    <h1 style={{ color: "#575A89", fontWeight: "600"}}>Lets's work together</h1>
                    <Form style={{padding:'1rem', textAlign: "left"}}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Message: </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    <Button type="submit" style={{backgroundColor: "#57B894", border: "none", fontWeight: "600"}}>
                        Submit
                    </Button>
                </Col>
                <Col>
                    <img src={emailSvg} style={{height: 300, width: "100%" }}></img>
                </Col>
            </div>
        </div>
    </div>
    );
};
  

export default Home