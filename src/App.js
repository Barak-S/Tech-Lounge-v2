import React, { useRef, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from "gsap";
import "./App.scss";
import { TweenMax, TweenLite, Power3 }  from 'gsap';
import Header from "./Header";
import Home from './Home'
import NavBar from './NavBar'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


