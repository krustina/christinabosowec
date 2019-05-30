import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import './App.css';

class DoulaServices extends Component {
    render() {

        return (
            <div className='main-container-2'>
                <NavBarDoula />
                <div className='content-container'>
                    {/* enter text here */}
                </div>
            </div>

        );

    }
}

export default DoulaServices;