import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './css/App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="background" style={{backgroundImage: "url('waves-5.gif')"}}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
