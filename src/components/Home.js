import React, {Component} from 'react';

import './css/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="pl-5 pt-5">
        <h3 className="pb-2"> Simon Cheng </h3>
        <h5 className="pb-2"> Toronto - New York </h5>
        <ul> 
          <li> I currently work for Brigit in NYC </li>
          <li> Previously at Shopify, where I worked on the Draft Orders API, Shipping, and a bunch of other cool stuff</li>
          <li> Freelance web design for 2 years </li>
          <li> Interested in the intersection of music, fashion, technology </li>
          <li> Surfing </li>
        </ul>
      </div>
    );
  }
}