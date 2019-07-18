import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
// import Swiper from 'react-id-swiper';
import NavBar from './NavBar.js';
import './App.css';

// TODO: open links in new tab

var images = [
    {
        key: 1,
        source: "./images/Dodge_Spirit/1-dodge.jpg"
    },
    {
        key: 2,
        source: "./images/Dodge_Spirit/2-Image.jpg"
    },
    {
        key: 3,
        source: "./images/Dodge_Spirit/3-dodge.jpg"
    },
    {
        key: 4,
        source: "./images/Dodge_Spirit/4-dodge.jpg"
    },
    {
        key: 5,
        source: "./images/Dodge_Spirit/5-dodge.jpg"
    },
    {
        key: 6,
        source: "./images/Dodge_Spirit/6-dodge.jpg"
    },
    {
        key: 7,
        source: "./images/Dodge_Spirit/7-dodge.jpg"
    },
    {
        key: 8,
        source: "./images/Dodge_Spirit/8-dodge.jpg"
    },
    {
        key: 9,
        source: "./images/Dodge_Spirit/9-dodge.jpg"
    },
    {
        key: 10,
        source: "./images/Dodge_Spirit/10-dodge.jpg"
    },
    {
        key: 11,
        source: "./images/Dodge_Spirit/11-dodge.jpg"
    },
    {
        key: 12,
        source: "./images/Dodge_Spirit/12-dodge.jpg"
    },
    {
        key: 13,
        source: "./images/Dodge_Spirit/13-dodge.jpg"
    },
    {
        key: 14,
        source: "./images/Dodge_Spirit/14-dodge.jpg"
    },
    {
        key: 15,
        source: "./images/Dodge_Spirit/16-dodge.jpeg"
    },
    {
        key: 16,
        source: "./images/Dodge_Spirit/17-dodge.jpg"
    },
    {
        key: 17,
        source: "./images/Dodge_Spirit/18-dodge.jpg"
    }

]
class DodgeSpirit extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className='main-container'>
                <NavBar />
                <div className='show-content-container'>
                    <div className='show-title'>
                        <Link to='work'><h2 className='back-arrow'>←</h2></Link>
                        <br/>
                        <h2>Dodge Spirit</h2>
                        <br/>
                        <h2>Anna Leonowens Gallery (2015), Halifax, Nova Scotia</h2>
                        <br/>
                        <h2>Photo Credit: Jordan Blackburn</h2>
                    </div>
                    <div className='show-images'>
                        <ul>
                            {images.map((image, i) =>
                                <li className="img-wrapper">
                                    <img key={i} src={require(image.source)} />
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

        );

    }
}

export default DodgeSpirit;