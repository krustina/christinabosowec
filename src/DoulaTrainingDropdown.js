import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import './App.css';

const skills = [
    "Trained Birth Doula and Certified Postpartum Doula (MotherWit)",
    "Abortion Doula Training (The Doula Project)",
    "14 Hour Trauma-Informed Abortion Doula Training (Abortion Support Services Atlantic)", 
    "Holding Space for Pregnancy Loss: Advance 5 Hour Online Training (Institute for the Study of Birth, Breath and Death)",
    "Crafting Ritual For Abortion and Pregnancy Loss (Full-Spectrum Doula Circle)",
    "Refilling the Cup: A Course in Self Care (Full-Spectrum Doula Circle)",
    "ES01 Breastfeeding Essentials Certificate (Step 2 Education)",
    "CPR/AED Level C (Red Cross)",
    "Making Sense of Trauma: Practical Tools for Responding to Children and Youth (Webinar)",
    "Volunteer Training in Anti-oppression, Active listening, HIV and Hepatitis C and Harm Reduction (Aids Community Care Montreal)",
    "Conflict and De-escalation for Communities (Eddie Jude Hareven)",
    "BFA in Interdisciplinary Art (Nova Scotia College of Art and Design)",
]

class DoulaServicesDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
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
                <div className='doula-training-container'>
                    <div className='doula-training'>
                        <div className='doula-training-dropdown'>
                            <button className='doula-dropdown-button' onClick={this.handleDropdown.bind(this)} >
                                <h2>+</h2>
                            </button>

                            <a className='doula-training-title' onClick={this.handleDropdown.bind(this)}>
                                <h2>Training</h2>
                            </a>

                        </div>
                    </div>
                </div>
            );
        }
        if (this.state.dropdown === true) {
            return (
                <div className='doula-training-container'>
                    <div className='doula-training'>
                        <div className='doula-training-dropdown'>
                            <button className='doula-dropdown-button' onClick={this.handleDropdown.bind(this)} >
                                <h2>-</h2>
                            </button>
                            <a className='doula-training-title' onClick={this.handleDropdown.bind(this)}>
                                <h2>Training</h2>
                            </a>
                        </div>
                        <ul className='doula-training-details'>
                            {skills.map((skill, i) =>
                                    <li key={i}>{skill}</li>
                                    )}
                        </ul>
                    </div>
                </div>
            );
        }
    }
}

export default DoulaServicesDropdown;