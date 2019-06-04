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
                                <h2>Christina Bosowec (born 1990) is a performance artist and sculptor based in Montreal, Canada. With a BFA in Interdisciplinary Arts (2015), from the Nova Scotia College of Art and Design, she is currently completing her studies to become a full-spectrum doula. Bosowec sees her path as a doula as a way to expand the mediums of her artistic practice. She has worked as the Programme Assistant with the Manitoba Craft Council and has volunteered with Articule and Studio XX in Montreal. She has performed and exhibited at Flux Gallery in Winnipeg, Manitoba, Darling Foundry and Articule in Montreal, Quebec, as well as Anna Leonowens Gallery and The Khyber Center for the Arts in Halifax, Nova Scotia.</h2>
                                <br/>
                                <br/>
                                <p>Photo credit: Brandon Brookbank</p>
                            </div>
                        </div>
                </div>
            </div>

        );

    }
}

export default BioCv;