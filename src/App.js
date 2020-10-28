import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from "gsap";
import "./App.scss";
import Home from './containers/Home'
import NavBar from './containers/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './containers/Footer'
import Cart from './containers/Cart'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


