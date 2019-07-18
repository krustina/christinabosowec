import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import './App.css';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false  
        };
        this.handleDropdown.bind(this);
    }
    handleDropdown(e) {
        e.preventDefault()
        if (this.state.dropdown === false) {
            this.setState({
                dropdown: true
            })
        }
        if (this.state.dropdown === true) {
            this.setState({
                dropdown: false
            })
        }
    }
    render() {
        if (this.state.dropdown === false) {
            return (
                <div className="toolbar-container">
                    <div className="toolbar">
                        <div className="header-wrapper">
                            <Link to="/" style={{ textDecoration: 'none', color: 'transparentd' }}><h1 className="link-home">CHRISTINA BOSOWEC</h1></Link>
                            <button className="dropdown" onClick={this.handleDropdown.bind(this)} >
                                <img className='mobile-toolbar' src={require("./images/hamburger.png")} />
                            </button>
                        </div>
                    </div>
                    <div className="toolbar-options toolbar-options-mobile">
                        <Link to="work" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>WORK</h2>
                        </Link>
                        
                        <Link to="bio" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>BIO</h2>
                        </Link>
                        
                        <Link to="contact" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>CONTACT</h2>
                        </Link>
                    </div>
                </div>
            );
        }
        if (this.state.dropdown === true) {
            return (
                <div className="toolbar-container">
                    <div className="toolbar">
                        <div className="header-wrapper">
                            <Link to="/" style={{ textDecoration: 'none', color: 'transparentd' }}><h1 className="link-home">CHRISTINA BOSOWEC</h1></Link>
                            {/* <img className="link-home" src={require('./images/nameIcon.png')}/> */}

                            <button className="dropdown" onClick={this.handleDropdown.bind(this)} >
                                {/* <img className='mobile-toolbar' src={require("./images/hamburger.png")} /> */}
                                <span className="dropdown-close"> X </span>
                            </button>
                        </div>
                    </div>
                    <div className="toolbar-options">
                        <Link to="work" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>WORK</h2>
                        </Link>

                        <Link to="bio" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>BIO</h2>
                        </Link>

                        <Link to="contact" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>CONTACT</h2>
                        </Link>
                    </div>
                </div>


            );
        }


    }
}

export default NavBar;