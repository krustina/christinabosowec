import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import Footer from './Footer.js';
import './App.css';

const Testamonials = [
    {
        key: 1,
        testamonial: "Christina has been our part time nanny for about a year - since my daughter was 6 months old. We adore her! She is a very attentive and experienced nanny - a delight to chat with, and super knowledgeable, and very reassuring. Christina has offered me wonderful tips and resources to learn about parenting, baby’s health, etc - her unique path as a caregiver/ artist/ doula shows in her thoughtful and creative interactions with us, and as a single mom with her first child, it couldn’t be a better match!",
        name: 'k.g',
    },
    {
        key: 2,
        testamonial: "Christina was my doula when I had my first child. Having been through a difficult birth, her presence was especially healing. She encouraged me to talk about my birthing and postpartum experience. She also provided moral support and calm encouragement to my partner and I which is so crucial for new parents. Christina was extremely good with the baby and I felt comfortable getting some much-needed rest while she cared for my little one. The baby loved her and they would snuggle together while I napped. Thank you for being there in those tough but oh so wonderful times, Christina!",
        name: 'gabrielle'
    },
    {
        key: 3,
        testamonial:"Christina has been a wonderful caregiver and doula to me since having my son, Xavier, in 2018. I was able to count on her for tasks big and small, and found her to be a competent, knowledgeable and intuitive doula. She offered support to me as a new mother, which was a vulnerable and scary time. I could not have managed my little one without her support. From friends, I know that Christina is also a wonderful support doula after pregnancy loss and that her kind spirit, graceful energy and hardworking ways have been appreciated. Part of being a great doula is having a caring and natural way with others. I know I have felt this with Christina and have seen her work her magic with my baby, Xavier. She has such a delicate and compassionate way that she imbues in everything that she does. It comes as no surprise that Christina is now looking to doula. I fully support her in that endeavour and know that she will touch many lives in positive ways moving forward.",
        name: "cecily"
    }
]

class DoulaTestamonials extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className='main-container-2'>
                <NavBarDoula />
                <div className='doula-content-container'>
                    <h1 className='doula-section-subtitle'>Testamonials</h1>
                    <a className="testamonial-floater floater" href='mailto:contact.christinabosowec@gmail.com?subject=Hello!'>
                        <h2>Submit a testamonial <br /><br />:~)</h2>
                    </a>
                    <div className='doula-testamonial-main-container'>
                        {Testamonials.map((testamony, i) =>
                            <div className='doula-testamonial-sub-container'>
                                <div className='doula-testamonial'>
                                    <h2>"{testamony.testamonial}"</h2>
                                    <h1>{testamony.name}</h1>
                                </div>
                                <img className='curved-line' src={require('./images/curve.png')} />
                            </div>
                        )}
                    </div>
                </div>
                <Footer/>
            </div>

        );

    }
}

export default DoulaTestamonials;