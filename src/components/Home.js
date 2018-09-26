import React, {Component} from 'react';

import './css/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="pl-5 pt-4 home">
        <h3 className="pb-2"> Simon Cheng </h3>
        <h5 className="pb-2"> Toronto - New York </h5>
        <ul> 
          <li> I currently work for Brigit in NYC </li>
          <li> Experienced fullstack developer. </li>
          <li> Previously at Shopify, where I worked on the Draft Orders API, Shipping, and a bunch of other cool stuff</li>
          <li> Freelancer </li>
          <li> Interested in the fusion of music, fashion, design, and technology </li>
          <li> Surfing </li>
        </ul>
      </div>
    );
  }
}