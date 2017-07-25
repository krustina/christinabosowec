import React, { Component } from 'react';
import Landing from './Landing';
import Mobile from './Mobile';
import './App.css';

class AppWrapper extends Component {
  
render() {
 
return (
   
        <div className="app-wrapper">
         <Landing /> 
         {/* <Mobile />  */}
      </div>
        
    );
  
  }
}

export default AppWrapper;