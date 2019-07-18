import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
// import Swiper from 'react-id-swiper';
import NavBar from './NavBar.js';
import './App.css';

// TODO: open links in new tab

var images = [
    {
        key: 1,
        source: "./images/object_selection/blue.jpg"
    },
    {
        key: 2,
        source: "./images/object_selection/ice_tea_banana.jpg"
    },
    {
        key: 3,
        source: "./images/object_selection/yellow.jpg"
    }

]
class ObjectSelection extends Component {
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
                        <h2>Object Selection</h2>
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

export default ObjectSelection;