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
                    {/* <h1 className="home-title">CHRISTINA<br />BOSOWEC</h1> */}
                    <div className="website-selection-container">
                      <Link to="work">
                        <h2>Artist</h2>
                      </Link>
                      <h2>+</h2>
                      <h2>Full Spectrum Doula Care</h2>
                    </div>
                </div> 
        </div>
        </div>
    );
  
  }
}

export default Landing;