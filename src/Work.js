import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js';
import './App.css';


var portfolio = [
    {
        key: 1,
        position: 'p1',
        link: 'bedOfRoses',
        source: "./images/work_icons/roses.jpeg"
    },
    {
        key: 2,
        position: 'p2',
        link: 'dodgeSpirit',
        source: "./images/work_icons/dodge.jpeg"
    },
    {
        key: 3,
        position: 'p3',
        link: 'scrunchieBodyTube',
        source: "./images/work_icons/scrunchie.png"
    },
    {
        key: 4,
        position: 'p4',
        link: 'objectSelection',
        source: "./images/work_icons/main_page_image.png"
    },
    {
        key: 5,
        position: 'p5',
        link: 'spongeMeOff',
        source: "./images/work_icons/spongemeoff.gif"
    }
]

class Work extends Component {
    render() {

        return (
            <div className='main-container-2'>
                <NavBar />
                <div className='content-container'>
                    {portfolio.map((photo, i) =>
                        <div className="work-icon">
                            <Link to={photo.link}>
                                <img key={i} className={photo.position} src={require(photo.source)} />
                            </Link>
                        </div>
                    )}
                </div>
            </div>

        );

    }
}

export default Work;