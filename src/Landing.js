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
                <h2>Full Spectrum Doula Care</h2>
              </Link>
              <h2>+</h2>
              <Link to="work">
                <h2>Artist</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Landing;