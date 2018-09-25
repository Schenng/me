import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './css/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
        <div className="navbar pt-5 pl-5 justify-content-start">
          <Link to="/"><h4>about me</h4></Link>
          <div className="navbar-spacer"></div>
          <Link to="/experience"><h4>experience</h4></Link>
          <div className="navbar-spacer"></div>
          <Link to="/contact"><h4>contact</h4></Link>
          <div className="navbar-spacer"></div>
          <Link to="/portfolio"><h4>random</h4></Link>
        </div>
    );
  }
}