import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
// import Swiper from 'react-id-swiper';
import NavBar from './NavBar.js';
import './App.css';

// TODO: open links in new tab

var images = [
    {
        key: 1,
        source: "./images/ground_ing/3_ground-ing.jpg"
    },
    {
        key: 2,
        source: "./images/ground_ing/7_ground ing.JPG"
    },
    {
        key: 3,
        source: "./images/ground_ing/12_ground ing.jpg"
    },
    {
        key: 4,
        source: "./images/ground_ing/13_ground ing.JPG"
    }
]
class Grounding extends Component {
    render() {
        return (
            <div className='main-container'>
                <NavBar />
                <div className='show-content-container'>
                    <div className='show-title'>
                        <Link to='work'><h2 className='back-arrow'>←</h2></Link>
                        <br/>
                        <h2>ground ing</h2>
                        <br/>
                        <h2>Le Mile End s’Articule </h2>
                        <br/>
                        <h2>In collaboration with Mil</h2>
                        <br/>
                        <h2>Photo Credit: Megan Mericle</h2>
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

export default Grounding;