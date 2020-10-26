import React, { useEffect, useRef } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
// import { Col, Row, Card } from 'react-bootstrap';
import Beclipse from './images/big-eclipse.svg'
import Meclipse from './images/mid-eclipse.svg'
import Seclipse from './images/small-eclipse.svg'

import { TweenMax, Power3 }  from 'gsap'

function App() {

  let heading = useRef(null)
  let heading2 = useRef(null)
  let buttonCollection = useRef(null)

  useEffect(()=>{
    TweenMax.to(
      heading,
      .9,
      {
        opacity: 1,
        y: 15,
        ease: Power3.easeOut
      }
    )
    TweenMax.to(
      heading2,
      .8,
      {
        opacity: 1,
        y: 20,
        ease: Power3.easeOut,
        delay: .9
      }
    )
    TweenMax.to(
      buttonCollection,
      .8,
      {
        opacity: 1,
        y: -35,
        ease: Power3.easeOut,
        delay: 1.8
      }
    )
  })

  return (
    <div className="App">
      <NavBar/>	
      <div className="container">
            <div style={{position: "absolute", top: 200, left: 0, width: "100%" }}>
              <h1 
                className="firstHeader" 
                ref={el => {heading = el}}
              >Update your work atmosphere.
              </h1>
              <p 
                className="secondHeader" 
                ref={el => {heading2 = el}} 
                style={{fontSize: 20, margin: 15}}
              >Improve your productivity.
              </p>
              <div class="cta">
                <button 
                  ref={el => {buttonCollection = el}} 
                  class="cta-add"
                >View Collection
                </button>
              </div>
            </div>
      </div>		
			<img class="big-circle" src={Beclipse} alt="" />
			<img class="medium-circle" src={Meclipse} alt="" />
			<img class="small-circle" src={Seclipse} alt="" />
      
    </div>
  );
}

export default App;
