import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
// import Swiper from 'react-id-swiper';
import NavBar from './NavBar.js';
import './App.css';

// TODO: open links in new tab

var images = [
    {
        key: 1,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-1.jpeg"
    },
    {
        key: 2,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-2.jpeg"
    },
    {
        key: 3,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-3.jpeg"
    },
    {
        key: 4,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-4.jpeg"
    },
    {
        key: 5,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-5.jpeg"
    },
    {
        key: 6,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-6.jpeg"
    },
    {
        key: 7,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-7.jpeg"
    },
    {
        key: 8,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-8.jpeg"
    },
    {
        key: 9,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-9.jpeg"
    },
    {
        key: 10,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-10.jpeg"
    },
    {
        key: 11,
        source: "./images/latest_performance/JPEG image-5ECEF7E0DF90-11.jpeg"
    },

]
class Performance extends Component {
    render() {
        return (
            <div className='main-container'>
                <NavBar />
                <div className='show-content-container'>
                    <div className='show-title'>
                        <Link to='work'><h2 className='back-arrow'>←</h2></Link>
                        <br/>
                        <h2>Performance</h2>
                        <br/>
                        <h2>Location</h2>
                        <br/>
                        <h2>Photo Credit</h2>
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

export default Performance;