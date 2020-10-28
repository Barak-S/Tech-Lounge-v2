import 'bootstrap/dist/css/bootstrap.min.css';
import { gsap } from "gsap";
import "./App.scss";
import Home from './Home'
import NavBar from './NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Footer'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;


