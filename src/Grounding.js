import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js';
import './App.css';

var images = [
    {
        key: 1,
        source: "./images/ground_ing/1_ground ing.jpg"
    },
    {
        key: 2,
        source: "./images/ground_ing/2_ground ing_edit.jpg"
    },
    {
        key: 3,
        source: "./images/ground_ing/3_ground-ing_edit.jpg"
    },
    {
        key: 4,
        source: "./images/ground_ing/5_ground ing_edit.jpg"
    },
    {
        key: 5,
        source: "./images/ground_ing/6_ground ing_edit.jpg"
    },
    {
        key: 6,
        source: "./images/ground_ing/7_ground ing.JPG"
    },
    {
        key: 7,
        source: "./images/ground_ing/8_ground ing_edit.JPG"
    },
    {
        key: 8,
        source: "./images/ground_ing/9_ground ing_edit.jpg"
    },
    {
        key: 9,
        source: "./images/ground_ing/12_ground ing_edit.jpg"
    },
    {
        key: 10,
        source: "./images/ground_ing/13_ground ing_edit.JPG"
    },
    {
        key: 11,
        source: "./images/ground_ing/14_ground ing_edit.jpg"
    },
    {
        key: 12,
        source: "./images/ground_ing/15_ground ing_edit.jpg"
    },
    {
        key: 13,
        source: "./images/ground_ing/16_ground ing_edit.jpg"
    },
    {
        key: 14,
        source: "./images/ground_ing/17_ground ing_edit.jpg"
    },
    {
        key: 15,
        source: "./images/ground_ing/18_ground ing_edit.jpg"
    }
]
class Grounding extends Component {
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
                        <h2>ground ing</h2>
                        <br/>
                        <h2>Le Mile End s’Articule (2018)</h2>
                        <br/>
                        <h2>In collaboration with Mil</h2>
                        <br/>
                        <h2>Photo Credit: Megan Mericle + Michelle Young</h2>
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