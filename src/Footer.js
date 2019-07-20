import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <p>© Christina Bosowec 2019</p>
                <a href='mailto:contact.christinabosowec@gmail.com?subject=Hello!'><p>contact.christinabosowec@gmail.com</p></a>
            </div>
        )
    }
}

export default Footer;