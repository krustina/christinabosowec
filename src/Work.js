import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar.js';
import './App.css';


const portfolio = [
    {
        key: 1,
        position: 'p1',
        link: 'bedOfRoses',
        source: './images/work_icons/roses.jpeg'
        
    },
    {
        key: 2,
        position: 'p2',
        link: 'dodgeSpirit',
        source: './images/work_icons/dodge.jpeg'
    },
    {
        key: 3,
        position: 'p3',
        link: 'scrunchieBodyTube',
        source: './images/work_icons/scrunchie.png'
    },
    {
        key: 4,
        position: 'p4',
        link: 'objectSelection',
        source: './images/work_icons/main_page_image.png'
    },
    {
        key: 5,
        position: 'p5',
        link: 'spongeMeOff',
        source: './images/work_icons/spongemeoff.gif'
    },
    {
        key: 6,
        position: 'p6',
        link: 'ground-ing',
        source: './images/work_icons/13_ground ing_edit.JPG'
    }
]


class Work extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
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