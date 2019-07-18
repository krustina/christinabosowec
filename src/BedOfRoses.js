import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
// import Swiper from 'react-id-swiper';
import NavBar from './NavBar.js';
import './App.css';

// TODO: open links in new tab

var images = [
    {
        key: 1,
        source: "./images/bed_of_roses/BR1.jpg"
    },
    {
        key: 2,
        source: "./images/bed_of_roses/BR2.jpg"
    },
    {
        key: 3,
        source: "./images/bed_of_roses/BR3.jpg"
    },
    {
        key: 4,
        source: "./images/bed_of_roses/BR4.jpg"
    },
    {
        key: 5,
        source: "./images/bed_of_roses/BR5.jpg"
    },
    {
        key: 6,
        source: "./images/bed_of_roses/BR6.jpg"
    },
    {
        key: 7,
        source: "./images/bed_of_roses/BR7.jpg"
    },
    {
        key: 8,
        source: "./images/bed_of_roses/BR8.jpg"
    }
]
class BedOfRoses extends Component {
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
                        <h2>Bed of Roses</h2>
                        <br/>
                        <h2>Place Publique (2017), Fonderie Darling, Montreal, Quebec</h2>
                        <br/>
                        <h2>Photo Credit: Hugo St-Laurent</h2> 

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

export default BedOfRoses;