import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {Router, Link, navigate} from '@reach/router';
import Home from "./components/Home";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <h1>Oldschool</h1>
      {/* <Link to="/home">Home Page</Link> */}
      <Router>
        <Home path="/home"/>
        <Input path="/:input"/>
        <Input path ="/:input/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
