import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
// import Mobile from './Mobile';
import './App.css';

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {

    return (
      <div className='main-container'>
        {/* <Mobile/>   */}
        <div className="desktop">
          <div className="landing-container">
            <img src={require("./images/tina logo thin2.png")} className="home-image" />
            <div className="website-selection-container">
              <Link to="doula_about" className='home-title'>
                <h3>Full-Spectrum<br/> Doula Care</h3>
              </Link>
              <a className='home-title'><h3>+</h3></a>
              <Link to="artist-landing" className='home-title'>
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