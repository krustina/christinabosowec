import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import './App.css';

const Testamonials = [
    {
        key: 1,
        testamonial: "Christina has been our part time nanny for about a year - since my daughter was 6 months old. We adore her! She is a very attentive and experienced nanny - a delight to chat with, and super knowledgeable, and very reassuring. Christina has offered me wonderful tips and resources to learn about parenting, baby’s health, etc - her unique path as a caregiver/ artist/ doula shows in her thoughtful and creative interactions with us, and as a single mom with her first child, it couldn’t be a better match!",
        name: 'k.g',
    },
    // {
    //     key: 2,
    //     testamonial: "Christina has been our part time nanny for about a year - since my daughter was 6 months old. We adore her! She is a very attentive and experienced nanny - a delight to chat with, and super knowledgeable, and very reassuring. Christina has offered me wonderful tips and resources to learn about parenting, baby’s health, etc - her unique path as a caregiver/ artist/ doula shows in her thoughtful and creative interactions with us, and as a single mom with her first child, it couldn’t be a better match!",
    //     name: 'k.g',
    // }
]

class DoulaTestamonials extends Component {
    render() {

        return (
            <div className='main-container-2'>
                <NavBarDoula />
                <div className='doula-content-container'>
                    {/* <h1 className='doula-section-subtitle'>Testamonials</h1> */}
                    <div className='doula-faq-main-container'>
                        {Testamonials.map((testamony, i) =>
                            <div className='doula-faq-sub-container'>
                                <div className='doula-faq'>
                                    <h2><i>"{testamony.testamonial}"</i></h2>
                                    <h2>-&nbsp;{testamony.name}</h2>
                                </div>
                                <img className='curved-line' src={require('./images/curve.png')} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        );

    }
}

export default DoulaTestamonials;