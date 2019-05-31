import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
// import Mobile from './Mobile';
import './App.css';

class Landing extends Component {
  render() {

    return (
      <div className='main-container'>
        {/* <Mobile/>   */}
        <div className="desktop">
          <div className="landing-container">
            <img src={require("./images/tina logo thin2.png")} className="home-image" />
            <div className="website-selection-container">
              <Link to="doula_about">
                <h3>Full Spectrum Doula Care</h3>
              </Link>
              <h3>+</h3>
              <Link to="work">
                <h3>Artist</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Landing;