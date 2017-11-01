import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js';
import './App.css';

// TODO: open links in new tab

class Contact extends Component {
    render() {

        return (
            <div className='main-container'>
                <NavBar />
                <div className='content-container'>
                    <div className='contact-container'>
                        <div className='contact'>
                            <div className='link'>
                                <h2 className='bold'>Email</h2>
                                <h2><a href='mailto:christina.a.bosowec@gmail.com?subject=Hello!'>christina.a.bosowec@gmail.com</a></h2>
                            </div>
                            <div className='link' >
                                <h2 className='bold'>Instagram</h2>
                                <h2><a href='http://instagram.com/xtina_bos' target="_blank">xtina_bos</a></h2>
                            </div>
                            <div className='link'>
                                <h2 className='bold'>Vimeo</h2>
                                <h2><a href='http://vimeo.com/user24985010' target="_blank">Christina Bosowec</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default Contact;