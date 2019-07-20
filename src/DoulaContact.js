import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import Footer from './Footer.js';
import './App.css';

class DoulaContact extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {

        return (
            <div className='main-container-2'>
                <NavBarDoula />
                <div className='doula-content-container'>
                    <div className='doula-contact'>
                        <img src={require("./images/tina logo thin2.png")} className='doula-logo'></img>
                        <div className="contact-info">
                            <h2>Located in Montréal, QC, Canada<br/><br/></h2>
                            <h2>↓<br/><br/></h2>
                            <h2><a href='mailto:contact.christinabosowec@gmail.com?subject=Hello!'>contact.christinabosowec@gmail.com</a></h2>
                        </div>
                    </div>

                </div>
                {/* <Footer/> */}
            </div>

        );

    }
}

export default DoulaContact;