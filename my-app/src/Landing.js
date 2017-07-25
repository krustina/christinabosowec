import React, { Component } from 'react';
import { Link } from 'react-router'

import './App.css';

class Landing extends Component {
render() {
 
return (
   
        <div className="desktop">
              <Link to="/home">  
                <div className="main-container">
                    <img src={require("./images/x-tina-enter-outline5.png")} className="home-image" />
                    <h1 className="home-title">CHRISTINA<br />BOSOWEC</h1>
                </div>
              </Link>  
        </div>
        
    );
  
  }
}

export default Landing;