import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import Footer from './Footer.js';
import DoulaTrainingDropdown from './DoulaTrainingDropdown.js';
import './App.css';


class DoulaAbout extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className='main-container-2'>
                <NavBarDoula />
                <div className='doula-content-container'>
                    <h1 className='doula-section-subtitle'>About</h1>
                    <div className='doula-about-main-container'>
                        <div className='doula-image-container'>
                            <img className='doula-image' src={require('./images/bio2.jpg')}></img>
                        </div>

                        <div className='doula-about-details'>
                            <div>
                                <h2>
                                    As a <Link to='doula_FAQ' style={{ textDecoration: 'underline', color: 'blue' }}>full-spectrum doula</Link> I aim to help fill the gaps in community support and meet people where they're at in the parenting journey. I like to get a sense of what the parents I work with want out of our experience together, making sure they each feel seen, supported, and that their decisions are valued. Not only do I focus on what makes them feel cared for, but I hold space for the fears or challenges they may be experiencing during these transitional times in their lives.
                                </h2>
                                <h2>
                                    The desire to connect with the people around me is what drives me in all my endeavours, and particularly drives the care involved in my doula practice. My doula work emerged out of working as a caregiver to infants in Montreal over several years, which is when I became acutely aware of the undervalued labour involved in providing care. I struggled over the years to feel valued and supported as a childcare provider and burned out quickly. This was a result of a lack of care towards myself. I recognize now that my capacity for caring for those around me increases when I stay true to my own needs and limitations. Often self care can get confused with being selfish, but when we take care of ourselves we end up with more energy to support those around us at home, work and in our communities.
                                </h2>
                                <h2>
                                    What does it mean to take care of ourselves? It often means fulfilling our own needs, which can involve asking for help from others or taking time for ourselves. Taking this time is not always intuitive given the movement of our lives. I've learned that self care can mean prioritizing our own needs, so that we have the capacity to care for others: we need to mother ourselves before we can mother another.
                                </h2>
                                <h2>
                                    Self-care for me is allowing myself to be vulnerable, showing kindness to myself when it may be easier to be harsh, taking the time to cook meals, spending time with loved ones, and making art. Finding this balance and self-satisfaction can help to strengthen not only trust in ourselves and our own abilities, but trust for those around us.
                                </h2>
                                <DoulaTrainingDropdown />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default DoulaAbout;