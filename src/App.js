import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./App.scss";
import { TweenMax, TweenLite, Power3 }  from 'gsap';
import Header from "./Header";

import newyork from "./images/newyork.webp";
import telaviv from "./images/telaviv.jpeg"

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function App() {

  return (
    <Router>
      <div className="App">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
      </div>
    </Router>
  );
}


const cities = [
  { name: "New York", image: newyork },
  { name: "Tel Aviv", image: telaviv }
];

const Home = () => {
  let img = useRef(null);

  // useEffect(()=>{
  //   console.log(img)
  //   TweenMax.to(
  //     img, {
  //       duration: 0.4,
  //       opacity: 1,
  //       ease: "power3.inOut"
  //     }
  //   )
  //   TweenMax.from(
  //     img, {
  //       duration: 0.4,
  //       skewY: 2,
  //       transformOrigin: "right top"
  //     }
  //   )
  // }, [])

  return (
    <div>
      <img ref={el => (img = el)} src={telaviv}/>
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

export default App;


// import React, { useEffect, useRef } from 'react'
// import './App.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './NavBar'
// // import { Col, Row, Card } from 'react-bootstrap';
// import Beclipse from './images/big-eclipse.svg'
// import Meclipse from './images/mid-eclipse.svg'
// import Seclipse from './images/small-eclipse.svg'

// import { TweenMax, Power3 }  from 'gsap'

// function App() {

//   let heading = useRef(null)
//   let heading2 = useRef(null)
//   let buttonCollection = useRef(null)

//   useEffect(()=>{
//     TweenMax.to(
//       heading,
//       .9,
//       {
//         opacity: 1,
//         y: 15,
//         ease: Power3.easeOut
//       }
//     )
//     TweenMax.to(
//       heading2,
//       .8,
//       {
//         opacity: 1,
//         y: 20,
//         ease: Power3.easeOut,
//         delay: .9
//       }
//     )
//     TweenMax.to(
//       buttonCollection,
//       .8,
//       {
//         opacity: 1,
//         y: -35,
//         ease: Power3.easeOut,
//         delay: 1.8
//       }
//     )
//   })

//   return (
//     <div className="App">
//       <NavBar/>	
//       <div className="container">
//             <div style={{position: "absolute", top: 200, left: 0, width: "100%" }}>
//               <h1 
//                 className="firstHeader" 
//                 ref={el => {heading = el}}
//               >Update your work atmosphere.
//               </h1>
//               <p 
//                 className="secondHeader" 
//                 ref={el => {heading2 = el}} 
//                 style={{fontSize: 20, margin: 15}}
//               >Improve your productivity.
//               </p>
//               <div class="cta">
//                 <button 
//                   ref={el => {buttonCollection = el}} 
//                   class="cta-add"
//                 >View Collection
//                 </button>
//               </div>
//             </div>
//       </div>		
// 			{/* <img class="big-circle" src={Beclipse} alt="" />
// 			<img class="medium-circle" src={Meclipse} alt="" />
// 			<img class="small-circle" src={Seclipse} alt="" />
//        */}
//     </div>
//   );
// }

// export default App;