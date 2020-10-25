import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import { Col, Row, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar/>	
      <div className="container">
            <img style={{ width: "100%", position: "relative", objectFit: "cover"}} src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2067&q=80" />
            <div style={{position: "absolute", top: 165, left: 0, width: "100%" }}>
              <h1>Update your work atmosphere.</h1>
              <p style={{fontSize: 20, margin: 15}}>Improve your productivity.</p>
              <div class="cta">
                <button class="cta-add">View Collection</button>
              </div>
            </div>
      </div>		
			<img class="big-circle" src={require("./images/big-eclipse.svg")} alt="" />
			<img class="medium-circle" src={require("./images/mid-eclipse.svg")} alt="" />
			<img class="small-circle" src={require("./images/small-eclipse.svg")} alt="" />
    </div>
  );
}

export default App;
