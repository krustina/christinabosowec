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
              <Link to="work">  
                <div className="landing-container2">
                    <img src={require("./images/x-tina-enter-outline5.png")} className="home-image2" />
                    <h1 className="home-title2">CHRISTINA<br />BOSOWEC</h1>
                </div>
              </Link>  
        </div>
        </div>
    );
  
  }
}

export default Landing;