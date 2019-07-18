import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
// import Swiper from 'react-id-swiper';
import NavBar from './NavBar.js';
import './App.css';

// TODO: open links in new tab

var images = [
    {
        key: 1,
        source: "./images/Scrunchie_body_tube/000004.png"
    },
    {
        key: 2,
        source: "./images/Scrunchie_body_tube/0417_D7_5938-2.jpg"
    },
    {
        key: 3,
        source: "./images/Scrunchie_body_tube/0417_D7_5942.jpg"
    },
    {
        key: 4,
        source: "./images/Scrunchie_body_tube/0417_D7_5948.jpg"
    },
    {
        key: 5,
        source: "./images/Scrunchie_body_tube/0417_D7_5954.jpg"
    },
    {
        key: 6,
        source: "./images/Scrunchie_body_tube/0417_D7_5955.jpg"
    },
    {
        key: 7,
        source: "./images/Scrunchie_body_tube/0417_D7_5972.jpg"
    },

]
class ScrunchieBodyTube extends Component {
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
                        <h2>Scrunchie Body Tube</h2>
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

export default ScrunchieBodyTube;