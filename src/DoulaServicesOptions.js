import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import './App.css';

class DoulaServicesOptions extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            dropdown: false,
            servicetitle: this.props.service.servicetitle,
            servicedesc: this.props.service.servicedesc
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
                <div className='doula-service-container'>
                    <div className='doula-service'>
                        <div className='doula-dropdown'>
                            <button className='doula-dropdown-button' onClick={this.handleDropdown.bind(this)} >
                                <h1> + </h1>
                            </button>

                            <div className='doula-service-title'>
                                <h1>{this.state.servicetitle}</h1>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
        if (this.state.dropdown === true) {
            return (
                <div className='doula-service-container'>
                    <div className='doula-service'>
                        <div className='doula-dropdown'>
                            <button className='doula-dropdown-button' onClick={this.handleDropdown.bind(this)} >
                                <h1> - </h1>
                            </button>
                            <div className='doula-service-title'>
                                <h1>{this.state.servicetitle}</h1>
                            </div>
                        </div>
                        <div className='doula-service-details'>
                            <h2>{this.state.servicedesc}</h2>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default DoulaServicesOptions;