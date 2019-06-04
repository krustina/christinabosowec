import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import './App.css';

const FAQ = [
    {
        key: 1,
        question: 'What is a Doula?',
        answer: 'A Doula is someone whose role is guiding pregnant people through their pregnancy experiences while offering them the love and compassion they need. Doulas are trained to provide emotional, physical and informational support.',
    },
    {
        key: 2,
        question: 'What is the difference between a Midwife and a Doula?',
        answer: 'Midwives are trained to provide clinical care during pregnancy and birth, just like a Family Physician or Obstetrician. While a Midwife provides clinical care, a Doula provides emotional and physical support throughout pregnancy and labour. Doulas are a non-clinical support person. There are also many types of Doulas, other than a Doula who supports pregnant people through labour and birth. A Postpartum Doula spends time with families during the postpartum period to provide encouragement and foster confidence in new parents while they adjust to life with a newborn. There are also Antepartum Doulas who work with those on bed rest due to a high risk pregnancy. An Abortion Doula provides non-judgemental support to those seeking an abortion. Miscarriage and Stillbirth Doulas give sensitive and compassionate care to someone who is struggling with a pregnancy loss. There are also Adoption Doulas who provide support to those going through the process of adopting.',
    },
    {
        key: 3,
        question: 'What is a Full Spectrum Doula?',
        answer: 'A Full Spectrum Doula is a support person who provides care to all pregnancy outcomes, whether that be miscarriage, a planned abortion or termination, stillbirth, surrogacy or adoption. Full Spectrum Doula work is not just about childbirth. It takes into account that a pregnant person might be planning on a birth but could end up with an abortion, a miscarriage or an adoption.',
    },
    {
        key: 4,
        question: 'What are the benefits of a Doula?',
        answer: "Research has shown that non-judgmental, emotional and practical support from early pregnancy and onward, and continuous labour support during birth, can help to create a more satisfying birth experience with less need for medical interventions. A positive birth experience can help to  build confidence in new parents and ease their transition into parenthood. This results in healthier outcomes for parents and babies. Today many doulas now reach beyond birth and extend their support to people of all pregnancy outcomes including: miscarriage, a planned abortion or termination, stillbirth, surrogacy or adoption. Studies show that support during these times can help with the individual's overall satisfaction, emotional state and encourage a sense of personal empowerment."
    }
]

class DoulaFAQ extends Component {
    render() {

        return (
            <div className='main-container-2'>
                <NavBarDoula />
                <div className='doula-content-container'>
                    <h1 className='doula-section-subtitle'>F.A.Q</h1>
                    <div className='doula-faq-main-container'>
                        {FAQ.map((question, i) =>
                            <div className='doula-faq-sub-container'>
                                <div className='doula-faq'>
                                    <h1>{question.question}</h1>
                                    <h2>{question.answer}</h2>
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

export default DoulaFAQ