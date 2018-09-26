import React, {Component} from 'react';

import './css/Experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div className="pl-5 pt-4 experience">
        <h3> Experience </h3>
        <ul> 
          <li> Brigit - New York City, USA - 4 months</li>
          <li> Shopify - Ottawa, Canada - 8 months</li>
          <li> FlyEasy - Toronto, Canada - 8 months</li>
          <li> Mohawk College - Hamilton, Canada - 4 months</li>
          <li> Amer Networks - Mississauga, Ontario - 4 months </li>
        </ul>
      </div>
    )
  }
}