import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import './App.css';
class NavBarDoula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        };
        this.handleDropdown.bind(this)
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
                            <Link to="/" style={{ textDecoration: 'none', color: 'transparentd' }}>
                                <h1 className="link-home">CHRISTINA BOSOWEC</h1>
                                <h2><i>~ Full-Spectrum Doula Care ~</i></h2>
                            </Link>

                            <button className="dropdown" onClick={this.handleDropdown.bind(this)} >
                                <img className='mobile-toolbar' src={require("./images/hamburger.png")} />
                            </button>
                        </div>
                    </div>
                    <div className="toolbar-options toolbar-options-mobile">
                        <Link to="doula_about" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>ABOUT</h2>
                        </Link>

                        <Link to="doula_services" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>SERVICES</h2>
                        </Link>

                        <Link to="doula_FAQ" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>FAQ</h2>
                        </Link>

                        <Link to="doula_testimonials" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>TESTIMONIALS</h2>
                        </Link>

                        <Link to="doula_contact" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>CONTACT</h2>
                        </Link>
                    </div>
                </div>
            );
        }
        if (this.state.dropdown === true) {
            return (
                <div className="toolbar-container">
                    {/* <Link to="/">
                        <div className="logo-float"><img src={require("./images/tina logo thin2_outline.png")} /></div>
                    </Link> */}
                    <div className="toolbar">
                        <div className="header-wrapper">
                            <Link to="/" style={{ textDecoration: 'none', color: 'transparentd' }}>
                                <h1 className="link-home">
                                    CHRISTINA <br></br> BOSOWEC
                                </h1>
                            </Link>

                            <button className="dropdown" onClick={this.handleDropdown.bind(this)} >

                                <span className="dropdown-close"> X </span>
                            </button>
                        </div>
                    </div>
                    <div className="toolbar-options">
                        <Link to="doula_about" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>ABOUT</h2>
                        </Link>

                        <Link to="doula_services" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>SERVICES</h2>
                        </Link>

                        <Link to="doula_FAQ" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>FAQ</h2>
                        </Link>

                        <Link to="doula_testimonials" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>TESTIMONIALS</h2>
                        </Link>

                        <Link to="doula_contact" className="toolbar-option" activeClassName="active-toolbar">
                            <h2>CONTACT</h2>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}

export default NavBarDoula;