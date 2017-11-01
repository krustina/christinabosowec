import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
// import Swiper from 'react-id-swiper';
import NavBar from './NavBar.js';
import './App.css';

// TODO: open links in new tab

var images = [
    {
        key: 1,
        source: "./images/Sponge_me_off/0417_D7_5988.jpg"
    },
    {
        key: 2,
        source: "./images/Sponge_me_off/0417_D7_5993.jpg"
    },
    {
        key: 3,
        source: "./images/Sponge_me_off/1.jpeg"
    },
    {
        key: 4,
        source: "./images/Sponge_me_off/XTINA(18x24).jpeg"
    },

]
class ScrunchieBodyTube extends Component {
    render() {
        return (
            <div className='main-container'>
                <NavBar />
                <div className='show-content-container'>
                    <div className='show-title'>
                        <Link to='work'><h2 className='back-arrow'>←</h2></Link>
                        <br/>
                        <h2>Sponge Me Off</h2>
                        <br/>
                        <h2>Anna Leonowens Gallery (2014), Halifax, Nova Scotia</h2>
                        <br/>
                        <h2>In collaboration with Brandon Brookbank and Kyle Alden Martens</h2>
                    </div>
                    <div className='show-images'>
                        <ul>
                            {images.map((image, i) =>
                                <li className="img-wrapper">
                                    <img key={i} src={require(image.source)} />
                                </li>
                            )}
                            {/* <li className="img-wrapper video">
                                <iframe src="https://player.vimeo.com/video/119046271" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

        );

    }
}

export default ScrunchieBodyTube;