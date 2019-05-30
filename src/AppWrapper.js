import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Landing from './Landing';
import './App.css';

class AppWrapper extends Component {

  render() {

    return (

      <div className="app-wrapper">
        <Landing />
      </div>

    );

  }
}

export default AppWrapper;