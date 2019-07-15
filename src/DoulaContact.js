import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import './App.css';

class DoulaContact extends Component {
    render() {

        return (
            <div className='main-container-2'>
                <NavBarDoula />
                <div className='content-container'>
                    <div className='doula-contact'>
                        <img src={require("./images/tina logo thin2.png")} className='doula-logo'></img>
                        <div>
                            <h2><a href='mailto:contact.christinabosowec@gmail.com?subject=Hello!'>contact.christinabosowec@gmail.com</a></h2>
                        </div>
                    </div>

                </div>
            </div>

        );

    }
}

export default DoulaContact;