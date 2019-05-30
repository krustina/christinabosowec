import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js';
import './App.css';

class BioCv extends Component {
    render() {

        return (
            <div className='main-container-2'>
                <NavBar />
                <div className='content-container'>
                        <div className='bio'>
                            <div className='bio-img-container'>
                                <img src={require("./images/bio.jpg")} />
                            </div>
                            <div className='bio-text-container'>
                                <h1>BIO</h1>
                                <h2>Christina Bosowec is an interdisciplinary artist, nanny and Doula living in Montreal, Quebec, Canada.</h2>
                            </div>
                        </div>
                </div>
            </div>

        );

    }
}

export default BioCv;